import React from "react";
import { Button, Image, Form, FormRange } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import InvoiceDataTable from "./InvoiceDataTable";
import Modal from "react-bootstrap/Modal";
import logger from "logging-library";
import FileViewer from "react-file-viewer";
import CustomErrorComponent from "./FileErrorMessage";
import FileDrop from "./FileDrop";
import Iframe from "react-iframe";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ReactPdfViewer from "./ReactPdfViewer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import DataTable from "react-data-table-component";
import { setDefaultHighWaterMark } from "stream";

import ImageGallery from "./ImageGallery";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

async function listFolder(params) {
  const baseUrl = "https://api.upload.io";
  const path = `/v2/accounts/${params.accountId}/folders/list`;
  const entries = (obj) =>
    Object.entries(obj).filter(([, val]) => (val ?? null) !== null);
  const query = entries(params.querystring ?? {})
    .flatMap(([k, v]) => (Array.isArray(v) ? v.map((v2) => [k, v2]) : [[k, v]]))
    .map((kv) => kv.join("="))
    .join("&");
  const response = await fetch(
    `${baseUrl}${path}${query.length > 0 ? "?" : ""}${query}`,
    {
      method: "GET",
      headers: Object.fromEntries(
        entries({
          Authorization: `Bearer ${params.apiKey}`,
        })
      ),
    }
  );

  const result = await response.json();

  //this.setState({invoiceDataSet: result.folder.items})
  //alert(JSON.stringify(result))
  // proved the data is there on alert
  // this.setState({invoiceDataSet: result})
  // alert(JSON.stringify(this.state.invoiceDataSet))

  // const keys = Object.keys(this.state.invoiceDataSet);

  // const keyList = keys.map((key) => {
  //   return <li>{key}</li>;
  // });

  // alert("========================= This is invoiceState: " + this.state.invoiceDataSet)
  if (Math.floor(response.status / 100) !== 2)
    throw new Error(`Upload API Error: ${JSON.stringify(result)}`);
  return result;
}

listFolder({
  accountId: "FW25bG7",
  apiKey: "secret_FW25bG78K8E4CFZCCoW1tK5TgZug",
  querystring: {
    folderPath: "/uploads/2023/05",
    //  - Optional -
    //  cursor: "aGVsbG8=",
    //  dryRun: true,
    //  includeFiles: true,
    //  includeOverriddenStorage: true,
    //  includePhysicalFolders: true,
    //  includeVirtualFolders: true,
    //  limit: 50,
    //  recursive: true
  },
}).then(
  // (response) => console.log(`Success88: ${JSON.stringify(response)}`),
  (error) => console.error(error)
);

async function formDataUpload(params) {
  const baseUrl = "https://api.upload.io";
  const path = `/v2/accounts/${params.accountId}/uploads/form_data`;
  const entries = (obj) =>
    Object.entries(obj).filter(([, val]) => (val ?? null) !== null);
  const query = entries(params.querystring ?? {})
    .flatMap(([k, v]) => (Array.isArray(v) ? v.map((v2) => [k, v2]) : [[k, v]]))
    .map((kv) => kv.join("="))
    .join("&");
  const formData = new FormData();
  formData.append("file", params.requestBody, params.originalFileName);
  const response = await fetch(
    `${baseUrl}${path}${query.length > 0 ? "?" : ""}${query}`,
    {
      method: "POST",
      body: formData,
      headers: Object.fromEntries(
        entries({
          Authorization: `Bearer ${params.apiKey}`,
          "X-Upload-Metadata": JSON.stringify(params.metadata),
        })
      ),
    }
  );
  const result = await response.json();
  if (Math.floor(response.status / 100) !== 2)
    throw new Error(`Upload API Error: ${JSON.stringify(result)}`);
  return result;
}

// ===================================================================
const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];

let file = "https://upcdn.io/FW25bG7/image/uploads/2023/07/14/Paper-1-3fkA.jpg";
let type = "jpg";
let filename = "";

