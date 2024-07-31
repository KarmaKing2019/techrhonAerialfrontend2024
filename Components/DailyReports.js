import React, { Component } from "react";
import FileDrop from "./FileDrop";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Nav, Tab } from "react-bootstrap";
import RegisteredUsers from "./RegisteredUsers";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";

// ===== IMAGES ====
import officeCut1 from "../images/dailiesCPU.png";

function NavigateLogin(props) {
  const navigate = useNavigate();
  console.log(JSON.stringify(props));
  console.log(props.fileUrl);

  const handleNavigation = (props) => {
    navigate("/docreview"); // Replace '/dashboard' with your desired route
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleNavigation}
        // style={{ width: "7.3rem" }}
        className="shadow"
      >
        {props.fileUrl}
      </Button>
    </div>
  );
}

class DailyReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      files: [],
      newFiles: [],
      isUploadSuccessful: "false",
      fullname: window.fullname,
      show: false,
      rejectComments: [],
      fileUrl: "",
      askIfInvoice: true,
      invoiceValue: "",
      invoiceResponse: "",
      enableInvoiceAmount: false,
      docType: "",
      allowPost: false,
      filterSelectedValue: "All Reports",
      width: window.innerWidth,
    };
  }

  handleResizeWindow = () => {
    this.setState({ width: window.innerWidth });
    console.log(this.state.width);
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
    alert("Daily Reports Updated.");
    this.setState({ files: [] });
    this.getFilesList();
    // this.getFilesList();

    //this.refreshFileDrop();

    this.setState({ fullname: window.fullname });
    //alert(window.fullname);
  }

  componentDidUpdate(prevProps, prevState) {
    //alert("Daily Reports Updated");
    //this.getFilesList();
  }
  refreshFileDrop = () => {
    console.log("REFRESH CALLED.");
    this.setState({ files: this.state.files });
  };

  getFilesList = () => {
    if (
      this.state.fullname === "RHON CAMPBELL" ||
      this.state.fullname === "Amy Pastula"
    ) {
      ///alert("matched");
      axios
        // .get("http://localhost:5000/files/")
        .get("https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files")
        .then((response) => {
          console.log(JSON.stringify(response.data));
          console.log(Object.keys(response.data).length);

          this.setState({ files: response.data });
        })
        .then((response) => {
          //console.log(JSON.stringify(this.state.files));
        })
        .catch((error) => {
          console.log("axiosGetFiles : " + error);
        });
    } else {
      axios
        // .get("http://localhost:5000/files/")
        .get(
          "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/userData/" +
            this.state.fullname
        )
        .then((response) => {
          console.log(JSON.stringify(response.data));
          console.log(Object.keys(response.data).length);

          this.setState({ files: response.data.sort() });
        })
        .then((response) => {
          //console.log(JSON.stringify(this.state.files));
        })
        .catch((error) => {
          console.log("axiosGetFiles : " + error);
        });
    }

    // ensure files are received

    //console.log(JSON.stringify(this.state.files));

    // RELOAD THE TABLE IF THE THERE IS A DIFFERENCE AND NOT EMPTY

    //window.location.reload(true);
    this.setState({ filterSelectedValue: "All Reports" });
  };

  uploadFiles = (props) => {
    // =========================================================
    // ======== RUN CHECKS TO ENSURE INVOICE ADHERENCE =========

    // == CHECK: IF THE SELECTED ANSWER IS 'NO' THEN ALLOW POST
    // if (this.state.invoiceResponse === "No") {
    //   this.setState({ allowPost: true });
    //   this.setState({ askIfInvoice: false });
    // }

    // // == CHECK: IF THERE IS AN INVOICE BUT NO INVOICE VALUE
    // if (
    //   this.state.invoiceValue === "" &&
    //   this.state.invoiceResponse === "Yes"
    // ) {
    //   alert("Please in a dollar value for the invoice.");
    //   this.setState({ allowPost: false });
    //   this.setState({ askIfInvoice: true });

    //   return;
    // } else if (
    //   this.state.invoiceValue !== "" &&
    //   this.state.invoiceResponse === "Yes"
    // ) {
    //   // == CHECK: IF YES IS SELECTED AND INVOICE IS BLANK PROCEED
    //   // alert("everything good to proceed.");
    //   this.setState({ allowPost: true });
    //   this.setState({ askIfInvoice: false });
    // }

    // // == CHECK: IF THERE IS NO ANSWER THEN KEEP ASKING IF INVOICE
    // if (this.state.invoiceResponse === "") {
    //   this.setState({ askIfInvoice: true });
    // }

    //alert("Setting fileUrl: " + props);
    this.setState({ fileUrl: props });

    // this is where you will make a call to the backend

    let name = this.state.fullname;
    let status = "pending";
    let rejectComment = "";
    let fileUrl = props;
    let affiliation = "Agent";
    let docType = this.state.docType;
    let invoiceValue = this.state.invoiceValue.toString();

    // name: { type: String, required: false },
    // affiliation: { type: String, required: false },
    // fileUrl: { type: String, required: false },

    const newFileUpload = {
      name,
      affiliation,
      fileUrl,
      status,
      rejectComment,
      docType,
      invoiceValue,
    };

    //alert("Sending ... " + JSON.stringify(newFileUpload));
    // console.log("fileUrl ... " + JSON.stringify(fileUrl));

    if (this.state.fullname === "") {
      alert("You must enter a name before submission.");
    } else {
      if (this.state.allowPost) {
        // .post(
        //     "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/add",
        //     newFileUpload
        //   )
        axios
          .post(
            "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/add",
            newFileUpload
          )
          .then((res) => {
            console.log(res.data);
          }) // get the result
          .catch((error) => {
            console.log("ERROR Sending ... " + error);
          });
      }
    }

    //alert("Refresh Files.");

    // reset the 'invoiceResponse' user selected 'Yes or No'
    // this.setState({ invoiceResponse: "" });

    // clear the invoice value for next submission
    // this.setState({ invoiceValue: "" });

    this.getFilesList();
    //window.location.reload(false);
  };

  handleNameInput = (e) => {
    this.setState({ name: e.target.value });
  };

  changeIsSuccessful = () => {
    //alert("changed");
    this.setState({ isUploadSuccessful: !this.state.isUploadSuccessful });
    this.getFilesList();
  };

  setFileUrl = (props) => {
    alert("Returned File URL : " + props);
    this.setState({ askIfInvoice: !this.askIfInvoice });
    //window.NewfileUrl = props;
  };

  formatDateTime = (date) => {
    let dateString = date;
    let dateObject = new Date(dateString);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedDate = `${
      dateObject.getMonth() + 1
    }/${dateObject.getDate()}/${dateObject.getFullYear()} ${formattedHours}:${formattedMinutes} ${ampm}`;
    return formattedDate;
  };

  toggleCommentModal = () => {
    // this will toggle the modal
    this.setState({ show: !this.state.show });
  };

  getRejectComments = (fileID) => {
    console.log(fileID);
    let myfileID = fileID;

    axios
      .get(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/rejectComments/pullreject/" +
          fileID
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // console.log(Object.keys(response.data).length);

        this.setState({ rejectComments: response.data });
      })
      .then((response) => {
        console.log(JSON.stringify(this.state.rejectComments));
      })
      .catch((error) => {
        console.log("axiosGetFiles : " + error);
      });
    // get all relevent comments
    this.toggleCommentModal();
  };

  // handle the users dollar amount entry
  handleInvoiceValue = (event) => {
    // Remove non-numeric & non-decimal characters

    const newValue = event.target.value.replace(/[^0-9.]/g, "");
    if (this.state.invoiceResponse === "Yes") {
      this.setState({ invoiceValue: newValue });
    }

    // setValue(newValue);
  };

  // handle the users answer as to whether or not this is an invoice
  handleInvoiceSelected = (event) => {
    //event.preventDefault();
    const usersAnswer = event.target.value;
    this.setState({ invoiceResponse: usersAnswer });

    if (this.state.userAnswer !== "") {
      //alert("Allow Post");
      this.setState({ allowPost: true });
    }

    if (usersAnswer === "Yes") {
      //alert("enabled");
      this.setState({ enableInvoiceAmount: true });
      this.setState({ docType: "Invoice" });
    } else {
      this.setState({ enableInvoiceAmount: false });
      this.setState({ docType: "" });
    }
  };
  getDisabledVal = () => {
    return this.state.enableInvoiceAmount;
  };

  getUniqueName = () => {
    // let names = [
    //   "John",
    //   "Jane",
    //   "John",
    //   "Jane",
    //   "Mary",
    //   "John",
    //   "Mary",
    //   "Jane",
    // ];
    let nameList = this.state.files.map((file) => {
      return file.name;
    });

    let uniqueNames = nameList.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    //alert("Unique Names Result: " + JSON.stringify(uniqueNames));
    return uniqueNames.sort().map((name) => {
      return <option value={name}>{name}</option>;
    });
  };

  filterTableByName = (e) => {
    e.preventDefault();
    let selectedName = e.target.value;
    this.setState({ filterSelectedValue: e.target.value });

    //alert("/" + selectedName + "/");
    if (selectedName === "All Reports") {
      this.getFilesList();
      //alert("show all users");
    } else {
      let filteredList = this.state.files.map((file) => {
        if ((file.name = selectedName)) {
          return file;
        }
      });
      this.setState({ files: filteredList });
    }
  };
  // resetFileUpload = () => {
  //   alert("RESETTING");
  //   this.setState({ invoiceValue: "" });
  //   this.setState({ invoiceResponse: "" });
  //   this.setState({ askIfInvoice: true });
  //   this.setState({ allowPost: false });
  // };

  render() {
    const { width } = this.state;
    const breakpoint = 800;
    return (
      <div className="h-100" style={{ overflow: "hidden", overflowY: "auto" }}>
        <div
          className="border-bottom border-3 pattern1"
          style={{ height: "300px", position: "relative", zIndex: "1000" }}
        >
          <div className="row w-100 border border-dark border-2 p-2 m-0 fixed-top bg-light">
            <div className="  col-6 col-md-10">
              <Button variant="outline-secondary">Logout</Button>
            </div>
            <div className="col-6 col-md-2 ">
              <b>
                <input
                  type="text"
                  className="form-control fw-bold"
                  id="exampleFormControlInput1"
                  disabled="true"
                  placeholder={this.state.fullname}
                  onChange={this.handleNameInput}
                />
              </b>
            </div>
          </div>
          {width > breakpoint ? (
            <div style={{ marginTop: "60px" }}>
              <div
                className=" p-0"
                style={{
                  marginTop: "00px",
                  borderTop: "3px solid #3e3e3e",
                  borderBottom: "10px solid #3e3e3e",
                  // position: "absolute",
                  zIndex: "1005",
                  position: "relative",
                }}
              >
                <div
                  className=" border-2 w-50 darkTint ml-3 mb-0 pl-4"
                  style={{ position: "absolute", bottom: "50px" }}
                >
                  <div
                    className="bebas mb-0"
                    style={{ fontSize: "3.0rem", color: "white" }}
                  >
                    Dailies
                  </div>
                  <div
                    className="mt-0 pt-0 pb-2 bebas"
                    style={{ color: "orange", fontSize: "1.5rem" }}
                  >
                    Documents Virtual Office
                  </div>
                </div>
                {/* border-top: 3px solid #3e3e3e; border-bottom: 3px solid #3e3e3e; */}
                <Image
                  src={officeCut1}
                  className="  mt-0 p-0 img shadow"
                  // thumbnail
                  style={{
                    //   position: "relative",
                    width: "100%",
                    height: "60vh",
                    zIndex: "1003",
                    // position: "absolute",
                    // position: "absolute",
                  }}
                />
                {/* <h1>Daily Report</h1>
            <br />
            <div>
              <p>
                Instructions:
                <br />
                To upload your document, please enter your name then click the
                'Upload a File' Button. You can upload by dragging and dropping
                a file or taking a photo.
              </p>
            </div>

            <br /> */}
              </div>
              <div className="mt-3 mb-3 container  w-100">
                <Accordion
                  defaultActiveKey="0"
                  className="border  border-2 shadow rounded"
                >
                  <Accordion.Item eventKey="3" className="border border-3">
                    <Accordion.Header>
                      {/* <b>Upload Document(s)</b> */}
                      <Button variant="primary">Upload Document(s)</Button>
                    </Accordion.Header>
                    <Accordion.Body>
                      {/* ========== FILUPLOAD CONTROLS =========== */}
                      {this.state.isUploadSuccessful ? (
                        <div className="container w-50 rounded">
                          <FileDrop
                            className=""
                            uploadFiles={this.uploadFiles}
                            isUploadSuccessful={this.changeIsSuccessful}
                            // updateFileURL={this.setFileUrl}
                            name={this.state.name}
                          />
                        </div>
                      ) : (
                        <div>
                          <div
                            className="container border border-2 border-success"
                            style={{ backgroundColor: "#FFF7D9" }}
                          >
                            <div
                              className="border border-2 mb-3 p-3 bg-light bebas"
                              style={{ color: "black", fontSize: "1.7rem" }}
                            >
                              <b>
                                <p>File Upload Successful</p>
                              </b>
                            </div>

                            <div className="border border-3 border-dark rounded p-2 bg-light">
                              <Link
                                to="/dailyreports"
                                onClick={this.changeIsSuccessful}
                                className="login-link"
                              >
                                Add Another Document
                              </Link>
                            </div>

                            {/* <Button
                variant="light"
                className="border border-dark border-2"
                onClick={() => this.refreshFileDrop()}
              >
                Upload Another File
              </Button> */}
                          </div>
                        </div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
                </Accordion>
              </div>

              {/* =========== END FILEUPLOAD CONTROLS ========= */}

              {/* ========= THE TABS PANEL ========= */}
              {/* {window.fullname} */}

              {window.fullname === "RHON CAMPBELL" || "Amy Pastula" ? (
                <div
                  className="container border"
                  style={{ fontSize: "1.2rem" }}
                >
                  <Tab.Container defaultActiveKey="documents">
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="documents">Documents</Nav.Link>
                      </Nav.Item>
                      {window.fullname === "RHON CAMPBELL" ? (
                        <>
                          <Nav.Item>
                            <Nav.Link eventKey="registration">
                              Registration
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="invoices">Invoices</Nav.Link>
                          </Nav.Item>
                        </>
                      ) : (
                        <></>
                      )}
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="documents">
                        <div className="mt-4 p-0" style={{ height: "100%" }}>
                          {/* <div className="p-2 border-top border-bottom border-dark border-2">
                        <b>
                          <span>Daily Submissions Table</span>
                        </b>
                      </div> */}
                          <div className="row border-top border-bottom border-dark border-2 p-0">
                            <div className="col-2">
                              <b>Filter:</b>
                            </div>
                            <div className="col-6">
                              <select
                                onChange={this.filterTableByName}
                                style={{ height: "100%", width: "100%" }}
                                value={this.filterSelectedValue}
                              >
                                {this.state.filterSelectedValue ===
                                "All Reports" ? (
                                  <>
                                    <option value="All Reports">
                                      {" "}
                                      All Reports{" "}
                                    </option>
                                    {this.getUniqueName()}
                                  </>
                                ) : (
                                  <>{this.getUniqueName()}</>
                                )}

                                {/* <option value="Mary">Mary</option>
                            <option value="David">David</option>
                            <option value="Emily">Emily</option>
                            <option value="Michael">Michael</option> */}
                              </select>
                            </div>
                            <div className="col-3 d-flex justify-content-start">
                              <Button onClick={this.getFilesList}>Reset</Button>
                            </div>
                          </div>

                          <div
                            style={{
                              width: "100%",
                              height: "1000px",
                              position: "relative",
                              overflow: "auto",
                            }}
                            className="p-0"
                          >
                            <div style={{ position: "" }}>
                              <Table striped="columns">
                                <thead>
                                  <tr>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>File</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.state.files.map((file) => {
                                    return (
                                      <tr>
                                        <td>
                                          {this.formatDateTime(file.createdAt)}
                                        </td>
                                        <td>
                                          {/* {file.status} */}

                                          {/* <Button
                              variant="primary"
                              onClick={this.toggleCommentModal}
                            >
                              Launch demo modal
                            </Button> */}
                                          {file.status === "Rejected" ? (
                                            <Link
                                              to=""
                                              onClick={() =>
                                                this.getRejectComments(file._id)
                                              }
                                              className="login-link"
                                              style={{ color: "red" }}
                                            >
                                              Rejected
                                            </Link>
                                          ) : (
                                            file.status
                                          )}

                                          <Modal
                                            show={this.state.show}
                                            onHide={this.toggleCommentModal}
                                            style={{ height: "80vh" }}
                                          >
                                            <Modal.Header closeButton>
                                              <Modal.Title>
                                                Reason for Reject
                                              </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body
                                              style={{ height: "80%" }}
                                            >
                                              {this.state.rejectComments.map(
                                                (file) => {
                                                  return (
                                                    <div>
                                                      <b>
                                                        {this.formatDateTime(
                                                          file.createdAt
                                                        )}
                                                      </b>
                                                      <br />
                                                      <br />
                                                      {file.comment} <hr />
                                                      <div className="position-absolute bottom-20 start-20">
                                                        <Button
                                                          variant="secondary"
                                                          onClick={
                                                            this
                                                              .toggleCommentModal
                                                          }
                                                          className="mr-3"
                                                        >
                                                          Close
                                                        </Button>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </Modal.Body>
                                          </Modal>
                                        </td>
                                        <td>{file.name}</td>
                                        <td>
                                          {/* <NavigateLogin fileUrl={file.fileUrl} /> */}

                                          <Link
                                            to={
                                              "/docreview?fileUrl=" +
                                              file.fileUrl +
                                              "&fileID=" +
                                              file._id
                                            }
                                            //target="_blank"
                                            onClick=""
                                            className="login-link"
                                          >
                                            {file.fileUrl.split("/").pop()}
                                          </Link>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="registration">
                        <RegisteredUsers />
                      </Tab.Pane>
                      <Tab.Pane eventKey="invoices">
                        <p>Under Construction</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              ) : (
                <div className="border">
                  <Tab.Container defaultActiveKey="documents">
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="documents">Documents</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="documents">
                        <div
                          className="mt-4"
                          style={{ height: "100%", backgroundColor: "#FFF7D9" }}
                        >
                          <div className="p-2 border-top border-bottom border-dark border-2">
                            <b>
                              <span>Daily Submissions Table</span>
                            </b>
                          </div>

                          <div
                            style={{
                              width: "100%",
                              height: "1000px",
                              position: "relative",
                              overflow: "auto",
                            }}
                          >
                            <div style={{ position: "" }}>
                              <Table striped="columns">
                                <thead>
                                  <tr>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>File</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.state.files.map((file) => {
                                    return (
                                      <tr>
                                        <td>
                                          {this.formatDateTime(file.createdAt)}
                                        </td>
                                        <td>
                                          {/* {file.status} */}

                                          {/* <Button
                              variant="primary"
                              onClick={this.toggleCommentModal}
                            >
                              Launch demo modal
                            </Button> */}
                                          {file.status === "Rejected" ? (
                                            <Link
                                              to=""
                                              onClick={() =>
                                                this.getRejectComments(file._id)
                                              }
                                              className="login-link"
                                              style={{ color: "red" }}
                                            >
                                              Rejected
                                            </Link>
                                          ) : (
                                            file.status
                                          )}

                                          <Modal
                                            show={this.state.show}
                                            onHide={this.toggleCommentModal}
                                            style={{ height: "80vh" }}
                                          >
                                            <Modal.Header closeButton>
                                              <Modal.Title>
                                                Reason for Reject
                                              </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body
                                              style={{ height: "80%" }}
                                            >
                                              {this.state.rejectComments.map(
                                                (file) => {
                                                  return (
                                                    <div>
                                                      <b>
                                                        {this.formatDateTime(
                                                          file.createdAt
                                                        )}
                                                      </b>
                                                      <br />
                                                      <br />
                                                      {file.comment} <hr />
                                                      <div className="position-absolute bottom-20 start-20">
                                                        <Button
                                                          variant="secondary"
                                                          onClick={
                                                            this
                                                              .toggleCommentModal
                                                          }
                                                          className="mr-3"
                                                        >
                                                          Close
                                                        </Button>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </Modal.Body>
                                          </Modal>
                                        </td>
                                        <td>{file.name}</td>
                                        <td>
                                          {/* <NavigateLogin fileUrl={file.fileUrl} /> */}

                                          <Link
                                            to={
                                              "/docreview?fileUrl=" +
                                              file.fileUrl +
                                              "&fileID=" +
                                              file._id
                                            }
                                            //target="_blank"
                                            onClick=""
                                            className="login-link"
                                          >
                                            {file.fileUrl}
                                          </Link>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </div>
          ) : (
            <div style={{ marginTop: "60px" }}>
              <div
                className=" p-0"
                style={{
                  marginTop: "00px",
                  borderTop: "3px solid #3e3e3e",
                  borderBottom: "10px solid #3e3e3e",
                  // position: "absolute",
                  zIndex: "1005",
                }}
              >
                {/* border-top: 3px solid #3e3e3e; border-bottom: 3px solid #3e3e3e; */}
                <Image
                  src={officeCut1}
                  className="  mt-0 p-0 img shadow"
                  // thumbnail
                  style={{
                    //   position: "relative",
                    width: "100%",
                    height: "38vh",
                    zIndex: "1003",
                    // position: "absolute",
                  }}
                />
                {/* <h1>Daily Report</h1>
            <br />
            <div>
              <p>
                Instructions:
                <br />
                To upload your document, please enter your name then click the
                'Upload a File' Button. You can upload by dragging and dropping
                a file or taking a photo.
              </p>
            </div>

            <br /> */}
              </div>
              <div className="mt-3 mb-3 container  w-100">
                <Accordion
                  defaultActiveKey="0"
                  className="border  border-2 shadow rounded"
                >
                  <Accordion.Item eventKey="3" className="border border-3">
                    <Accordion.Header>
                      {/* <b>Upload Document(s)</b> */}
                      <Button variant="primary">Upload Document(s)</Button>
                    </Accordion.Header>
                    <Accordion.Body>
                      {/* ========== FILUPLOAD CONTROLS =========== */}
                      {this.state.isUploadSuccessful ? (
                        <div className="container w-50 rounded d-flex justify-content-center">
                          <FileDrop
                            className=""
                            uploadFiles={this.uploadFiles}
                            isUploadSuccessful={this.changeIsSuccessful}
                            // updateFileURL={this.setFileUrl}
                            name={this.state.name}
                          />
                        </div>
                      ) : (
                        <div>
                          <div
                            className="container border border-2 border-success"
                            style={{ backgroundColor: "#FFF7D9" }}
                          >
                            <div
                              className="border border-2 mb-3 p-3 bg-light bebas"
                              style={{ color: "black", fontSize: "1.7rem" }}
                            >
                              <b>
                                <p>File Upload Successful</p>
                              </b>
                            </div>

                            <div className="border border-3 border-dark rounded p-2 bg-light">
                              <Link
                                to="/dailyreports"
                                onClick={this.changeIsSuccessful}
                                className="login-link"
                              >
                                Add Another Document
                              </Link>
                            </div>

                            {/* <Button
                variant="light"
                className="border border-dark border-2"
                onClick={() => this.refreshFileDrop()}
              >
                Upload Another File
              </Button> */}
                          </div>
                        </div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
                </Accordion>
              </div>

              {/* =========== END FILEUPLOAD CONTROLS ========= */}

              {/* ========= THE TABS PANEL ========= */}
              {/* {window.fullname} */}

              {window.fullname === "RHON CAMPBELL" || "Amy Pastula" ? (
                <div
                  className="container border"
                  style={{ fontSize: "1.2rem" }}
                >
                  <Tab.Container defaultActiveKey="documents">
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="documents">Documents</Nav.Link>
                      </Nav.Item>
                      {window.fullname === "RHON CAMPBELL" ? (
                        <>
                          <Nav.Item>
                            <Nav.Link eventKey="registration">
                              Registration
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="invoices">Invoices</Nav.Link>
                          </Nav.Item>
                        </>
                      ) : (
                        <></>
                      )}
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="documents">
                        <div className="mt-4 p-0" style={{ height: "100%" }}>
                          {/* <div className="p-2 border-top border-bottom border-dark border-2">
                        <b>
                          <span>Daily Submissions Table</span>
                        </b>
                      </div> */}
                          <div className="row border-top border-bottom border-dark border-2 p-0">
                            <div className="col-2">
                              <b>Filter:</b>
                            </div>
                            <div className="col-6">
                              <select
                                onChange={this.filterTableByName}
                                style={{ height: "100%", width: "100%" }}
                                value={this.filterSelectedValue}
                              >
                                {this.state.filterSelectedValue ===
                                "All Reports" ? (
                                  <>
                                    <option value="All Reports">
                                      {" "}
                                      All Reports{" "}
                                    </option>
                                    {this.getUniqueName()}
                                  </>
                                ) : (
                                  <>{this.getUniqueName()}</>
                                )}

                                {/* <option value="Mary">Mary</option>
                            <option value="David">David</option>
                            <option value="Emily">Emily</option>
                            <option value="Michael">Michael</option> */}
                              </select>
                            </div>
                            <div className="col-3 d-flex justify-content-start">
                              <Button onClick={this.getFilesList}>Reset</Button>
                            </div>
                          </div>

                          <div
                            style={{
                              width: "100%",
                              height: "1000px",
                              position: "relative",
                              overflow: "auto",
                            }}
                            className="p-0"
                          >
                            <div style={{ position: "" }}>
                              <Table striped="columns">
                                <thead>
                                  <tr>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>File</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.state.files.map((file) => {
                                    return (
                                      <tr>
                                        <td>
                                          {this.formatDateTime(file.createdAt)}
                                        </td>
                                        <td>
                                          {/* {file.status} */}

                                          {/* <Button
                              variant="primary"
                              onClick={this.toggleCommentModal}
                            >
                              Launch demo modal
                            </Button> */}
                                          {file.status === "Rejected" ? (
                                            <Link
                                              to=""
                                              onClick={() =>
                                                this.getRejectComments(file._id)
                                              }
                                              className="login-link"
                                              style={{ color: "red" }}
                                            >
                                              Rejected
                                            </Link>
                                          ) : (
                                            file.status
                                          )}

                                          <Modal
                                            show={this.state.show}
                                            onHide={this.toggleCommentModal}
                                            style={{ height: "80vh" }}
                                          >
                                            <Modal.Header closeButton>
                                              <Modal.Title>
                                                Reason for Reject
                                              </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body
                                              style={{ height: "80%" }}
                                            >
                                              {this.state.rejectComments.map(
                                                (file) => {
                                                  return (
                                                    <div>
                                                      <b>
                                                        {this.formatDateTime(
                                                          file.createdAt
                                                        )}
                                                      </b>
                                                      <br />
                                                      <br />
                                                      {file.comment} <hr />
                                                      <div className="position-absolute bottom-20 start-20">
                                                        <Button
                                                          variant="secondary"
                                                          onClick={
                                                            this
                                                              .toggleCommentModal
                                                          }
                                                          className="mr-3"
                                                        >
                                                          Close
                                                        </Button>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </Modal.Body>
                                          </Modal>
                                        </td>
                                        <td>{file.name}</td>
                                        <td>
                                          {/* <NavigateLogin fileUrl={file.fileUrl} /> */}

                                          <Link
                                            to={
                                              "/docreview?fileUrl=" +
                                              file.fileUrl +
                                              "&fileID=" +
                                              file._id
                                            }
                                            //target="_blank"
                                            onClick=""
                                            className="login-link"
                                          >
                                            {file.fileUrl.split("/").pop()}
                                          </Link>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="registration">
                        <RegisteredUsers />
                      </Tab.Pane>
                      <Tab.Pane eventKey="invoices">
                        <p>Under Construction</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              ) : (
                <div className="border">
                  <Tab.Container defaultActiveKey="documents">
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="documents">Documents</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="documents">
                        <div
                          className="mt-4"
                          style={{ height: "100%", backgroundColor: "#FFF7D9" }}
                        >
                          <div className="p-2 border-top border-bottom border-dark border-2">
                            <b>
                              <span>Daily Submissions Table</span>
                            </b>
                          </div>

                          <div
                            style={{
                              width: "100%",
                              height: "1000px",
                              position: "relative",
                              overflow: "auto",
                            }}
                          >
                            <div style={{ position: "" }}>
                              <Table striped="columns">
                                <thead>
                                  <tr>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>File</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.state.files.map((file) => {
                                    return (
                                      <tr>
                                        <td>
                                          {this.formatDateTime(file.createdAt)}
                                        </td>
                                        <td>
                                          {/* {file.status} */}

                                          {/* <Button
                              variant="primary"
                              onClick={this.toggleCommentModal}
                            >
                              Launch demo modal
                            </Button> */}
                                          {file.status === "Rejected" ? (
                                            <Link
                                              to=""
                                              onClick={() =>
                                                this.getRejectComments(file._id)
                                              }
                                              className="login-link"
                                              style={{ color: "red" }}
                                            >
                                              Rejected
                                            </Link>
                                          ) : (
                                            file.status
                                          )}

                                          <Modal
                                            show={this.state.show}
                                            onHide={this.toggleCommentModal}
                                            style={{ height: "80vh" }}
                                          >
                                            <Modal.Header closeButton>
                                              <Modal.Title>
                                                Reason for Reject
                                              </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body
                                              style={{ height: "80%" }}
                                            >
                                              {this.state.rejectComments.map(
                                                (file) => {
                                                  return (
                                                    <div>
                                                      <b>
                                                        {this.formatDateTime(
                                                          file.createdAt
                                                        )}
                                                      </b>
                                                      <br />
                                                      <br />
                                                      {file.comment} <hr />
                                                      <div className="position-absolute bottom-20 start-20">
                                                        <Button
                                                          variant="secondary"
                                                          onClick={
                                                            this
                                                              .toggleCommentModal
                                                          }
                                                          className="mr-3"
                                                        >
                                                          Close
                                                        </Button>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </Modal.Body>
                                          </Modal>
                                        </td>
                                        <td>{file.name}</td>
                                        <td>
                                          {/* <NavigateLogin fileUrl={file.fileUrl} /> */}

                                          <Link
                                            to={
                                              "/docreview?fileUrl=" +
                                              file.fileUrl +
                                              "&fileID=" +
                                              file._id
                                            }
                                            //target="_blank"
                                            onClick=""
                                            className="login-link"
                                          >
                                            {file.fileUrl}
                                          </Link>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DailyReports;
