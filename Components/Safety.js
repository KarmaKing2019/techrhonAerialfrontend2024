import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import NavbarComponent from "./NavbarComponent";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// ==== IMAGES
import subcontractor from "../images/subcontractors.png";
import subcontractorShort from "../images/subcontractorShort.png";
import contractorTable from "../images/bundleCrew.png";
import bundleCrewShort from "../images/bundleCrewShort.png";
import bucketLong from "../images/bucketLong.png";
import bucketShort from "../images/bucketShort.png";
import safety from "../images/safety.png";
import safetyMan from "../images/safetyMan.png";
import safetyFirst from "../images/safetyFirst.png";
import safetyBoss from "../images/safetyBoss.png";
import safetyTraining from "../images/safetyTraining.png";
import safetySign from "../images/safetySign.png";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

class Safety extends Component {
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
    alert(this.state.width);
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
                style={{ height: "65vh", position: "relative" }}
              >
                {/* ==== BILLBOARD MESSAGE === */}

                <Image
                  src={safetyMan}
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
              <div className="row p-2" style={{ height: "400px" }}>
                <div className="col-5  d-flex justify-content-center text-align-center pl-4">
                  <Image
                    src={safetyFirst}
                    className="  mt-0 p-0 img shadow mt-3"
                    thumbnail
                    style={{
                      //   position: "relative",
                      width: "100%",
                      height: "auto",
                      zIndex: "100",
                      position: "absolute",
                    }}
                  />
                </div>
                <div className="col-7  d-flex justify-content-center ">
                  <div className="container  p-3">
                    <div className="row  pl-3">
                      <h3>
                        <b>A Safe Working Enviornment</b>
                      </h3>
                    </div>
                    <div className="row  pl-3 mt-3">
                      <span>
                        Techrhon's safety training and education are critical
                        components of maintaining a safe work environment. By
                        ensuring that employees receive proper training,
                        organizations can prevent work-related injuries and
                        illnesses. This guideline outlines the key steps to
                        develop and deliver effective safety training programs.
                      </span>