export default class Invoices extends React.Component {
  // const [fullscreen, setFullscreen] = useState(true);
  // const [show, setShow] = useState(false);

  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      invoiceDataSet: [],
      invoiceTableKeys: [], // will be populated by data returned
      descopeDataRcvd: props.descopeResponse,
      filterText: "",
      files: [],
      fullscreen: true,
      show: false,
      fileUrl:
        "https://upcdn.io/FW25bG7/image/uploads/2023/07/14/idcard-2022-09-29-6xVZ.pdf",
      width: 200,
      height: 200,
      counter: 0,
      scale: 1.3,
      wheelY: "",
      name: props.name,
      email: props.email,
      refreshInvoiceTable: false,
      masterAccessFiles: [], // to hold all masterAccess Users
      userId: props.userId,
    };
  }
  componentDidMount() {
    //alert('mounting ... ')
    // Get all the files from xref
    //console.log('name passed is: ' + this.state.name)
    //console.log("email passed is: " + this.state.email);
    this.CallAxios4Files();

    // Create a const equal to the value returned by method listFolder()
    const invoiceData = listFolder({
      accountId: "FW25bG7",
      apiKey: "secret_FW25bG78K8E4CFZCCoW1tK5TgZug",
      querystring: {
        folderPath: "/uploads",
        //  - Optional -
        //  cursor: "aGVsbG8=",
        //  dryRun: true,
        includeFiles: true,
        //  includeOverriddenStorage: true,
        includePhysicalFolders: true,
        includeVirtualFolders: true,
        //  limit: 50,
        recursive: true,
      },
    })
      .then((response) => {
        this.setState({ invoiceDataSet: response.items });
      })
      // .then((response) => console.log("Response Items: " + JSON.stringify(response.items)))
      .catch((error) => {
        console.log(error);
      });

    //alert(JSON.stringify(this.state.files))

    //console.log(" Invoice Data : " + JSON.stringify( this.state.invoiceDataSet));

    //this.setState({invoiceDataSet:invoiceData})

    //alert(JSON.stringify(invoiceData))

    // Take the returned data 'invoiceData' and set to state

    // const keys = this.stateinvoiceDataSet.items.map(obj => {
    //   console.log("#### > " + keys)
    // })
    // Get the keys and assign to state
    // 1. map out the array of objects

    // console.log("=============== componentDidMount() CALLED =============")
    // console.log(
    //   "=============== VALUE OF invoiceDataSet() =============" + this.state.invoiceDataSet
    // );
  }

  CallAxios4Files = () => {
    console.log("name id: " + this.state.userId);
    axios
      .get(
        `https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/userData/` +
          this.state.userId
      )
      .then((response) => {
        let filesFormat = JSON.stringify(response.data);
        //console.log(filesFormat);
        filesFormat.replace("/", "");
        this.setState({ files: response.data });
        // console.log(JSON.stringify('RETRIEVED FILES FROM XREF: ' + JSON.stringify(this.state.files)));
      })
      .then((response) => {
        //console.log(JSON.stringify(this.state.files));
      })
      .catch((error) => {
        console.log(error);
        //alert("Problem: " + error);
      });

    // ========= GET ALL MASTER USERS ===

    axios
      .get(
        `https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/masterAccess/`
      )
      .then((response) => {
        // let filesFormat = JSON.stringify(response.data);
        // filesFormat.replace("/", "");
        this.setState({ masterAccessFiles: response.data });
        //console.log(JSON.stringify(response.data));
        let allMasterAccess = response.data;
        // Check to see there is a match for master access
        allMasterAccess.map((masterAdmin) => {
          if (masterAdmin.email === this.state.email) {
            //console.log("WE HAVE A MATCH");
            //console.log("WE HAVE A MATCH");
          }
        });
        //console.log('Email Prop: ' + this.state.email)
      })
      .then((response) => {
        //alert("--------" + JSON.stringify(this.state.masterAccessFiles));
      })
      .catch((error) => {
        console.log(error);
        //alert("Problem: " + error);
      });

    // LOOP THROUGH THE MASTER ACCESS RESULTS TO SEE IF THE USER EMAIL MATCHES ANY INSTANCE

    //console.log(JSON.stringify(allMasterAccess))

    //console.log("CallAxios4Files: " + this.state.name);
    const encodedName = encodeURIComponent(this.state.name);
    axios
      .get(
        `https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/userData/${encodedName}`
      )
      .then((response) => {
        let filesFormat = JSON.stringify(response.data);
        filesFormat.replace("/", "");
        this.setState({ files: response.data });
        // console.log(JSON.stringify('RETRIEVED FILES FROM XREF: ' + JSON.stringify(this.state.files)));
      })
      .then((response) => {
        //console.log(JSON.stringify(this.state.files));
      })
      .catch((error) => {
        console.log(error);
        //alert("Problem: " + error);
      });
  };

  showInvData = (props) => {
    console.log("Button clicked");
    //alert(JSON.stringify("======    Welcome how can I help you " + props));
    // alert(
    //   JSON.stringify("======    File Data: " + JSON.stringify(this.state.files))
    // );
  };

  handleShow(breakpoint) {
    // setFullscreen(breakpoint);
    this.setState({ fullscreen: breakpoint });
    // setShow(true);
    this.setState({ show: true });
  }

  setFileSelected = (fileUrl) => {
    console.log("fileUrl: " + fileUrl);
    const url = fileUrl;
    const fileName = url.split("/").pop();
    file = fileUrl;
    filename = fileName;
    type = fileName.split(".").pop();
    console.log("Extension: " + type);
    // Update the state 'fileUrl' to focus on the user selected file
    this.setState({ fileUrl: fileUrl });
    // set state 'show' to allows the fullscreen visibility of Modal
    this.setState({ show: true });
    // props.showInvData("Gerald");
    // setFiles(props.filePack);
    console.log("State fileUrl: " + this.state.fileUrl);
  };

  // On top layout
  onResize = (event, { node, size, handle }) => {
    console.log("val: " + this.state.width);
    this.setState({ width: size.width, height: size.height });
  };

  handleScaleChange = (event) => {
    // min="0.3" max="2.5"
    // get current value from range component
    this.setState({ scale: parseFloat(event) });
    let rangeScaleVal = event;
    console.log("calling for a change");
    console.log("NEW " + parseFloat(event));
    let scaleVal = this.state.scale;
    console.log("OLD " + parseFloat(scaleVal));
    // if (
    //   parseFloat(scaleVal) > parseFloat(0.3) &&
    //   parseFloat(scaleVal) < parseFloat(2.5)
    // ) {
    //   console.log("MET REQUIREMENT " + this.state.scale);
    //   if (scaleVal < rangeScaleVal) {
    //     console.log("LESS THAN");
    //     let newScale = parseFloat(scaleVal + 0.1);
    //     // (newScale);
    //     // this.setState({ scale: scaleVal + 5});
    //   } else if (scaleVal > rangeScaleVal) {
    //     // this.setState({ scale: scaleVal - 0.1 });
    //   }
    // } else {
    //   // FUCK IT DO NOTHING
    // }
  };

  handleWheel = (e) => {
    let scaleVal = this.state.scale;
    let curr_wheelY = this.state.wheelY;

    console.log("Current Scaling: " + scaleVal);
    console.log("Mouse Current Wheely: " + e.deltaY);

    if (scaleVal > 0.3 && scaleVal < 2.5) {
      if (curr_wheelY > e.deltaY) {
        console.log("Increasing ... ");
        this.setState({ scale: scaleVal + 0.1 });
      } else {
        console.log("Decreasing ... ");
        this.setState({ scale: scaleVal - 0.1 });
      }
    } else if (scaleVal < 0.3) {
      console.log("Too Low");
      this.setState({ scale: scaleVal + 0.05 });
    } else {
      console.log("Too High");
      this.setState({ scale: scaleVal - 0.05 });
    }
  };

  test = (e) => {
    console.log(e);
    console.log("TEST SUCCESSFUL");
  };

  render() {
    return (
      <div
        className="border w-100 p-0 mt-3 p-0 pr-0 "
        style={{
          position: "relative",
          // backgroundColor: "gray",
          height: "1500px",
        }}
      >
        {/* <ImageGallery /> */}
        {/* {values.map((v, idx) => (
          <Button
            key={idx}
            className="me-2 mb-1"
            onClick={() => this.handleShow()}
          >
            Full screen
            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </Button>
        ))} */}
        <Modal
          show={this.state.show}
          onWheel={this.handleWheel}
          fullscreen={this.state.fullscreen}
          className="border  bg-primary  p-0 w-100 "
          // onHide={() => setShow(false)}
          onHide={() => this.setState({ show: false })}
          style={{ overflow: "hidden" }}
        >
          {/* =======================    THIS IS THE WHAT THE USER SEES */}
          <Modal.Header
            closeButton
            className="w-100 mb-0 mt-1 rounded sticky-top "
            style={{
              backgroundColor: "white",
              height: "80px",
            }}
          >
            <div>
              <Modal.Title style={{}} className="center-container ">
                <b>Techrhon Aerials | </b> Nicole Warren
              </Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body
            className="border  m-0  officeDeskImg mt-0 w-100 p-0 zoomable-element"
            style={{ overflow: "hidden" }}
          >
            <div
              className="border border-5 border-info  p-0 m-0 shadow h-25  justify-content-center align-items-center "
              style={{ height: "2500px" }}
            >
              {/* <div
                className="p-1 border"
                style={{ backgroundColor: "rgba(133, 193, 233, 0.5)" }}
              >
                <div className="row  ">
                  <div
                    className="col shadow-lg"
                    style={{ color: "white", height: "50px" }}
                  >
             
                    <h1>Techrhon Aerial</h1>
                  </div>
                  <div className="col"></div>
                </div>
              </div> */}
              {/* {this.setState({ counter: this.state.counter + 1 })}

              {"Action Counter: " + this.state.counter} */}
              <div
                className=" ml-0 m-0 p-0 row w-100 justify-content-center align-items-center"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                {/* IMAGE COLUMN */}
                <div
                  className="border border-primary ml-0 mt-0 col-12 rounded p-0 shadow m-0 resizeDiv"
                  style={{
                    // height: "100%",
                    resize: "horizontal",
                    overflow: "auto",
                    minWidth: "50%",
                    maxWidth: "100%",
                    position: "sticky",

                    //  position: "relative",
                  }}
                >
                  {/* ============== IMAGE =========== */}
                  <div
                    className="bg-info w-200 header"
                    style={{ position: "fixed", height: "200px" }}
                  >
                    <h1>A STATIC HEADER TEST</h1>
                  </div>
                  <div
                    id="wrap3"
                    className="border  rounded ml-0 shadow justify-content-center align-items-center "
                    style={{
                      width: "100%",
                      height: "1000px",
                      overflowX: "auto",
                      margin: "0 auto",
                      backgroundColor: "rgba(45,158,228, 0.3)",
                    }}
                  >
                    {/* <Image
                      src={this.state.fileUrl}
                      rounded
                      className="shadow"
                      style={{
                        display: "inline-block",
                        width: "95%",
                        border: "4px",
                      }}
                    /> */}

                    {/* <div
                      className="bg-white-50"
                      style={{
                        position: "absolute",
                        height: "50px",
                        width: "50px",
                        top: "100px",
                        left: "10px",
                        backgroundColor: "blue",
                      }}
                    >
                      <h1>+</h1>
                    </div> */}
                    <div
                      className="border border-dark shadow p-0 "
                      style={{
                        width: "98%",
                        // height: "1000px",
                      }}
                    >
                      {/* // TESTING PDF VIEW */}
                      <ReactPdfViewer
                        fileUrl={this.state.fileUrl}
                        scale={this.state.scale}
                        handleScaleChange={this.handleScaleChange}
                        test={this.test}
                        // className="shadow-lg border p-0"
                        // style={{
                        //   width: "100%",
                        //   height: "100%",
                        //   backgroundColor: "red",
                        // }}
                        style={{ height: "500px" }}
                      />
                    </div>

                    {/* <Iframenpm start
                      url={this.state.fileUrl}
                      // width="100%"
                      height="100%"
                      id="scaled-frame"
                      className="border border-5 shadow-lg mw-100 "
                      display="block"
                      style={{
                        display: "inline-block",
                        width: "100%",
                        border: "4px",
                      }}
                      // position="absolute"
                    /> */}
                  </div>
                </div>
                {/* ===== RIGHT SIDE OF PDF VIEWER ======= */}
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* <div>{JSON.stringify(this.state.files)}</div> */}
        {/* <Button onClick={this.showInvData}>Show State</Button> */}
        <div className=" mr-0" style={{ width: "95vw", position: "relative" }}>
          <div
            style={{
              height: "1600px",
              width: "100%",
              position: "absoute",
              overflowX: "true",
            }}
            className="border border-dark "
          >
            <InvoiceDataTable
              data={this.props.fileData}
              descopeResponse={this.state.descopeDataRcvd}
              showInvData={this.showInvData}
              filePack={this.state.files}
              setFileUrl={this.setFileSelected}
              isDocumentTblSelectable={this.props.isDocumentTblSelectable}
            />
          </div>
        </div>
        {/* ===== DOCUMENTS TABLE (UNDER DOCUMENTS TAB) */}

        {/* <DataTable columns={columns} data={data} /> */}

        {/* <Button
          variant="primary"
          style={{ zIndex: "-1", paddingTop: "500px" }}
          onClick={() => {
            formDataUpload({
              accountId: "FW25bG7",
              apiKey: "public_FW25bG73UKEmqZUJ5a5gbJ2VZbyt",
              requestBody: new Blob(["Example Data"], { type: "text/plain" }), // Or: pass a 'file' object from an input element.
              // - Optional -
              // metadata: {
              //  myCustomField1: true,
              //  myCustomField2: {
              //    hello: "world"
              //  },
              //  anotherCustomField: 42
              //},
              // originalFileName: "image.jpg",
              // querystring: {
              //  fileName: "image.jpg",
              //  fileNameFallback: "image.jpg",
              //  fileNameVariablesEnabled: true,
              //  filePath: "/uploads/image.jpg",
              //  folderPath: "/uploads",
              //  folderPathVariablesEnabled: true,
              //  tag: ["example_tag"]
              //}
            }).then(
              (response) => this.setState({ invoiceDataSet: response }),
              (response) => console.log(this.state.invoiceDataSet),
              (error) => console.error(error)
            );
          }}
        >
          Test Multiple Upload
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            listFolder({
              accountId: "FW25bG7",
              apiKey: "secret_FW25bG78K8E4CFZCCoW1tK5TgZug",
              querystring: {
                folderPath: "/uploads",
                //  - Optional -
                //  cursor: "aGVsbG8=",
                //  dryRun: true,
                includeFiles: true,
                //  includeOverriddenStorage: true,
                includePhysicalFolders: true,
                includeVirtualFolders: true,
                //  limit: 50,
                recursive: true,
              },
            }).then(
              // (response) => console.log(`Success: ${JSON.stringify(response)}`),
              (response) => {
                this.setState({ invoiceDataSet: response });
              },
              (error) => console.error(error)
            );
          }}
        >
          Test UploadIO
        </Button> */}
      </div>
    );
  }
}
