import React, { Component, useRef } from "react";
import {
  Tabs,
  Tab,
  Form,
  Button,
  Table,
  Accordion,
  Modal,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FileDrop from "./FileDrop";
import Invoices from "./Invoices";
import axios from "axios";
import W2Form from "./W9Form";
import DriversLicenseForm from "./DriversLicenseForm";
import InputGroup from "react-bootstrap/InputGroup";
import RegisterForm from "./RegisterForm";
import UserTable from "./UserTable";
import Clock from "./Clock";
import PayrollUpload from "./PayrollUpload";
import DocViewer from "./DocViewer";

import camera from "../images/camera.png";
import dashboardBanner from "../images/dashboard_banner.jpg";

//import ImageGallery from "./ImageGallery";

const CircularJSON = require("circular-json");

// Grab the User from URL
// ##### ENTRY POINT #######

// ##### THIS ARE THE VALUES TO PULL DATA FORM THE DATABASE
const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get("user");
const email = searchParams.get("email");

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "home",
      firstname: "",
      lastname: "",
      address: "",
      mobileNumber: "",
      emergencyContact: "",
      employeeType: "Contractor",
      medicalConditions: "",
      userId: props.user,
      // VALUES BELOW ARE FOR XREF

      affiliation: "contractor",
      fileUploaded: false,
      fileUrl: "",
      // GET AND STORE FILES FROM MONGO
      files: [],
      fileUploadKey: 0, // THE KEY IS USED TO REFRESH THE FILEUPLOAD AFTER COMPLETION
      refreshInvoiceTable: false,
      validationFiles: [],
      allRequiredDocs: [],
      btnShowW2Complete: false,
      btnShowDriversLicenseComplete: false,
      showW2Form: false,
      showDriversForm: false,
      showRegistrationForm: false,
      showPayrollDocForm: false,
      currentUser: this.props.userID,
      fileShowHide: "Upload Photo",
      showModal: false,
    };

    //console.log('User: ' + this.user)
    //this.W2Ref = React.createRef(this.state.currentUser);
  }

  handleRefreshFileUpload = () => {
    console.log('Refreshing FileUpload ..."');
    this.setState((prevState) => ({
      fileUploadKey: prevState.fileUploadKey + 1,
    }));
  };

  componentDidMount() {
    // const name = searchParams.get("user");
    //console.log(this.props.userID);
    // Pull all files from 'files' table in mongodb
    this.axiosGetFiles();
    this.axiosGetRequiredDocs();
    this.checkUserRequiredDocs();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("Updaging");
    this.checkUserRequiredDocs();
    //console.log(this.state.showRegistrationForm);

    // if (this.state.allRequiredDocs !== prevState.allRequiredDocs) {
    //   localStorage.setItem(
    //     "allRequiredDocs",
    //     JSON.stringify(this.state.allRequiredDocs)
    //   );
    // }
    // const storedAllRequiredDocs = localStorage.getItem("allRequiredDocs");
    // if (storedAllRequiredDocs) {
    //   this.setState({
    //     allRequiredDocs: JSON.parse(storedAllRequiredDocs),
    //   });
    // }
    //this.setState({allRequiredDocs: obj})

    //this.checkUserRequiredDocs();

    //console.log(JSON.stringify(prevProps));
    if (this.props.fileUploaded !== prevProps.fileUploaded) {
      console.log("componentDidUpdate() executed");
      // Refresh the data in the table
      axios
        .get(
          "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/userData"
        )
        .then((response) => {
          this.setState({ files: [] });
        })
        .then(() => {
          console.log(JSON.stringify(this.state.files.length));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // if (prevState.allRequiredDocs !== this.state.allRequiredDocs) {
    //   localStorage.setItem(
    //     "allRequiredDocs",
    //     JSON.stringify(this.state.allRequiredDocs)
    //   );
    // }
  }

  checkUserRequiredDocs() {
    // == GET (ALL) REQUIRED DOCUMENTS FROM DB
    const allRequiredDocs = this.state.allRequiredDocs;

    // ===== 1. CHECK TO SEE THE REQUIRED DOCUMENTS HAVE BEEN COMPLETED
    // =====================================================
    const getAllRequiredDocs = allRequiredDocs
      .filter(
        (reqDocument) =>
          (reqDocument.name === name && reqDocument.form === "W2 Form") ||
          reqDocument.form === "Drivers License" ||
          reqDocument.form === "Payroll" ||
          reqDocument.form === "Registration Form"
      )
      .map((reqDocument) => reqDocument);
    // IF W2 COMPLETE THERENWILL BE A RESULT > LENGTH GREATER THAN 0
    // IF THERE IS A RECORD, btnShowW2Complete = true
    if (getAllRequiredDocs.length > 0) {
      //console.log("checking returned docs");

      // LOOP THROUGH getAllRequired Docs and check for document
      // based by the user name
      getAllRequiredDocs.map((row) => {
        //console.log(row.form)
        if (row.form === "W2 Form") {
          // set the table button to complete
          //console.log("Set W2 Form to complete");
          // changing the boolean state will show whether or not a document is completed
          if (!this.state.btnShowW2Complete) {
            //console.log("btonShowW2Complete is not true");
            this.setState({ btnShowW2Complete: true });
          }
        }
        if (row.form === "Payroll") {
          // set the table button to complete
          //console.log("Set License to complete");
          if (!this.state.showPayrollDocForm) {
            //alert("Found Payroll");
            this.setState({ showPayrollDocForm: true });
          }
        }
        if (row.form === "Drivers License") {
          // set the table button to complete
          //console.log("Set License to complete");
          if (!this.state.btnShowDriversLicenseComplete) {
            //alert("Found Drivers License");
            this.setState({ btnShowDriversLicenseComplete: true });
          }
        }
        if (row.form === "Registration Form") {
          // set the table button to complete
          //console.log("Set License to complete");

          if (!this.state.showRegistrationForm) {
            //alert("The answer is true.");
            this.setState({ showRegistrationForm: true });

            //console.log(this.state.showRegistrationForm)
          }
          //console.log(this.state.showRegistrationForm);
        }
      });

      // this.setState({ btnShowW2Complete : true});
    }

    // ===== 2. CHECK TO SEE IF THE W2 WAS COMPLETED
    // =====================================================
    // const isDriversLicenseComplete = allRequiredDocs
    //   .filter(
    //     (reqDocument) =>
    //       reqDocument.name === "Warren8" && reqDocument.form === "W2 Form"
    //   )
    //   .map((reqDocument) => reqDocument);
    // // IF W2 COMPLETE THERENWILL BE A RESULT > LENGTH GREATER THAN 0
    // // console.log(JSON.stringify(isW2Complete));
    // // IF THERE IS A RECORD, btnShowW2Complete = true
    // if (isDriversLicenseComplete.length > 0) {
    //   console.log("w2 updating");
    //   if (!this.state.btnShowW2Complete) {
    //     this.setState({ btnShowW2Complete: true });
    //   }
    //   // this.setState({ btnShowW2Complete : true});
    // }
  }

  // validateRequirements = () => {
  //   console.log("Axios Called");
  //   axios
  //     // .get("http://localhost:5000/files/")
  //     .get("http://localhost:5000/requiredForms/")
  //     .then((response) => {
  //       this.setState({ validationFiles: response.data });
  //     })
  //     .then(() => {
  //       console.log(JSON.stringify(this.state.validationFiles));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  axiosGetFiles = () => {
    console.log("Axios Called 2222");
    // I need to pass the first and lastname as a parameter
    // Note there is currently no logic currently on the backend
    // The page echos the current parameter successfully when called from browser
    //alert("Current User: " + this.state.currentUser);

    axios
      // .get("http://localhost:5000/files/")
      .get(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/userData/" +
          this.state.currentUser
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
        //this.setState({ allRequiredDocs: response.data });
        // FILTER DATA BY USERID
        // MAP() RESPONSE TO FILTER BY USERID
        let userFiles = response.data.map((userFiles) => {
          //console.log(userFiles.name);
          return userFiles;
        });
        //console.log(JSON.stringify(userFiles));
        this.setState({ files: response.data });
      })
      .then(() => {
        //console.log(JSON.stringify(this.state.files));
      })
      .catch((error) => {
        console.log("axiosGetFiles : " + error);
      });
  };

  // This method pulls all entires to the 'requiredForms' collection
  // ===============================================================

  axiosGetRequiredDocs = () => {
    //
    axios
      // .get("http://localhost:5000/files/")
      .get(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/requiredForms/"
      )
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        this.setState({ allRequiredDocs: response.data });
      })
      .then(() => {
        //console.log("axiosGetRequiredDocs: ");
        //console.log(JSON.stringify(this.state.allRequiredDocs));
      })
      .catch((error) => {
        console.log("axiosGetRequiredDocs : " + error);
      });
  };

  handleFileUpload = () => {
    this.setState({ fileUploaded: true });
    const encodedName = encodeURIComponent(name);
    console.log("handleFileUpload called. State updated.");
    axios
      .get(
        `https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/userData/${encodedName}`
      )
      .then((response) => {
        this.setState({ files: response.data });
      })
      .then(() => {
        console.log(JSON.stringify(this.state.files.length));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      address: this.state.address,
      mobileNumber: this.state.mobileNumber,
      emergencyContact: this.state.emergencyContact,
      employee: this.state.employeeType,
      medicalConditions: this.state.medicalConditions,
    });
  };

  updateFileURL = (props) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    // I NEED TO PULL THE FILE URL FROM HERE
    let myFileURL = props.split("?");
    let File = myFileURL[0];
    //alert(File);

    // SET THE PROVIDED URL TO STATE
    this.setState({ fileUrl: File });
    //alert(this.state.fileUrl);
    this.uploadFiles(File);
  };

  uploadFiles = (props) => {
    //alert("Upload: " + JSON.stringify(CircularJSON.stringify(props)));
    //alert("User: " + searchParams.get("user"));

    const name = this.state.currentUser;
    //alert("Answer: " + this.state.userId);
    const affiliation = this.state.affiliation;
    const fileUrl = props;

    const newFileUpload = {
      name,
      affiliation,
      fileUrl,
    };
    console.log("Sending ... " + JSON.stringify(newFileUpload));
    // console.log("fileUrl ... " + JSON.stringify(fileUrl));

    axios
      .post(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/add",
        newFileUpload
      )
      .then((res) => console.log(res.data)) // get the result
      .catch((error) => {
        console.log("ERROR Sending ... " + error);
      });
  };

  showW2FormFill = () => {
    this.setState({ showW2Form: !this.state.showW2Form });
  };

  showDriversFormFill = () => {
    this.setState({ showDriversForm: !this.state.showDriversForm });
  };

  confirmW2Complete = () => {
    //alert('confirmW2Complete() called.')
    //this.setState({ showW2Form: !this.state.showW2Form });
    this.setState({ btnShowW2Complete: !this.state.btnShowW2Complete });
  };
  confirmDriversComplete = () => {
    alert("confirmDriversComplete() called.");
    //this.setState({ showDriversLicenseForm: !this.state.showDriversLicenseForm });
    this.setState({
      btnShowDriversLicenseComplete: !this.state.btnShowDriversLicenseComplete,
    });
  };

  confirmPayrollComplete = () => {
    alert("confirmDriversComplete() called.");
    //this.setState({ showDriversLicenseForm: !this.state.showDriversLicenseForm });
    this.setState({
      showPayrollDocForm: !this.state.showPayrollDocForm,
    });
  };

  confirmRegistrationFormComplete = () => {
    // console.log("Hello world");
    this.axiosGetRequiredDocs();
    this.checkUserRequiredDocs();
  };

  ScrollToTopOnMount = () => {
    this.setState({ showRegistrationForm: true });
    console.log("Request sent");
    const dashboardElement = document.getElementById("dashPanel");
    if (dashboardElement) {
      console.log("the element does exist");
      dashboardElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  ScrollToW9 = () => {
    //this.setState({ showRegistrationForm: true });
    //window.scrollTo(500, 1800);

    console.log("W9 Form Clicked");
    const W9Element = document.getElementById("W9FormId");
    if (W9Element) {
      console.log("the element does exist");
      W9Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Show the file upload in userDashboard
  documentHideShow = () => {
    console.log("pressed ..");

    if (this.state.fileShowHide === "Upload Photo") {
      this.setState({ fileShowHide: "Cancel" });
    } else {
      this.setState({ fileShowHide: "Upload Photo" });
    }
  };

  handleShow = () => this.setState({ setShowModal: true });
  handleClose = () => this.setState({ setShowModal: false });

  handleZoom = () => {
    console.log("ZOOMING");
    // Toggle zoom class to scale up or down
    this.divRef.classList.toggle("zoomed-in");
  };

  render() {
    return (
      <div
        id="dashPanel"
        className="  p-0  "
        style={{
          position: "",
          width: "100%",
          height: "100%",
          overflowY: "auto",
          // border: "10px solid black",

          //backgroundColor: "rgba(234,182,118, 0.3)",
        }}
      >
        <div
          className=" mb-0 mt-1   p-0"
          style={{ height: "200px", width: "100%" }}
        >
          <div className="row">
            <div
              className="col-12 border  pl-0  justify-content-right d-flex bebas"
              style={{ height: "200px", position: "relative" }}
            >
              <Image
                src={dashboardBanner}
                className="shadow-lg border border-3 border-light  mt-0 "
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              />
              {/* <p style={{ fontSize: "40px" }}>{"Welcome | Techrhon Aerial"}</p> */}
            </div>
            <div className="col col-md-6">
              <br />
              {this.state.fileUrl}
            </div>
          </div>
        </div>

        <div
          className="container-fluid  mt-4 bebas mb-0"
          style={{ backgroundColor: "darkGray", width: "98%" }}
        >
          <div className="row">
            <div className="col-12 col-md-6 border mx-auto p-1 m-1">
              <div
                className="  p-1 m-1 "
                style={{ fontSize: "2.2rem", color: "white" }}
              >
                {this.state.currentUser}
              </div>
            </div>
            <div className="col-12 col-md-6 border mx-auto p-1 m-1 ">
              <div
                className=" border-3   h-100"
                style={{
                  fontSize: "2.0rem",
                  color: "white",
                  backgroundColor: "#666564 ",
                }}
              >
                <Clock />
              </div>
            </div>
          </div>
          <div className="row border border-4 pr-0">
            <div
              className="bg-light d-flex justify-content-end align-items-end bebas p-2"
              style={{ fontSize: "1.7rem" }}
            >
              <div className="mr-5">Logout</div>
            </div>
          </div>
        </div>

        <div
          className="border border-primary border-1  container-fluid p-1 mt-1"
          style={{
            backgroundColor: "#DEDEDC",
            height: "100%",
            width: "98%",
          }}
        >
          <Tabs
            id="controlled-tab-example"
            // activeKey="invoices"
            defaultActiveKey="onboarding"
            onSelect={(k) => this.setState({ key: k })}
            className="mt-4 "
          >
            {/* ================ INVOICES =============== */}
            <Tab
              eventKey="invoices"
              title={
                <h6>
                  Documents <span className="badge bg-secondary ">0</span>
                </h6>
              }
            >
              <p>Documents</p>

              <div
                className=" bgcolor-info  p-0 "
                style={{
                  position: "relative",
                  height: "1550px",

                  overflow: "hidden",
                }}
              >
                <div className="bg-warning border-5 shadow m-1 ">
                  <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        onClick={this.documentHideShow}
                        // className=""
                        // style={{ backgroundColor: "red" }}
                      >
                        <div className="border border-2 border-dark shadow rounded d-flex pl-2 pt-1 bg-light">
                          <Image
                            src={camera}
                            className="shadow  mt-0 "
                            style={{
                              position: "relative",
                              width: "35px",
                              height: "35px",
                            }}
                          />
                          <div className="justify-content-center pt-2 pl-3 pr-5">
                            <p style={{ color: "blue" }} className="bebas">
                              {this.state.fileShowHide}
                            </p>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        {/* <div className="border border-dark border-2 mb-2 mt-2 h-40 p-4 shadow d-flex justify-content-center">
                          <span class="material-symbols-outlined mr-2">
                            gpp_maybe
                          </span>
                          IMPORTANT! To Submit files or documents to Techrhon,
                          you will need to complete the required documents
                          located in the <b>Onboarding</b> Tab.
                        </div> */}
                        <FileDrop
                          // Reauired key to refesh FileDrop after uploading files
                          fileUploadkey={this.state.fileUploadKey}
                          className="bg-light rounded"
                          axiosGetFiles={this.axiosGetFiles}
                          updateFileURL={this.updateFileURL}
                          uploadFiles={this.uploadFiles}
                          handleRefreshFileUpload={this.handleRefreshFileUpload}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div
                  className="m-0 w-100 border "
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "1300px",
                      width: "100%",
                      overflow: "auto",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "1000px",
                      }}
                      className="border border-success"
                    >
                      <div style={{ height: "100%" }} className="">
                        <Table striped>
                          <thead>
                            <tr>
                              <th>Date Uploaded</th>
                              <th>Name</th>
                              <th>File</th>

                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.files.map((file) => {
                              const date = new Date(file.createdAt);
                              const formattedDateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

                              const url = file.fileUrl;
                              const filename = url.split("/").pop();

                              return (
                                <tr>
                                  <td>{formattedDateTime}</td>
                                  <td>{file.name}</td>
                                  <td>
                                    <DocViewer fileUrl={file.fileUrl} />
                                  </td>

                                  <td>Approved</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>

                  {/* {JSON.stringify(this.state.files)} */}
                  {/* <Invoices
                    key={this.state.fileUploadKey}
                    fileData={this.state.files}
                    name={name}
                    userId={this.state.currentUser}
                    email={email}
                    isDocumentTblSelectable={this.state.isDocumentTblSelectable}
                    refreshInvoiceTable={this.state.refreshInvoiceTable}
                    style={{
                      position: "relative",
                      width: "100%",
                      // height: "1500px",
                      overflow: "hidden",
                    }}
                  /> */}
                </div>
              </div>
            </Tab>
            {/* ================ DOCUMENTS =============== */}
            <Tab
              eventKey="onboarding"
              className="bg-gray"
              style={{ backgroundColor: "#EAEDED " }}
              title={
                <h6>
                  Onboarding <span className="badge bg-secondary">2</span>
                </h6>
              }
            >
              <div className="p-3 " style={{ backgroundColor: "white" }}>
                <h3 className="mt-5">
                  <b>Let's Get Started.</b>
                  <p className="mt-3 mb-4" style={{ fontSize: "1.3rem" }}>
                    Thank you for joining Techrhon Aerial. To get started, you
                    will need to complete the onboarding documents below.
                  </p>
                </h3>
              </div>

              <div
                className="border-top  border-bottom border-dark  border-3 p-2 "
                style={{
                  backgroundColor: "#F9E79F",
                  color: "white",
                }}
              >
                <h4
                  className="bebas"
                  style={{ fontSize: "1.7rem", color: "#34495E" }}
                >
                  Section 1: W9 Form
                </h4>
              </div>
              <div className="border border-dark border-1 shadow">
                <W2Form
                  name={name}
                  confirmW2Complete={this.confirmW2Complete}
                  btnShowW2Complete={this.state.btnShowW2Complete}
                  scrollToW9={this.ScrollToW9}
                />
              </div>

              <div
                className="border-top border-bottom border-dark border-3 p-2 mt-5"
                style={{
                  backgroundColor: "#F9E79F",
                  color: "white",
                }}
              >
                <h4
                  className="bebas"
                  style={{ fontSize: "1.7rem", color: "#34495E" }}
                >
                  Section 2: Payroll Documents
                </h4>
              </div>

              <div className="border border-dark border-1 shadow">
                <PayrollUpload
                  name={this.state.currentUser}
                  uploadFiles={this.uploadFiles}
                  //handleRefreshFiles={this.handleFileUpload}
                  confirmPayrollComplete={() => this.confirmPayrollComplete()}
                  showPayrollDocFormComplete={this.state.showPayrollDocForm}
                  // pass status of Drivers License to DriversLicenseForm as a prop.
                  // The prop controls the visibility of the form
                />
              </div>
              <div
                className="border-top border-bottom border-secondary border-3 p-2 mt-5"
                style={{
                  backgroundColor: "#F9E79F",
                  color: "white",
                }}
              >
                <h4
                  className="bebas"
                  style={{ fontSize: "1.7rem", color: "#34495E" }}
                >
                  Section 3: Drivers License Upload
                </h4>
              </div>

              <div className="border border-dark border-1 shadow">
                <DriversLicenseForm
                  name={name}
                  uploadFiles={this.uploadFiles}
                  //handleRefreshFiles={this.handleFileUpload}
                  confirmDriversComplete={() => this.confirmDriversComplete()}
                  btnShowDriversLicenseComplete={
                    this.state.btnShowDriversLicenseComplete
                  }
                  // pass status of Drivers License to DriversLicenseForm as a prop.
                  // The prop controls the visibility of the form
                />
              </div>
              <div
                className="border-top border-bottom border-secondary border-3 p-2 mt-5"
                style={{
                  backgroundColor: "#F9E79F",
                  color: "white",
                }}
              >
                <h4
                  className="bebas"
                  style={{ fontSize: "1.7rem", color: "#34495E" }}
                >
                  Section 4: Company Profile
                </h4>
              </div>

              <div className="border border-dark border-2 p-2" style={{}}>
                <RegisterForm
                  name={name}
                  showRegistrationForm={this.state.showRegistrationForm}
                  ScrollToTopOnMount={() => this.ScrollToTopOnMount()}
                />
              </div>
            </Tab>

            <Tab eventKey="employees" title={<h6>Employees</h6>}>
              <UserTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
