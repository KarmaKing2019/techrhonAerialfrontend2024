import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import NavbarComponent from "./NavbarComponent";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { ListGroup } from "react-bootstrap";

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
import subcontractor from "../images/subcontractors.png";
import subcontractorShort from "../images/subcontractorShort.png";
import contractorTable from "../images/bundleCrew.png";
import bundleCrewShort from "../images/bundleCrewShort.png";
import bucketLong from "../images/bucketLong.png";
import bucketShort from "../images/bucketShort.png";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

class Subtractors extends Component {
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
              className=" mt-0 shadow-lg"
              style={{
                //   backgroundColor: "#d3d3d3",
                height: "68vh",
                marginBottom: "40px",
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
                  Subcontractors
                  <h3 style={{ color: "orange" }}>
                    {" "}
                    We look forward to working with you
                  </h3>
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
                  Subcontractors
                  <h3 style={{ color: "orange" }}>
                    We look forward to working with you
                  </h3>
                </div> */}

                <Image
                  src={subcontractor}
                  className="  mt-0 p-0 img shadow"
                  thumbnail
                  style={{
                    //   position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: "100",
                  }}
                />
              </div>
            </div>
            <div className="container  w-100 shadow-lg">
              <div className="row" style={{ height: "400px" }}>
                <div className="col-4  d-flex justify-content-center text-align-center">
                  <Image
                    src={contractorTable}
                    className="  mt-0 p-0 img shadow mt-5"
                    thumbnail
                    style={{
                      //   position: "relative",
                      width: "90%",
                      height: "auto",
                      zIndex: "100",
                      position: "absolute",
                    }}
                  />
                </div>
                <div className="col-8  d-flex justify-content-center ">
                  <div className="container  p-3">
                    <div className="row  pl-3">
                      <h3>
                        <b>Partner with Us</b>
                      </h3>
                    </div>
                    <div className="row  pl-3 mt-3">
                      <span>
                        Techrhon Aerial has over 20 years of experience in the
                        telecommunications industry. We are always striving to
                        provide top tier services for our clients. <br />
                        <br /> We operate in the US southeast region, and are
                        always looking for partners who share our commitment to
                        excellence, a high-quality work ethic, and a drive to
                        complete our overall mission. <br />
                        <br /> If you are interested in working with us, please
                        provide us your information. We will contact you within
                        24-48 hours.
                      </span>
                      <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white", fontSize: "1.5rem" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container  w-100 mt-4">
              <div
                className="row"
                style={{ height: "680px", marginBottom: "50px" }}
              >
                <div className="col-8  d-flex justify-content-center text-align-center ">
                  <div className="container  p-3">
                    <div className="row  pl-3">
                      <h3>
                        <b>Subcontractor Requirements</b>
                      </h3>
                    </div>
                    <div className="row  pl-3 mt-3 ">
                      <div>
                        <ListGroup as="ol" className="mt-4">
                          <ListGroup.Item as="li">
                            <b>Experience and Training:</b> Proven experience in
                            fiber optics installation, troubleshooting, and
                            maintenance, usually obtained through hands-on job
                            experience and training programs.
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            <b>Understanding of Protocols and Equipment:</b> A
                            solid understanding of industry-standard protocols
                            and equipment.
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            <b>Problem-Solving Skills:</b> Strong
                            problem-solving skills and the ability to work under
                            minimal supervision1.
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            <b>Certification:</b> The technicians doing the
                            installation should be trained and certified by
                            organizations like The Fiber Optic Association (FOA)
                            or manufacturers of the products being installed2
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            <b>Knowledge of Installation Process:</b> An
                            understanding of the fiber optic cable installation
                            process, including prep work, equipment preparation,
                            cable route preparation, cable laying, testing, and
                            connection to the network equipment3.
                          </ListGroup.Item>
                          <ListGroup.Item as="li">
                            <b>Adherence to Standards:</b> Compliance with the
                            minimum requirements set out by organizations such
                            as the FOA for safe and reliable fiber optic
                            premises cabling4.
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      <div className="mt-4 w-100  d-flex justify-content-center">
                        Techrhon Aerial strives is committed to adhering to all
                        government, state, and local safety guidelines. We
                        strive to acheive ALL customer requirements on a daily
                        basis.
                      </div>
                      <div className="mt-4 w-100  d-flex justify-content-center mt-5 pb-4">
                        <i s>
                          Please download our supplier code of contact{" "}
                          <u>here</u>
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4  d-flex justify-content-center ">
                  <div className="container  p-1">
                    <Image
                      src={bucketLong}
                      className="  mt-0 p-0 img shadow mt-0"
                      thumbnail
                      style={{
                        //   position: "relative",
                        width: "90%",
                        height: "auto",
                        zIndex: "100",
                        position: "absolute",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" w-100 mt-4 bg-warning"
              style={{ height: "100px" }}
            ></div>
          </div>
        ) : (
          // =========== MOBILE PC ================
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
                height: "38vh",
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
                style={{ height: "48vh", position: "relative" }}
              >
                {/* ==== BILLBOARD MESSAGE === */}
                <div
                  style={{
                    fontSize: "2.8rem",
                    color: "white",
                    bottom: "4%",
                    left: "0%",
                    position: "absolute",
                    zIndex: "101",
                  }}
                  className="bebas darkTint  pr-4 pt-1 pl-2"
                >
                  Subcontractors
                  <h3 style={{ color: "orange" }}>become a partner</h3>
                </div>

                <Image
                  src={subcontractorShort}
                  className="  mt-0 p-0 img shadow"
                  thumbnail
                  style={{
                    //   position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: "100",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
            <div className="container  w-100 shadow-lg">
              <div
                className="row border-bottom border-dark border-1 pl-3 mt-5 mb-4"
                style={{}}
              >
                <h3>
                  <b>Partner with Us</b>
                </h3>
              </div>
              <div
                className="row d-flex justify-content-center shadow pt-1"
                style={{}}
              >
                <Image
                  src={bundleCrewShort}
                  className="  mt-0 p-0 img shadow m-2 border border-3 rounded"
                  //   roundedCircle
                  style={{
                    //   position: "relative",
                    width: "80%",
                    height: "auto",
                    zIndex: "100",
                    // position: "absolute",
                  }}
                />
              </div>
              <div className="row" style={{ height: "500px" }}>
                <div className="col-12  d-flex justify-content-center ">
                  <div className="container  p-3">
                    <div className="row  pl-3"></div>
                    <div className="row  pl-3 mt-3">
                      <span>
                        Techrhon Aerial has over 20 years of experience in the
                        telecommunications industry. We are always striving to
                        provide top tier services for our clients. <br />
                        <br /> We operate in the US southeast region, and are
                        always looking for partners who share our commitment to
                        excellence, a high-quality work ethic, and a drive to
                        complete our overall mission. <br />
                        <br /> If you are interested in working with us, please
                        provide us your information. We will contact you within
                        24-48 hours.
                      </span>
                      <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container  w-100 mt-4 shadow-lg">
              <div
                className="row"
                style={{ height: "1480px", marginBottom: "50px" }}
              >
                <div className=" mt-5 mb-0">
                  <div
                    className="row border-bottom border-dark border-1 pl-3 mt-2 mb-4"
                    style={{}}
                  >
                    <h3>
                      <b>Subcontractor Requirements</b>
                    </h3>
                  </div>

                  <div
                    className="  d-flex justify-content-center mt-3 shadow-lg"
                    style={{ height: "270px" }}
                  >
                    <Image
                      src={bucketShort}
                      className="   p-0 img shadow mt-0 border border-3 mt-1 mb-1 rounded"
                      //   roundedCircle
                      style={{
                        //   position: "relative",
                        width: "85%",
                        height: "auto",
                        zIndex: "100",
                        //   position: "absolute",
                      }}
                    />
                  </div>
                  <div className="row mt-5 pl-2 mt-0 ">
                    <div>
                      <ListGroup as="ol" className="mt-1">
                        <ListGroup.Item as="li">
                          <b>Experience and Training:</b> Proven experience in
                          fiber optics installation, troubleshooting, and
                          maintenance, usually obtained through hands-on job
                          experience and training programs.
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <b>Understanding of Protocols and Equipment:</b> A
                          solid understanding of industry-standard protocols and
                          equipment.
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <b>Problem-Solving Skills:</b> Strong problem-solving
                          skills and the ability to work under minimal
                          supervision1.
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <b>Certification:</b> The technicians doing the
                          installation should be trained and certified by
                          organizations like The Fiber Optic Association (FOA)
                          or manufacturers of the products being installed2
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <b>Knowledge of Installation Process:</b> An
                          understanding of the fiber optic cable installation
                          process, including prep work, equipment preparation,
                          cable route preparation, cable laying, testing, and
                          connection to the network equipment3.
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <b>Adherence to Standards:</b> Compliance with the
                          minimum requirements set out by organizations such as
                          the FOA for safe and reliable fiber optic premises
                          cabling4.
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                    <div className="mt-4 w-100  d-flex justify-content-center">
                      Techrhon Aerial strives is committed to adhering to all
                      government, state, and local safety guidelines. We strive
                      to acheive ALL customer requirements on a daily basis.
                    </div>
                    <div className="mt-4 w-100  d-flex justify-content-center mt-5 pb-4">
                      <i s>
                        Please download our supplier code of contact <u>here</u>
                      </i>
                    </div>
                  </div>
                </div>

                <div className="col-12  d-flex justify-content-center text-align-center ">
                  <div className="  p-0"></div>
                </div>
              </div>
            </div>
            <div
              className=" w-100 mt-4 bg-warning"
              style={{ height: "100px" }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(Subtractors);
