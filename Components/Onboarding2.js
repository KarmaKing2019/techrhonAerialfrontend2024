import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import NavbarComponent from "./NavbarComponent";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import { useNavigate } from "react-router-dom";

// ==== IMAGES

import fibertech from "../images/contact.png";
import hardworker from "../images/hardWork.png";
import techsTalking from "../images/bucket1.png";
import walkieTalkie from "../images/walkieTalkie2.png";
import poleClimb from "../images/poleClimb.png";
import threeguys from "../images/threeGuys.png";
import mission from "../images/mission.png";
import onboardGuy from "../images/whiteHat.png";
import rightArrow from "../images/rightArrow.png";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

class Onboarding2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      navColor: "",
      show: false,
      fileUrl: "",
      fileTitle: "",
    };
  }

  handleResizeWindow = () => {
    this.setState({ width: window.innerWidth });
    console.log(this.state.width);
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
    // window.addEventListener("scroll", this.handleScroll());
    // this.getPosition();
  }

  handleScroll = (e) => {
    if (e) {
      const topYval = e.target.scrollTop;
      //console.log("value is: " + topYval);
      if (topYval < 50) {
        console.log("No Color Applied");
        this.setState({ navColor: "" });
      } else {
        console.log("Color Applied");
        this.setState({ navColor: "rgb(59, 58, 56)" });
      }
    }
  };

  modalToggle = () => {
    this.setState({ show: !this.state.show });
  };

  inhouseDirectDeposit = () => {
    // https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDSyITeofBzwYkYXFcUUGP6duJ0UwowCmQiPGrmNR2JKrFY4nGbA9noy6FYiPfFCQQ*
    this.setState({
      fileUrl:
        "https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDSyITeofBzwYkYXFcUUGP6duJ0UwowCmQiPGrmNR2JKrFY4nGbA9noy6FYiPfFCQQ*",
    });

    this.setState({ fileTitle: "Inhouse Direct Deposit (English)" });
    this.setState({ show: true });
  };

  inhouseDirectDepositSpanish = () => {
    // https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDSyITeofBzwYkYXFcUUGP6duJ0UwowCmQiPGrmNR2JKrFY4nGbA9noy6FYiPfFCQQ*
    this.setState({
      fileUrl:
        "https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhD6YIEUY4YSPP74wYKe4AV1MsAck6rq8hhxT0rFlkWd39yn9MYKcyP3-ya76hrcG2g*",
    });

    this.setState({ fileTitle: "Inhouse Direct Deposit (Spanish)" });
    this.setState({ show: true });
  };

  subContractorAgreement = () => {
    // https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDSyITeofBzwYkYXFcUUGP6duJ0UwowCmQiPGrmNR2JKrFY4nGbA9noy6FYiPfFCQQ*
    this.setState({
      fileUrl:
        "https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCCI6Dv6aIo_AzA2HHRrYEuhMkVJJyrxO4HlWmuxlKcqmui3IhxyEE2vgljavVO1VQ*",
    });

    this.setState({ fileTitle: "Subcontractor Agreement Georgia" });
    this.setState({ show: true });
  };

  goToContactUs = () => {
    this.props.navigate("/contactus");
  };

  goToOnboarding = () => {
    this.props.navigate("/onboarding");
  };

  goToDalies = () => {
    this.props.navigate("/dailylogin");
  };

  goToAboutUs = () => {
    this.props.navigate("/aboutus");
  };

  goToSubcontractors = () => {
    this.props.navigate("/subcontractors");
  };

  goToSafety = () => {
    this.props.navigate("/safety");
  };

  render() {
    const { width } = this.state;
    const breakpoint = 800;
    return (
      <div style={{}}>
        {width > breakpoint ? (
          // =========== FULL SCREEN PC ================
          <div
            style={{ overflow: "auto", height: "100vh" }}
            onScroll={this.handleScroll}
          >
            <Modal
              show={this.state.show}
              fullscreen
              onHide={this.modalToggle}
              dialogClassName="modal-80w "
              aria-labelledby="example-custom-modal-styling-title"
              className=" mt-2"
              style={{ height: "98%" }}
              //   width="98vw"
            >
              <Modal.Header closeButton style={{ width: "98vw" }}>
                <Modal.Title id={this.state.fileTitle}>
                  {this.state.fileTitle}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                className=" p-0 mr-2"
                style={{ height: "100%", overFlow: "auto" }}
              >
                <iframe
                  src={this.state.fileUrl}
                  className=""
                  style={{
                    // transform: "scale(1.0)",
                    transformOrigin: "0 0",
                  }}
                  position="absolute"
                  title="Embedded "
                  width="100%"
                  id=""
                  height="78%"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Modal.Body>
            </Modal>
            <div
              className="mt-0 shadow-lg"
              style={{
                //   backgroundColor: "#d3d3d3",
                height: "68vh",
                marginBottom: "70px",
                // overflow: "auto",
              }}
            >
              <NavbarComponent
                navColor={this.state.navColor}
                style={{ zIndex: "9999" }}
                contactUs={this.goToContactUs}
                onboarding={this.goToOnboarding}
                dailies={this.goToDalies}
                aboutUs={this.goToAboutUs}
                goToSubcontractors={this.goToSubcontractors}
                goToSafety={this.goToSafety}
              />

              <div
                className="p-0 "
                style={{ height: "68vh", position: "relative" }}
              >
                {/* ==== BILLBOARD MESSAGE === */}
                <div
                  style={{
                    fontSize: "2.8rem",
                    color: "white",
                    bottom: "20px",
                    left: "0%",
                    position: "absolute",
                    // zIndex: "1999",
                    width: "50%",
                  }}
                  className="bebas border-right border-warning border-5 darkTint pl-3 pr-5"
                >
                  Onboarding
                  <h3 style={{ color: "orange" }}> Welcome Aboard</h3>
                </div>
                {/* <div
                  style={{
                    fontSize: "2.8rem",
                    color: "white",
                    top: "40%",
                    left: "10%",
                    position: "absolute",
                    zIndex: "101",
                  }}
                  className="bebas"
                >
                  Onboarding
                  <h3 style={{ color: "orange" }}>
                    Thank you for joining our team
                  </h3>
                </div> */}

                <Image
                  src={onboardGuy}
                  className="  mt-0 p-0 img shadow"
                  thumbnail
                  style={{
                    //   position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: "100",
                    // position: "absolute",
                  }}
                />
              </div>
            </div>

            <div className="row  w-100">
              <div className="col-4 border-right border-warning ">
                {/* ========= TECHRHON AERIAL AND STATEMENT ======== */}
                <div className=" w-100 mt-2 pr-3 d-flex justify-content-end">
                  <h2>
                    <span style={{ color: "lightgray" }}>
                      <b>Techrhon</b>
                    </span>
                    <span style={{ color: "orange" }}>
                      {" "}
                      <b>Aerial</b>
                    </span>
                  </h2>
                </div>
                <div
                  className="container p-3 d-flex justify-content-end bebas "
                  style={{ color: "darkGray" }}
                >
                  <div className="pl-5">
                    <h4>Making Great Connections.</h4>
                  </div>
                </div>
              </div>
              <div className="col-8  pl-4">
                <div className=" pr-3 w-100" style={{ marginRight: "440px" }}>
                  {/* ========= SUBCONTRACTOR ========== */}
                  <div className="row mt-3" style={{ width: "100%" }}>
                    <div className="col-1   pt-1 pl-2 pr-0">
                      <Image
                        src={rightArrow}
                        className="  mt-0 p-0 img "
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "100%",
                          height: "50px",
                        }}
                      />
                    </div>
                    <div className="col-8">
                      <div
                        className=" pl-2 border-3 mt-0 pt-0 pb-0"
                        // style={{ backgroundColor: "#565655" }}
                      >
                        <Button
                          variant="outline-secondary"
                          className=" shadow mt-1 mb-1 pl-2 pr-4 pt-0 pb-0 d-flex justifiy-content-start pt-2 pb-2"
                          onClick={this.subContractorAgreement}
                          style={{
                            // color: "lightGray",
                            // borderColor: "lightGray",
                            width: "95%",
                            borderWidth: "1px",
                            fontSize: "1.3rem",
                          }}
                        >
                          Subcontractor Agreement
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* ========= INHOUSE ONBOARD (ENGLISH) ========== */}
                  <div className="row mt-3" style={{ width: "100%" }}>
                    <div className="col-1   pt-1 pl-2 pr-0">
                      <Image
                        src={rightArrow}
                        className="  mt-0 p-0 img "
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "100%",
                          height: "50px",
                        }}
                      />
                    </div>
                    <div className="col-8">
                      <div
                        className=" pl-2 border-3 mt-0 pt-0 pb-0"
                        // style={{ backgroundColor: "#565655" }}
                      >
                        <Button
                          variant="outline-secondary"
                          className=" shadow mt-1 mb-1 pl-2 pr-4 pt-0 pb-0 d-flex justifiy-content-start pt-2 pb-2"
                          onClick={this.inhouseDirectDeposit}
                          style={{
                            // color: "lightGray",
                            // borderColor: "lightGray",
                            width: "95%",
                            borderWidth: "1px",
                            fontSize: "1.3rem",
                          }}
                        >
                          Onboard Inhouse (English)
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* ========= INHOUSE ONBOARD (ENGLISH) ========== */}
                  <div className="row mt-3" style={{ width: "100%" }}>
                    <div className="col-1   pt-1 pl-2 pr-0">
                      <Image
                        src={rightArrow}
                        className="  mt-0 p-0 img "
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "100%",
                          height: "50px",
                        }}
                      />
                    </div>
                    <div className="col-8">
                      <div
                        className=" pl-2 border-3 mt-0 pt-0 pb-0"
                        // style={{ backgroundColor: "#565655" }}
                      >
                        <Button
                          variant="outline-secondary"
                          className=" shadow mt-1 mb-1 pl-2 pr-4 pt-0 pb-0 d-flex justifiy-content-start pt-2 pb-2"
                          onClick={this.inhouseDirectDepositSpanish}
                          style={{
                            // color: "lightGray",
                            // borderColor: "lightGray",
                            width: "95%",
                            borderWidth: "1px",
                            fontSize: "1.3rem",
                          }}
                        >
                          Onboard Inhouse (Spanish)
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-100 mt-2" style={{ height: "800px" }}></div>
          </div>
        ) : (
          // =========== MOBILE PC ================
          <div
            style={{ overflow: "auto", height: "100vh" }}
            className="m-0 p-0"
            onScroll={this.handleScroll}
          >
            <Modal
              show={this.state.show}
              fullscreen
              onHide={this.modalToggle}
              dialogClassName="modal-80w "
              aria-labelledby="example-custom-modal-styling-title"
              className=" m-0 p-0"
              style={{ height: "98%", width: "100%" }}
              //   width="98vw"
            >
              <Modal.Header closeButton style={{ width: "98vw" }}>
                <Modal.Title id={this.state.fileTitle}>
                  {this.state.fileTitle}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                className=" p-0 m-0"
                style={{ height: "100%", overFlow: "auto" }}
              >
                <iframe
                  src={this.state.fileUrl}
                  className="border border-5 m-0"
                  style={{
                    // transform: "scale(0.5)",
                    transformOrigin: "0 0",
                  }}
                  position="absolute"
                  title="Embedded "
                  width="100%"
                  id=""
                  height="78%"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Modal.Body>
            </Modal>
            <div
              className="mt-0 shadow-lg"
              style={{
                //   backgroundColor: "#d3d3d3",
                height: "50vh",
                marginBottom: "70px",
                // overflow: "auto",
              }}
            >
              <NavbarComponent
                navColor={this.state.navColor}
                style={{ zIndex: "9999" }}
                contactUs={this.goToContactUs}
                onboarding={this.goToOnboarding}
                dailies={this.goToDalies}
                aboutUs={this.goToAboutUs}
                goToSubcontractors={this.goToSubcontractors}
                goToSafety={this.goToSafety}
              />

              <div
                className="p-0 "
                style={{ height: "50vh", position: "relative" }}
              >
                {/* ==== BILLBOARD MESSAGE === */}
                <div
                  style={{
                    fontSize: "2.8rem",
                    color: "white",
                    bottom: "20px",
                    left: "0%",
                    position: "absolute",
                    // zIndex: "1999",
                    width: "50%",
                  }}
                  className="bebas border-right border-warning border-5 darkTint pl-3 pr-5"
                >
                  Onboarding
                  <h3 style={{ color: "orange" }}> Welcome Aboard</h3>
                </div>
                {/* <div
                  style={{
                    fontSize: "2.8rem",
                    color: "white",
                    top: "40%",
                    left: "10%",
                    position: "absolute",
                    zIndex: "101",
                  }}
                  className="bebas"
                >
                  Onboarding
                  <h3 style={{ color: "orange" }}>
                    Thank you for joining our team
                  </h3>
                </div> */}

                <Image
                  src={onboardGuy}
                  className="  mt-0 p-0 img shadow"
                  thumbnail
                  style={{
                    //   position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: "100",
                    // position: "absolute",
                  }}
                />
              </div>
            </div>

            <div className="row  w-100 pl-2">
              <div className="col-12 border-right border-warning ">
                {/* ========= TECHRHON AERIAL AND STATEMENT ======== */}
                <div className=" w-100 mt-2 pr-0 d-flex justify-content-center">
                  <h2>
                    <span style={{ color: "lightgray" }}>
                      <b>Techrhon</b>
                    </span>
                    <span style={{ color: "orange" }}>
                      {" "}
                      <b>Aerial</b>
                    </span>
                  </h2>
                </div>
                <div
                  className="container p-2 d-flex justify-content-center bebas "
                  style={{ color: "darkGray" }}
                >
                  <div className="pl-0">
                    <h4>Making Great Connections.</h4>
                  </div>
                </div>
              </div>

              <div className=" pr-2 ml-2 w-100" style={{}}>
                {/* ========= SUBCONTRACTOR ========== */}
                <div
                  className="row  mt-3 d-flex justify-content-center"
                  style={{ width: "100%" }}
                >
                  <div className=" row w-100  mt-3 d-flex justify-content-center">
                    <div className="col-2 pt-1 pl- pr-0">
                      <Image
                        src={rightArrow}
                        className="  mt-0 p-0 img "
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "95%",
                          height: "50px",
                        }}
                      />
                    </div>
                    <div className="col-10  ">
                      <div
                        className=" pl-2  mt-0 pt-0 pb-0 "
                        // style={{ backgroundColor: "#565655" }}
                      >
                        <Button
                          variant="outline-secondary"
                          className=" shadow mt-1 mb-1 pl-2 pr-0 pt-0 pb-0 d-flex justifiy-content-start pt-2 pb-2"
                          onClick={this.subContractorAgreement}
                          style={{
                            // color: "lightGray",
                            // borderColor: "lightGray",
                            width: "100%",
                            borderWidth: "1px",
                            fontSize: "1.3rem",
                          }}
                        >
                          Subcontractor Agreement
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* onClick={this.inhouseDirectDeposit} */}
                  {/* ========= INHOUSE ONBOARD (ENGLISH) ========== */}
                  <div className=" row w-100  mt-3 d-flex justify-content-center">
                    <div className="col-2 pt-1 pl- pr-0">
                      <Image
                        src={rightArrow}
                        className="  mt-0 p-0 img "
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "95%",
                          height: "50px",
                        }}
                      />
                    </div>
                    <div className="col-10  ">
                      <div
                        className=" pl-2  mt-0 pt-0 pb-0 "
                        // style={{ backgroundColor: "#565655" }}
                      >
                        <Button
                          variant="outline-secondary"
                          className=" shadow mt-1 mb-1 pl-2 pr-0 pt-0 pb-0 d-flex justifiy-content-start pt-2 pb-2"
                          onClick={this.inhouseDirectDeposit}
                          style={{
                            // color: "lightGray",
                            // borderColor: "lightGray",
                            width: "100%",
                            borderWidth: "1px",
                            fontSize: "1.3rem",
                          }}
                        >
                          Onboard Inhouse (English)
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* ========= INHOUSE ONBOARD (SPANISH) ========== */}
                  <div className=" row w-100  mt-3 d-flex justify-content-center">
                    <div className="col-2 pt-1 pl-2 pr-0">
                      <Image
                        src={rightArrow}
                        className="  mt-0 p-0 img "
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "95%",
                          height: "50px",
                        }}
                      />
                    </div>
                    <div className="col-10  ">
                      <div
                        className=" pl-2  mt-0 pt-0 pb-0 "
                        // style={{ backgroundColor: "#565655" }}
                      >
                        <Button
                          variant="outline-secondary"
                          className=" shadow mt-1 mb-1 pl-2 pr-0 pt-0 pb-0 d-flex justifiy-content-start pt-2 pb-2"
                          onClick={this.inhouseDirectDepositSpanish}
                          style={{
                            // color: "lightGray",
                            // borderColor: "lightGray",
                            width: "100%",
                            borderWidth: "1px",
                            fontSize: "1.3rem",
                          }}
                        >
                          Onboard Inhouse (Spanish)
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-100 mt-2" style={{ height: "300px" }}></div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Onboarding2);