                      <div className="border border-dark mt-5 w-100 p-3">
                        <i>
                          If you have any questions or concerns regarding ANY
                          safety concerns or incidents, please call:
                        </i>
                        <br />
                        <br />
                        <b>Phone: 404.740.5477</b>
                      </div>
                      {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container  mt-4 shadow-lg"
                style={{ height: "580px" }}
              >
                <div className="row p-2" style={{ height: "400px" }}>
                  <div className="col-7  d-flex justify-content-center ">
                    <div className="container  p-3">
                      <div className="row  pl-3">
                        <h3>
                          <b>Our Safety Team</b>
                        </h3>
                      </div>
                      <div className="row  pl-3 mt-3">
                        <span>
                          Various roles within the organization play a part in
                          safety training:
                        </span>
                        <div className="mt-4">
                          <ListGroup>
                            <ListGroup.Item>
                              <b>Agency Head:</b> Responsible for overall safety
                              program oversight.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>
                                Designated Agency Safety and Health Official
                                (DASHO):
                              </b>{" "}
                              Oversees safety policies and compliance.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Management Officials:</b> Ensure safety
                              training is prioritized and adequately funded.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Supervisory Employees:</b> Implement safety
                              training programs for their teams.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Employee Representatives:</b> Advocate for
                              safety and participate in safety committees.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Certified Safety and Health Committee:</b>{" "}
                              Collaborate on safety initiatives.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Employees:</b> Actively engage in safety
                              training and follow protocols.
                            </ListGroup.Item>
                          </ListGroup>
                        </div>

                        {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-5  d-flex border-left border-3 justify-content-center text-align-center  pr-4">
                    <Image
                      src={safetyBoss}
                      className="  mt-0   img shadow mt-3 rounded ml-4"
                      thumbnail
                      style={{
                        //   position: "relative",
                        width: "97%",
                        height: "auto",
                        zIndex: "100",
                        position: "absolute",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="container   mt-4 " style={{ height: "600px" }}>
                <div className="row p-2" style={{ height: "400px" }}>
                  <div className="col-5  d-flex  justify-content-center text-align-center  pr-0">
                    <Image
                      src={safetyTraining}
                      className="  mt-0   img shadow mt-3 rounded ml-4"
                      thumbnail
                      style={{
                        //   position: "relative",
                        width: "97%",
                        height: "auto",
                        zIndex: "100",
                        position: "absolute",
                      }}
                    />
                  </div>
                  <div className="col-7  d-flex justify-content-center ">
                    <div className="container  p-3">
                      <div className="row  pl-3">
                        <h3>
                          <b>Specific Training Phases</b>
                        </h3>
                      </div>
                      <div className="row  pl-3 mt-3">
                        <span>
                          Safety isn’t just a slogan, it’s a way of life.
                        </span>
                        <div className="mt-5">
                          <ListGroup>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-1 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  New Hire Safety Orientation
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-1 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  Task and Job-Specific Safety Qualification
                                  Training
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-1 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  Third-Party Safety Certifications
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-1 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  Field Mentoring with Qualified Person
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-1 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  Ongoing Evaluation and Continued Education
                                </div>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>

                        {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container shadow-lg  mt-4 "
                style={{ height: "600px" }}
              >
                {/* <div className="row  pl-3">
                  <h3>
                    <b>Training Programs</b>
                  </h3>
                </div> */}
                <div className="row p-2" style={{ height: "400px" }}>
                  <div className="col-4  d-flex justify-content-center ">
                    <div className="container  p-0">
                      <div className="row  pl-1 mt-0">
                        {/* <span>
                          Safety isn’t just a slogan, it’s a way of life.
                        </span> */}
                        <div className="mt-0">
                          <ListGroup>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col   justify-content-left align-items-center">
                                  <div className="w-100">
                                    <b>Development: </b>
                                  </div>
                                  <br />
                                  <div className="row w-100">
                                    <ul>
                                      <li>
                                        Collaborate with subject matter experts
                                        to create training content.
                                      </li>
                                      <li>
                                        Use a variety of formats (e.g.,
                                        presentations, videos, hands-on
                                        exercises).
                                      </li>
                                      <li>
                                        Ensure content aligns with agency
                                        policies.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col   justify-content-left align-items-center">
                                  <div className="w-100">
                                    <b>Delivery: </b>
                                  </div>
                                  <br />
                                  <div className="row w-100">
                                    <ul>
                                      <li>
                                        Schedule regular safety training
                                        sessions.
                                      </li>
                                      <li>
                                        Use engaging methods (e.g., workshops,
                                        interactive discussions).
                                      </li>
                                      <li>
                                        Consider online platforms for remote
                                        employees.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>

                        {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-4    justify-content-center text-align-center  pr-0">
                    <div
                      className="row  pl-3 border-bottom border-warning border-2"
                      style={{ marginBottom: "40px", marginTop: "10px" }}
                    >
                      <h3>
                        <b>Training Programs</b>
                      </h3>
                    </div>
                    <div className="">
                      <Image
                        src={safetySign}
                        className="  mt-0   img shadow  rounded ml-0 mt-1"
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "97%",
                          height: "auto",
                          zIndex: "100",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-4  d-flex justify-content-center ">
                    <div className="container  p-0">
                      <div className="row  pl-3 mt-0">
                        <div className="mt-0">
                          <ListGroup>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col   justify-content-left align-items-center pb-5">
                                  <div className="w-100">
                                    <b>Learning Methods: </b>
                                  </div>
                                  <br />
                                  <div className="row w-100">
                                    <ul>
                                      <li>
                                        Combine classroom training with
                                        practical application.
                                      </li>
                                      <li>
                                        Encourage active participation and
                                        questions.
                                      </li>
                                      <li>
                                        Reinforce learning through repetition.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col   justify-content-left align-items-center">
                                  <div className="w-100">
                                    <b>Assessment of Competency: </b>
                                  </div>
                                  <br />
                                  <div className="row w-100">
                                    <ul>
                                      <li>
                                        Evaluate employees’ understanding and
                                        application of safety principles.
                                      </li>
                                      <li>
                                        Conduct quizzes, practical assessments,
                                        or simulations.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>

                        {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-100  mt-4 bg-warning"
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
              className=" mt-0 shadow-lg"
              style={{
                //   backgroundColor: "#d3d3d3",
                height: "48vh",
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
                  className="bebas darkTint pl-3 pr-5"
                >
                  Safety
                  <h3 style={{ color: "orange" }}>Keeping a Safe Workplace</h3>
                </div>

                <Image
                  src={safetyMan}
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
              <div className="row p-2" style={{ height: "800px" }}>
                <div className="row  pl-3">
                  <h3>
                    <b>A Safe Working Enviornment</b>
                  </h3>
                </div>
                <div className="col-12  d-flex justify-content-center text-align-center pl-4">
                  <Image
                    src={safetyFirst}
                    className="  mt-0 p-0 img shadow mt-3"
                    thumbnail
                    style={{
                      //   position: "relative",
                      width: "95%",
                      height: "auto",
                      zIndex: "100",
                      //   position: "absolute",
                    }}
                  />
                </div>
                <div className="col-12  d-flex justify-content-center ">
                  <div className="container  p-3">
                    <div className="row  pl-3 mt-3">
                      <span>
                        Techrhon's safety training and education are critical
                        components of maintaining a safe work environment. By
                        ensuring that employees receive proper training,
                        organizations can prevent work-related injuries and
                        illnesses. This guideline outlines the key steps to
                        develop and deliver effective safety training programs.
                      </span>

                      <div className="border border-dark mt-5 w-100 p-3">
                        <i>
                          If you have any questions or concerns regarding ANY
                          safety concerns or incidents, please call:
                        </i>
                        <br />
                        <br />
                        <b>Phone: 404.740.5477</b>
                      </div>
                      {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container  mt-4 shadow-lg"
                style={{ height: "1050px" }}
              >
                <div className="row  pl-3">
                  <h3>
                    <b>Our Safety Team</b>
                  </h3>
                </div>
                <div className="col-12  d-flex border-left border-3 justify-content-center text-align-center  pr-4">
                  <Image
                    src={safetyBoss}
                    className="  mt-0   img shadow mt-3 rounded ml-4"
                    thumbnail
                    style={{
                      //   position: "relative",
                      width: "97%",
                      height: "auto",
                      zIndex: "100",
                      //   position: "absolute",
                    }}
                  />
                </div>
                <div className="row p-2" style={{ height: "400px" }}>
                  <div className="col-12  d-flex justify-content-center ">
                    <div className="container  p-1">
                      <div className="row  pl-1 mt-3">
                        <span>
                          Various roles within the organization play a part in
                          safety training:
                        </span>
                        <div className="mt-4">
                          <ListGroup>
                            <ListGroup.Item>
                              <b>Agency Head:</b> Responsible for overall safety
                              program oversight.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>
                                Designated Agency Safety and Health Official
                                (DASHO):
                              </b>{" "}
                              Oversees safety policies and compliance.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Management Officials:</b> Ensure safety
                              training is prioritized and adequately funded.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Supervisory Employees:</b> Implement safety
                              training programs for their teams.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Employee Representatives:</b> Advocate for
                              safety and participate in safety committees.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Certified Safety and Health Committee:</b>{" "}
                              Collaborate on safety initiatives.
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Employees:</b> Actively engage in safety
                              training and follow protocols.
                            </ListGroup.Item>
                          </ListGroup>
                        </div>

                        {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container border-bottom border-3  mt-4 "
                style={{ height: "1050px" }}
              >
                <div className="row p-2" style={{ height: "400px" }}>
                  <div className="row mt-4  pl-3">
                    <h3>
                      <b>Specific Training Phases</b>
                    </h3>
                  </div>
                  <div className="col-12  d-flex  justify-content-center text-align-center  pr-0">
                    <Image
                      src={safetyTraining}
                      className="  mt-0   img shadow mt-3 rounded ml-0"
                      thumbnail
                      style={{
                        //   position: "relative",
                        width: "95%",
                        height: "auto",
                        zIndex: "100",
                        // position: "absolute",
                      }}
                    />
                  </div>
                  <div className="col-12  d-flex justify-content-center ">
                    <div className="container  p-1">
                      <div className="row  pl-0 mt-3">
                        <span
                          className="d-flex justify-content-center"
                          style={{ fontSize: "1.3rem" }}
                        >
                          "Safety isn’t just a slogan, it’s a way of life.""
                        </span>
                        <div className="mt-5">
                          <ListGroup>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-2  ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col   d-flex justify-content-left align-items-center">
                                  New Hire Safety Orientation
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-2 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  Task and Job-Specific Safety Qualification
                                  Training
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-2 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  Third-Party Safety Certifications
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-2 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  Field Mentoring with Qualified Person
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-2 ">
                                  <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "3.0rem" }}
                                  >
                                    check_box
                                  </span>
                                </div>
                                <div className="col d-flex justify-content-left align-items-center">
                                  Ongoing Evaluation and Continued Education
                                </div>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>

                        {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container shadow-lg  mt-4 "
                style={{ height: "1500px" }}
              >
                {/* <div className="row  pl-3">
                  <h3>
                    <b>Training Programs</b>
                  </h3>
                </div> */}
                {/* ============= TRAINING PROGRAM ======= */}
                <div className="row p-2" style={{ height: "400px" }}>
                  <div
                    className="row  pl-3 border-bottom border-warning border-2 ml-2 mr-2"
                    style={{ marginBottom: "40px", marginTop: "10px" }}
                  >
                    <h3>
                      <b>Training Programs</b>
                    </h3>
                  </div>
                  <div className="col-12  d-flex justify-content-center mt-2">
                    <div className="container  p-0">
                      <div className="row  pl-1 mt-0">
                        {/* <span>
                          Safety isn’t just a slogan, it’s a way of life.
                        </span> */}
                        <div className="mt-0">
                          <ListGroup>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col   justify-content-left align-items-center">
                                  <div className="w-100">
                                    <b>Development: </b>
                                  </div>
                                  <br />
                                  <div className="row w-100 pl-3">
                                    <ul>
                                      <li>
                                        Collaborate with subject matter experts
                                        to create training content.
                                      </li>
                                      <li>
                                        Use a variety of formats (e.g.,
                                        presentations, videos, hands-on
                                        exercises).
                                      </li>
                                      <li>
                                        Ensure content aligns with agency
                                        policies.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col   justify-content-left align-items-center">
                                  <div className="w-100">
                                    <b>Delivery: </b>
                                  </div>
                                  <br />
                                  <div className="row w-100 pl-3">
                                    <ul>
                                      <li>
                                        Schedule regular safety training
                                        sessions.
                                      </li>
                                      <li>
                                        Use engaging methods (e.g., workshops,
                                        interactive discussions).
                                      </li>
                                      <li>
                                        Consider online platforms for remote
                                        employees.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>

                        {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12    justify-content-center text-align-center  pr-0">
                    <div className="">
                      <Image
                        src={safetySign}
                        className="  mt-0   img shadow  rounded ml-0 mt-1"
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "97%",
                          height: "auto",
                          zIndex: "100",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12  d-flex justify-content-center mt-4">
                    <div className="container  p-0">
                      <div className="row  pl-3 mt-0">
                        <div className="mt-0">
                          <ListGroup>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col   justify-content-left align-items-center pb-3">
                                  <div className="w-100">
                                    <b>Learning Methods: </b>
                                  </div>
                                  <br />
                                  <div className="row w-100 pl-3">
                                    <ul>
                                      <li>
                                        Combine classroom training with
                                        practical application.
                                      </li>
                                      <li>
                                        Encourage active participation and
                                        questions.
                                      </li>
                                      <li>
                                        Reinforce learning through repetition.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col   justify-content-left align-items-center">
                                  <div className="w-100">
                                    <b>Assessment of Competency: </b>
                                  </div>
                                  <br />
                                  <div className="row w-100 pl-3">
                                    <ul>
                                      <li>
                                        Evaluate employees’ understanding and
                                        application of safety principles.
                                      </li>
                                      <li>
                                        Conduct quizzes, practical assessments,
                                        or simulations.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>

                        {/* <div className="mt-4 w-100  d-flex justify-content-center">
                        <Button
                          variant="warning border border-dark"
                          style={{ color: "white" }}
                        >
                          Submit Contact Info
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-100  mt-4 bg-warning"
              style={{ height: "100px" }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(Safety);
