import React, { Component, useCallback } from "react";
import { Navigate, Switch } from "react-router-dom";

import FileDrop from "./FileDrop";
import Slider from "./Slider";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
// import Navbar from "./Navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

// ===== GRAPHICS =====
import mainBillboard from "../images/mainBillboard.jpg"; // gives image path
import employee from "../images/employee.png";
import team2 from "../images/team2.jpg";
import atlanta from "../images/atlanta.jpg";
import receptionist from "../images/receptionist.png";
import idCard from "../images/id-card.png";
import reports from "../images/reports.png";
import neighborhood from "../images/neighborhood.jpg";
import youngworker from "../images/youngWorker.jpg";
import phone from "../images/24phone.svg";
import techrhonlogo from "../images/TechrhonLogo.png";
import cableBundle from "../images/cableBundle.jpg";
import hero2 from "../images/linemanPole.png";
import team from "../images/fiberKeys.png";
// import gears from "../images/fiberDots.png";

import { withRouter, useHistory } from "react-router-dom"; // Adjust the path to your withRouter.js

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      hovered: false,
      color: "blue",
      redirect: false,
    };
  }

  onMouseEnter = () => {
    console.log("Mouse Entered");
    this.setState({ hovered: true });
  };

  onMouseLeave = () => {
    this.setState({ hovered: false });
  };

  toggleColor = () => {
    this.setState({
      color: this.state.color === "white" ? "lightblue" : "white",
    });
  };

  goToLogin = (event) => {
    alert("ok");
    event.preventDefault();
    //return <Navigate to="/login" />;
  };

  render() {
    return (
      <div
        className="w-100 rounded pt-0  shadow d-flex justify-content-center  "
        style={{
          // position: "static",
          width: "100%",
          overflowY: "hidden",
          backgroundColor: "#565655",

          //backgroundColor: "rgba(     80, 161, 241    , 0.8)",
          // position: "relative",
          height: "100%",
          // display: "flex",
          // justifyContent: "center" /* Horizontally center */,
          // alignItems: "center" /* Vertically center */,
          // border: "10px solid black",

          //backgroundColor: "rgba(234,182,118, 0.3)",
        }}
      >
        {/* ### TECHRHON BANNER ### */}

        <div
          className="container-fluid    pr-1   m-0  mb-2  
          "
          style={{
            margin: "0px",
            overflow: "auto",
            // borderColor: "#6FBDF5",
            // borderWidth: "5px",
            // borderStyle: "solid",

            paddingLeft: "0px",
            // backgroundColor: "grey",
            width: "100%",
            // position: "relative",
            // top: "0%",
            // left: "0%",
            // transform: "translate(-50%, -50%)",
            height: "100%",
          }}
        >
          {/* =============== BREADCRUMBS (HIRING, ONBOARDING, AND DOCUMENTS ) =========== */}
          <div className="w-100 bg-light d-flex justify-content-center mb-0 ">
            <div
              className="row border border-dark w-100 justify-content-center pt-3"
              style={{ fontSize: "1.2rem", height: "70px" }}
            >
              <div className=" col-md-3 col-4  mt-2 mb-4 d-flex justify-content-center">
                <Link
                  to="/quickhire"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    bottom: "0px",
                  }}
                >
                  <Button
                    variant="light"
                    className="m-0 border-top border-left border-right border-2"
                    style={{ width: "100%" }}
                  >
                    <b>Hiring</b>
                  </Button>
                </Link>
              </div>
              <div className="col-md-5 col-4  mt-2 mb-4 d-flex justify-content-center pl-2 pr-2">
                <Link
                  to="/onboarding"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    variant="light"
                    className="w-100 d-flex justify-content-center border-top border-left border-right border-2"
                  >
                    <b>Onboarding</b>
                  </Button>
                </Link>
              </div>
              <div className="col-md-3 col-4  mt-2 mb-4 d-flex justify-content-center">
                <Link
                  to="/dailylogin"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    variant="light"
                    className="w-100 border-top border-left border-right border-2"
                  >
                    <b>Dailies</b>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* =============== HERO SECTION =========== */}
          <div
            className="  "
            style={{
              marginTop: "0px",
              position: "relative",
            }}
          >
            <Image
              src={hero2}
              className="shadow  mt-0 "
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            />
            <div
              className="  "
              style={{
                top: "0px",
                height: "100%",
                position: "absolute",
                width: "55%",
              }}
            >
              <div
                className="row  bebas d-flex  ml-2  p-0"
                style={{ top: "5%", position: "absolute" }}
              >
                <h1>
                  <span style={{ color: "lightgray" }}>Techrhon</span>
                  <span style={{ color: "orange" }}> Aerial</span>
                </h1>
              </div>
              <div
                className="border-left border-2 ml-3 p-2 bebas w-100"
                style={{ top: "25%", position: "absolute", color: "white" }}
              >
                <h3>Empowering Connections</h3>

                <div className="mt-3">
                  <span style={{ fontSize: "1.1rem" }}>
                    "Delivering High-Speed, Reliable, and Efficient Cable and
                    Fiber Installations"
                  </span>
                </div>
              </div>
            </div>
            {/* ///// ============ CALL FOR QUOTE ============== */}
            <div
              className=" w-100  "
              style={{ top: "95%", height: "100%", position: "absolute" }}
            >
              <div
                className="row border-top border-light border-5 "
                style={{ height: "100%" }}
              >
                <div
                  className=" border-2 border-dark p-2 bebas w-100 d-flex justify-content-center"
                  style={{ backgroundColor: "#565655" }}
                >
                  <Button
                    variant="outline-light"
                    className=" shadow mt-1 mb-1 pl-4 pr-4 pt-0 pb-0"
                    style={{
                      color: "lightGray",
                      borderColor: "lightGray",
                      borderWidth: "2px",
                      fontSize: "1.3rem",
                    }}
                  >
                    Call For a Free Quote
                  </Button>
                </div>
                <div className="row  w-100 p-0">
                  {/* ================ SECTION 1 - (3 POINTS)==================== */}
                  <div
                    className="col-md-6 col-12 b pl-4 pt-4 techweb rounded mt-2 mb-4   "
                    style={{ backgroundColor: "#EAEDED", color: "black" }}
                  >
                    <div className="lightTint border border-dark rounded p-3 pl-4 pb-3 ml-2">
                      <h1
                        className="bebas mt-3 mb-3"
                        style={{ fontSize: "1.3rem" }}
                      >
                        <span style={{ color: "darkGray" }}>High-Quality</span>
                        <span style={{ color: "#52524F" }}> Installations</span>
                      </h1>
                      <div className="pb-4" style={{ fontSize: "1.0rem" }}>
                        <span>
                          "We use top-tier materials and advanced techniques to
                          ensure the highest quality of cable and fiber
                          installations. Our work is designed to last and
                          perform at peak efficiency."
                        </span>
                      </div>
                    </div>

                    <div className="lightTint mt-2 rounded p-3 pb-3 ml-2 border border-dark">
                      <h1
                        className="bebas mt-3 mb-3"
                        style={{ fontSize: "1.3rem" }}
                      >
                        <span style={{ color: "#52524F" }}>Excellent</span>
                        <span style={{ color: "darkGray" }}>
                          {" "}
                          Customer Service
                        </span>
                      </h1>
                      <div className="pb-4" style={{ fontSize: "1.0rem" }}>
                        <span>
                          "We pride ourselves on our exceptional customer
                          service. From initial consultation to
                          post-installation support, we're with you every step
                          of the way."
                        </span>
                      </div>
                    </div>

                    <div className="lightTint mt-2 rounded p-3 pb-3 ml-2">
                      <h1
                        className="bebas mt-3 mb-3"
                        style={{ fontSize: "1.3rem" }}
                      >
                        <span style={{ color: "#52524F" }}>Expert</span>
                        <span style={{ color: "darkGray" }}> Service</span>
                      </h1>
                      <div className="pb-4" style={{ fontSize: "1.0rem" }}>
                        <span>
                          "Our team of certified professionals is committed to
                          providing expert installation services, adhering to
                          industry standards and safety regulations."
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* ================ SECTION 2 - (SUPERIOR TEAM)==================== */}
                  <div
                    className=" col-md-6 col-12   rounded mt-2 mb-4 shadow p-4 ml-0 "
                    style={{
                      backgroundColor: " #f9f8f4",
                      // borderColor: "#282728",
                      borderLeft: "4px solid #282728",
                    }}
                    // style={{ backgroundColor: "#F7DC6F" }}
                  >
                    <Image
                      src={team}
                      className="shadow-lg  mt-4 "
                      thumbnail
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "50%",
                      }}
                    />

                    <div
                      className=" w-100 p-2 mb-3 mt-3 border border-dark bg-light p-2"
                      style={{ height: "60%" }}
                    >
                      <h1
                        className="bebas mt-1 mb-2 "
                        style={{ fontSize: "1.7rem", color: "orange" }}
                      >
                        Gold Team Standards
                      </h1>
                      <span
                        style={{ fontSize: "1.0rem", marginBottom: "30px" }}
                      >
                        Techrhon’s team is its greatest asset. Comprising
                        numerous seasoned linemen and cable technicians, the
                        company prides itself on having a workforce that is not
                        only <strong>highly skilled</strong> but also{" "}
                        <strong>dedicated</strong> and{" "}
                        <strong>passionate</strong> about their craft.
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="col-12  p-5 mt-1"
                  style={{ backgroundColor: " #F7DC6F" }}

                  // #EAEDED
                >
                  <h1 className="bebas  mb-3" style={{ fontSize: "1.8rem" }}>
                    About Techrhon
                  </h1>
                  <span>
                    "Since our establishment in 2010, we have been committed to
                    providing superior cable and fiber installation services. We
                    specialize in a wide range of installation services,
                    including residential, commercial, and industrial projects.
                    Our dedication to quality and customer satisfaction has made
                    us a leading choice for cable and fiber installations."
                  </span>
                </div>
                <div
                  className="border-top border-3 p-3 pt-5 "
                  style={{
                    fontWeight: "bold",
                    color: "gray",
                    marginBottom: "100px",
                    // backgroundColor: "white",
                    height: "400px",
                    fontSize: "1.0rem",
                  }}
                >
                  <div className="row ">
                    <div
                      className="col-md-4 col-12  pl-3 mb-4 mt-4"
                      style={{ color: "white" }}
                    >
                      <div
                        className="bebas pl-3 "
                        style={{ fontSize: "1.8rem" }}
                      >
                        <b>Location</b>
                      </div>
                      <div className="mt-3 border-left border-5 border-light pl-3 ml-2">
                        <div className="row pl-2" style={{}}>
                          4426 Hugh Howell Rd Ste B 405
                        </div>
                        <div className="row pl-2" style={{}}>
                          Atlanta, GA 30084
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                      <div
                        className="bebas pl-3"
                        style={{ fontSize: "1.8rem", color: "white" }}
                      >
                        <b>Contact Us</b>
                      </div>
                      <div
                        className="mt-3 border-left border-5 border-light pl-3 ml-2"
                        style={{ color: "white" }}
                      >
                        <div className="row pl-2" style={{}}>
                          Phone: (404) 740-5477
                        </div>
                        <div className="row pl-2" style={{}}>
                          Email: admin@techrhonaerial.com
                        </div>
                      </div>
                      <div className="mt-3  pl-3" style={{ color: "white" }}>
                        <div className="row pl-2" style={{ color: "orange" }}>
                          Available 24/7
                        </div>
                        <div className="row pl-2" style={{}}>
                          Disaster Recovery Support
                        </div>
                        <div className="row pl-2" style={{}}>
                          Projects
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 col-12  mt-2 p-3"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="bebas pl-2"
                        style={{ fontSize: "1.8rem", color: "white" }}
                      >
                        <b>Leave Message</b>
                      </div>
                      <div className="mb-3 mt-3">
                        <div
                          className="row w-100 mb-2"
                          style={{ color: "white" }}
                        >
                          <div className="col-3 pl-3">
                            <label>Name</label>
                          </div>
                          <div className="col-9">
                            <input
                              type="text"
                              style={{ width: "100%" }}
                              // value={name}
                              // onChange={handleNameChange}
                            />
                          </div>
                        </div>
                        <div className="row  w-100" style={{ color: "white" }}>
                          <div className="col-3 pl-3">
                            <label>Phone</label>
                          </div>
                          <div className="col-9">
                            <input
                              type="text"
                              style={{ width: "100%" }}
                              // value={name}
                              // onChange={handleNameChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <textarea
                          // value={this.state.value}
                          // onChange={this.handleChange}
                          placeholder="Leave a Message"
                          style={{ width: "95%", height: "100px" }}
                        />
                      </div>
                      <div
                        className=" border-2 border-dark p-2 bebas w-100 d-flex justify-content-end"
                        style={{
                          backgroundColor: "#565655",
                          marginBottom: "100px",
                        }}
                      >
                        <Button
                          variant="outline-light"
                          className=" shadow mt-0 mb-1 pl-4 pr-4 pt-0 pb-0"
                          style={{
                            color: "lightGray",
                            borderColor: "lightGray",
                            borderWidth: "2px",
                            fontSize: "1.0rem",
                          }}
                        >
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <Breadcrumb>
              <Breadcrumb.Item href="/quickhire">Now Hiring</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Onboarding</Breadcrumb.Item>
              <Breadcrumb.Item href="/dailylogin" active>
                Dailies
              </Breadcrumb.Item>
            </Breadcrumb>
          </div> */}
        </div>
      </div>
    );
  }
}
