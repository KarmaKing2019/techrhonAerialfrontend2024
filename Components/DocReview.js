import React, { Component, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DailyRejectModal from "./DailyRejectModal";
import axios from "axios";
import withNavigation from "./withNavigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
// import { Button } from "antd";

// ===== IMAGES ====
import zoomIn from "../images/zoomIn.png";
import zoomOut from "../images/zoomOut.png";

export const DownloadLink = ({ url, fileName }) => {
  const handleDownload = () => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName || "downloaded-file";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <div>
      <Link
        onClick={handleDownload}
        style={{ textDecoration: "none", color: "#868787" }}
      >
        Download File
      </Link>
    </div>
  );
};

function NavigateDailyButton(props) {
  const navigate = useNavigate();
  // console.log(JSON.stringify(props));
  // console.log(props.fileUrl);

  const handleNavigation = (event) => {
    event.preventDefault();
    //alert("handleNavigation called");
    navigate("/dailyreports");
  };

  return (
    <div className="ml-0">
      <Link
        href="#"
        onClick={handleNavigation}
        style={{ textDecoration: "none", color: "#868787" }}
      >
        Cancel
      </Link>
      {/* <Button
        variant="light"
        onClick={handleNavigation}
        // style={{ width: "7.3rem" }}
        className="shadow"
      >
        Cancel
      </Button> */}
    </div>
  );
}

class DocReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iframeSize: 0.5,
      fileUrl: "",
      showModal: false,
      fileID: "",
      showDecisionPanel: "false", // Accept, Reject, and Delete Buttons
    };
  }

  componentDidMount() {
    //alert(window.fullname);

    // === GET FILEURL FROM THE URL STRING W/ PARAMETERS
    let fileUrl = window.location.href.split("=");
    fileUrl = fileUrl[1].split("&").shift();
    this.setState({ fileUrl: fileUrl });
    //alert(fileUrl);

    // === GET FILE OBJID FROM THE URL STRING W/ PARAMETERS
    let getfileID = window.location.href.split("=").pop();
    this.setState({ fileID: getfileID });
    //alert(getfileID);

    //const fileID = window.location.href.split("&").pop()

    //alert("Doc Review: " + fileUrl);
    //this.setState({ fileUrl: window.NewfileUrl });
  }

  increaseIframeSize = () => {
    console.log(this.state.iframeSize);
    this.setState({ iframeSize: this.state.iframeSize + 0.1 });
  };

  decreaseIframeSize = () => {
    console.log(this.state.iframeSize);
    if (this.state.iframeSize > 0.2) {
      this.setState({ iframeSize: this.state.iframeSize - 0.1 });
    }
  };

  resetIframeSize = () => {
    console.log(this.state.iframeSize);
    this.setState({ iframeSize: 0.5 });
  };

  toggleModal = (e) => {
    this.setState({ showModal: !this.state.showModal });
    // alert(e.target.innerText);
  };

  postComment = (newComment) => {
    let comment = newComment.toString();
    let fileObjID = this.state.fileID.toString();

    const newFileUpload = {
      comment,
      fileObjID,
    };

    console.log("Sending ... " + JSON.stringify(newFileUpload));

    const sendRequest = async () => {
      try {
        // Await the response from the POST request
        const res = await axios.post(
          "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/rejectComments/add",
          newFileUpload
        );
        console.log(res.data); // get the result
      } catch (error) {
        console.log("ERROR Sending ... " + error);
      }
    };

    // Call the async function
    sendRequest();

    // === UPDATE THE FILE COLLECTION TO SHOW THE DOCUMENT AS 'Rejected
    // ================================================================

    try {
      axios
        .patch(
          `https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/reject/${fileObjID}`
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
    this.navBackToDailyList();
    this.toggleModal();
  };

  approveDocument = () => {
    let fileObjID = this.state.fileID;
    try {
      axios
        .patch(
          `https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/approve/${fileObjID}`
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }

    this.navBackToDailyList();
    this.toggleModal();
  };

  navBackToDailyList = () => {
    // You can now use the onRedirect prop to navigate
    this.props.onRedirect();
  };

  deleteFile = () => {
    // Need to ensure that the route deletes file

    let fileObjID = this.state.fileID;
    try {
      axios
        .delete(
          `https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/${fileObjID}`
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }

    this.navBackToDailyList();
    //this.toggleModal();
  };

  render() {
    return (
      <div
        className="border border-warning"
        style={{ overflow: "hidden", height: "100%" }}
      >
        <Navbar expand="lg" className="bg-body-tertiary pr-2">
          <Container>
            <Navbar.Brand href="#home" className="pl-2 ">
              <b>DocuView</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="pl-3">
                  Home
                </Nav.Link>
                <Nav.Link
                  // href="https://upcdn.io/FW25bG7/raw/uploads/2024/06/03/Simple Electrician Service Invoice-2nSB.pdf"
                  // target="_blank"
                  // download="Simple Electrician Service Invoice-2nSB.pdf"
                  className="pl-3"
                >
                  <div>
                    {/* <Typography.Text>Sample JSON File</Typography.Text> */}
                    <DownloadLink
                      url={
                        "https://upcdn.io/FW25bG7/raw/uploads/2024/06/03/Simple Electrician Service Invoice-2nSB.pdf"
                      }
                      fileName="Simple Electrician Service Invoice-2nSB.pdf"
                    />
                  </div>
                </Nav.Link>
                <Nav.Link className="pl-3">
                  <NavigateDailyButton />
                </Nav.Link>
                <NavDropdown
                  title="Action"
                  id="basic-nav-dropdown"
                  className="pl-3"
                >
                  <NavDropdown.Item href="#" onClick={this.approveDocument}>
                    Approve
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" onClick={this.toggleModal}>
                    Reject
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#" onClick={this.deleteFile}>
                    Delete
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* ============== IFRAME ZOOM CONTROLS ================== */}
        <div
          className="row  w-100 m-0 justify-content-center pt-2 pb-2"
          style={{ fontSize: "1.4rem", backgroundColor: "#686867 " }}
        >
          <div className="  col-3 justify-content-end d-flex m-1 shadow">
            <Button
              variant="light"
              onClick={this.increaseIframeSize}
              // style={{ width: "7.3rem" }}
              className="shadow"
            >
              <Image
                src={zoomIn}
                className="  mt-0 p-0 img shadow"
                thumbnail
                style={{
                  //   position: "relative",
                  width: "40px",
                  height: "auto",
                  zIndex: "100",
                  // position: "absolute",
                }}
              />
            </Button>
          </div>
          <div className="  col-2 justify-content-center d-flex m-1 shadow">
            <Button
              variant="light"
              onClick={this.resetIframeSize}
              style={{ width: "200px" }}
              className="shadow"
            >
              <b>Reset</b>
            </Button>
          </div>
          <div className="  col-3 justify-content-start d-flex m-1 shadow">
            <Button
              variant="light"
              onClick={this.decreaseIframeSize}
              // style={{ width: "7.3rem" }}
              className="shadow"
            >
              <Image
                src={zoomOut}
                className="  mt-0 p-0 img shadow"
                thumbnail
                style={{
                  //   position: "relative",
                  width: "40px",
                  height: "auto",
                  zIndex: "100",
                  // position: "absolute",
                }}
              />
            </Button>
          </div>
        </div>

        {/* ============== ACTION BUTTONS (ACCEPT, REJECT, DELETE ) */}
        {window.fullname === "RHON CAMPBELL" ? (
          <></>
        ) : (
          <div
            className="d-flex justify-content-center p-1"
            style={{ fontSize: "1.5rem" }}
          >
            <strong>Document Viewer</strong>
          </div>
        )}

        <div
          style={{
            height: "100%",
            // backgroundColor: "#ffffff ",
            position: "relative",
            overflow: "auto",

            zIndex: 1,
          }}
          className="grid1"
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              overflow: "auto",
            }}
            className="border border-dark border-3"
          >
            <iframe
              id="myFrame"
              src={this.state.fileUrl}
              className="m-2"
              style={{
                height: "2000px",
                width: "1500px",
                transform: "scale(" + this.state.iframeSize + ")",
                transformOrigin: "0 0",
              }}
            />
          </div>
        </div>
        {/* ============== DOWNLOAD FILE LINK ================== */}

        <div
          className="border border-dark border-3 p-0"
          style={{ backgroundColor: "#FFF7D9" }}
        ></div>
      </div>
    );
  }
}

export default withNavigation(DocReview);
