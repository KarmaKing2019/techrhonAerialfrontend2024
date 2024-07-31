import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarComponent from "./NavbarComponent";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Home3Mobile from "./Home3Mobile";

// ==== IMAGES
import billboard from "../images/techOnLine.png";
import cableBundle from "../images/cableBundle.jpg";
import techrhonWeb from "../images/fiberStrand.png";
import fiberDots from "../images/subcontractor1.png";
import techweb2 from "../images/lineman1.png";
import fiberman from "../images/Handhole.jpg";
import splicing from "../images/splicing.jpeg";

import bucket from "../images/bucket.png";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

class Home3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      addBox1Tint: false,
      addBox2Tint: false,
      addBox3Tint: false,
      scrollPosition: 0,
      navColor: "",
    };
  }

  myRef = React.createRef();

  handleResizeWindow = () => {
    this.setState({ width: window.innerWidth });
    console.log(this.state.width);
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
    window.addEventListener("scroll", this.handleScroll());
    // this.getPosition();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  getPosition = () => {
    const rect = this.myRef.current.getBoundingClientRect();
    console.log("Position:", rect.top, rect.left);
  };

  // ============= ADBOX 1 EVENTS ======

  addBox1Hover = () => {
    console.log("action box 1 Hovering");
    this.setState({ addBox1Tint: "true" });
  };
  addBox1Out = () => {
    console.log("action box 1 Leaving");
    this.setState({ addBox1Tint: !this.state.addBox1Tint });
  };
  addBox1Click = () => {
    this.props.navigate("/onboarding");
  };

  // ============= ADBOX 2 EVENTS ======
  addBox2Hover = () => {
    console.log("action box 2 Hovering");
    this.setState({ addBox2Tint: !this.state.addBox2Tint });
  };
  addBox2Out = () => {
    console.log("action box 2 Leaving");
    this.setState({ addBox2Tint: !this.state.addBox2Tint });
  };
  addBox2Click = () => {
    this.props.navigate("/quickhire");
  };

  // ============= ADBOX 3 EVENTS ======
  addBox3Hover = () => {
    console.log("action box 3 Hovering");
    this.setState({ addBox3Tint: !this.state.addBox3Tint });
  };
  addBox3Out = () => {
    console.log("action box 3 Leaving");
    this.setState({ addBox3Tint: !this.state.addBox3Tint });
  };
  addBox3Click = () => {
    this.props.navigate("/quickhire");
  };

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

  goToQuickHire = () => {
    this.props.navigate("/quickhire");
  };

  render() {
    const { width } = this.state;
    const breakpoint = 800;
    return (
      <div
        className=" h-100  p-0"
        style={{ overflow: "auto" }}
        onScroll={this.handleScroll}
      >
        <div
          className="p-0 mb-0"
          style={{ height: "80vh", position: "relative" }}
        >
          {/* // =============== BILLBOARD IMAGE ============== */}
          {width > breakpoint ? (
            <div
              style={{
                border: "1px solid black",
              }}
              ref={this.myRef}
            >
              {/* // =============== NAVBAR ============== */}
              <NavbarComponent
                navColor={this.state.navColor}
                style={{ zIndex: "9999" }}
                contactUs={this.goToContactUs}
                onboarding={this.goToOnboarding}
                dailies={this.goToDalies}
                aboutUs={this.goToAboutUs}
                goToSubcontractors={this.goToSubcontractors}
                goToSafety={this.goToSafety}
                goToQuickHire={this.goToQuickHire}
              />
              <div
                className=" heroAdjust"
                style={{
                  //   position: "relative",
                  //width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={billboard}
                  className="  mt-0 p-0 img"
                  fluid
                  style={{
                    //   position: "relative",
                    width: "100%",
                    // height: "100%",
                    height: "60vh",
                  }}
                />
              </div>
              <div
                className="container  "
                style={{
                  top: "28%",
                  left: "7%",
                  position: "absolute",
                  color: "white",
                  width: "60%",
                }}
              >
                <h1>
                  <b>
                    Delivering High-Speed and Reliable Cable and Fiber
                    Installations
                  </b>
                </h1>
                <div className="mt-4">
                  <Button
                    variant="warning"
                    className="border border-light border-2"
                    style={{ color: "white" }}
                  >
                    OUR COMPANY
                  </Button>{" "}
                </div>
              </div>
              <div className="w-100 ">
                {/* // ============================================= WHAT WE DO SECTION   */}
                {/* // ================================================================   */}
                <div className=" pt-1 pb-0 border-bottom border-3">
                  <div className=" container mt-5  p-0 d-flex justify-content-center">
                    <b>
                      <h1>What We Do</h1>
                    </b>
                  </div>
                  <div
                    className="container mt-0"
                    style={{ fontSize: "1.4rem" }}
                  >
                    <div className=" ml-1 mr-1 justify-content-center d-flex ">
                      <p className="w-50" style={{ textAlign: "center, " }}>
                        We use top-tier materials and advanced techniques to
                        ensure the highest quality of cable and fiber
                        installations. Our work is designed to last and perform
                        at peak efficiency.
                      </p>
                    </div>

                    <div className="  row  w-100 mt-3 ml-2">
                      <div className="col-6  p-3">
                        <div className="w-100 d-flex justify-content-end ">
                          <Image
                            src={cableBundle}
                            className="  mt-0 p-0 img border border-dark border-2 shadow"
                            roundedCircle
                            style={{
                              //   position: "relative",
                              width: "28%",
                              height: "150px",
                            }}
                          />
                        </div>
                        <div className="mt-2 d-flex justify-content-end">
                          <b>
                            <p>Construction</p>
                          </b>
                        </div>
                      </div>
                      <div className="col-6  p-3">
                        <div className="w-100 d-flex justify-content-start pl-5">
                          <Image
                            src={splicing}
                            className="  mt-0 p-0 img border border-dark border-2 shadow"
                            roundedCircle
                            style={{
                              //   position: "relative",
                              width: "30%",
                              height: "150px",
                            }}
                          />
                        </div>
                        <div className="mt-2 pl-5">
                          <b>
                            <p>Fiber Splicing</p>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========== 3 SECTIONS WHO WE ARE, LINEMEN, SUBCONTRACTOR */}
              <div className="container w-100  " style={{ height: "100%" }}>
                <div className="row ">
                  <div className="col-7  p-0" style={{ height: "100%" }}>
                    <div
                      className="  mt-0 pt-0 p-0 rounded m-0"
                      style={{ height: "600px" }}
                    >
                      <Image
                        src={bucket}
                        className="  mt-0 p-0 img"
                        fluid
                        style={{
                          //   position: "absolute",
                          width: "100%",
                          height: "100%",
                          zIndex: "999",
                        }}
                      />

                      {/* // === CONTENT */}
                      <div
                        className=""
                        style={{
                          position: "absolute",
                          bottom: "0px",
                          zIndex: "1001",
                          height: "100%",
                        }}
                      >
                        {/* // === HOVER WINDOW TINT */}
                        {this.state.addBox1Tint ? (
                          <div
                            className="transparentBackground m-0"
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              zIndex: "1005",
                              top: "0px",
                            }}
                            onMouseOver={this.addBox1Hover}
                            onMouseOut={this.addBox1Out}
                            onClick={this.addBox1Click}
                          ></div>
                        ) : (
                          <div
                            className=""
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              zIndex: "1005",
                              bottom: "0px",
                            }}
                            onMouseOver={this.addBox1Hover}
                            onMouseOut={this.addBox1Toggle}
                          ></div>
                        )}
                        <div
                          className=" p-5"
                          style={{
                            color: "white",
                            // height: "100%",
                            bottom: "20px",
                            marginTop: "40%",
                          }}
                        >
                          <h2>
                            <b>Who We Are</b>
                          </h2>
                          <div>
                            <p style={{ fontSize: "1.2rem" }}>
                              Techron Aerial is a highly skilled team of
                              professionals that specialize in both cable and
                              fiber installations. We have extensive experience
                              in supporting large scale projects and disaster
                              recover.
                            </p>
                          </div>
                          <div>
                            <p style={{ fontSize: "1.2rem" }}>
                              <Button
                                variant="warning"
                                className="pl-5 pr-5 border border-light border-2"
                                style={{ color: "white" }}
                              >
                                <b>Learn More</b>
                              </Button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5  p-0 pt-1" style={{ height: "100%" }}>
                    <div
                      className="row  m-0 p-0 d-flex justify-content-start"
                      style={{ height: "50%", width: "100%" }}
                    >
                      <div
                        className=" m-0 mb-2 p-2 pt-0 mt-0 "
                        style={{ height: "100%", width: "100%" }}
                      >
                        <div
                          className="  mt-0 pt-0 p-0  rounded mt-0 rounded"
                          style={{
                            width: "100%",
                            position: "relative",
                            // ObjectFit: "cover",
                          }}
                        >
                          <Image
                            src={techweb2}
                            className="  mt-0 p-0  "
                            fluid
                            style={{
                              // position: "absolute",
                              // objectFit: "cover",
                              width: "100%",
                              height: "280px",
                              zIndex: "999",
                            }}
                          />

                          {/* // === CONTENT */}
                          <div
                            className=""
                            style={{
                              position: "absolute",
                              top: "0px",
                              zIndex: "1001",
                              height: "100%",
                            }}
                          >
                            {/* // === HOVER WINDOW TINT */}
                            {this.state.addBox2Tint ? (
                              <div
                                className="transparentBackground m-0"
                                style={{
                                  position: "absolute",
                                  width: "100%",
                                  height: "100%",
                                  zIndex: "1002",
                                  top: "0px",
                                }}
                                onMouseOver={this.addBox2Hover}
                                onMouseOut={this.addBox2Out}
                                onClick={this.addBox2Click}
                              ></div>
                            ) : (
                              <div
                                className="border "
                                style={{
                                  position: "absolute",
                                  width: "100%",
                                  height: "100%",
                                  zIndex: "1002",
                                }}
                                onMouseOver={this.addBox2Hover}
                                onMouseOut={this.addBox2Toggle}
                              ></div>
                            )}
                            <div
                              className="p-2 "
                              style={{ color: "white", marginTop: "20%" }}
                            >
                              <h2>
                                <b>Lineman</b>
                              </h2>
                              <div>
                                <p style={{ fontSize: "1.2rem" }}>
                                  Techrhon is always looking for great talent.
                                  Join our team today.
                                </p>
                              </div>
                              <div>
                                <p style={{ fontSize: "1.2rem" }}>
                                  <Button
                                    variant="warning"
                                    className="pl-5 pr-5 border border-light border-2"
                                    style={{ color: "white" }}
                                  >
                                    <b>Learn More</b>
                                  </Button>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row m-0 mt-0 p-2 "
                      style={{ height: "50%" }}
                    >
                      <div
                        className="container mt-0 p-0 border-bottom border-2   rounded"
                        style={{ height: "350px" }}
                      >
                        <div
                          className="container mt-0 pt-0 p-0 rounded "
                          style={{ height: "280px", position: "relative" }}
                        >
                          <Image
                            src={fiberDots}
                            className="  mt-0 p-0 img mb-0 rounded"
                            fluid
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "280px",
                              zIndex: "999",
                              paddingBottom: "40px",
                            }}
                          />
                          {/* // === HOVER WINDOW TINT */}
                          {this.state.addBox3Tint ? (
                            <div
                              className="transparentBackground m-0"
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                zIndex: "1003",
                              }}
                              onMouseOver={this.addBox3Hover}
                              onMouseOut={this.addBox3Out}
                              onClick={this.addBox3Click}
                            ></div>
                          ) : (
                            <div
                              className=""
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                zIndex: "1002",
                              }}
                              onMouseOver={this.addBox3Hover}
                              onMouseOut={this.addBox3Toggle}
                            ></div>
                          )}
                          {/* // === CONTENT */}
                          <div
                            className=""
                            style={{
                              position: "absolute",
                              bottom: "3px",
                              zIndex: "1002",
                            }}
                          >
                            <div className="p-2 " style={{ color: "white" }}>
                              <h2>
                                <b>Subcontractors</b>
                              </h2>
                              <div>
                                <p style={{ fontSize: "1.2rem" }}>
                                  Techrhon Aerial is always looking to work with
                                  companies wanting to succeed.
                                </p>
                              </div>
                              <div>
                                <p style={{ fontSize: "1.2rem" }}>
                                  <Button
                                    variant="warning"
                                    className="pl-5 pr-5 border border-light border-2"
                                    style={{ color: "white" }}
                                  >
                                    <b>Learn More</b>
                                  </Button>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="pb-4 mb-4" style={{ height: "100%" }}>
                  <div
                    className="d-flex justify-content-center mt-5"
                    style={{ fontSize: "1.9rem" }}
                  >
                    <b>
                      <p>Our Services</p>
                    </b>
                  </div>
                  <div className=" ml-2 mr-2 d-flex justify-content-center">
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "1.3rem",
                        width: "50%",
                      }}
                    >
                      We use top-tier materials and advanced techniques to
                      ensure the highest quality of cable and fiber
                      installations. Our work is designed to last and perform at
                      peak efficiency.
                    </p>
                  </div>
                  <div className="row ml-5 mr-5">
                    <div className="col-6 p-2">
                      <div
                        className="  shadow-lg  p-3 mt-5"
                        style={{
                          height: "350px",
                          backgroundColor: "#fffff",
                          paddingBottom: "40px",
                        }}
                      >
                        <div>
                          <Image
                            src={splicing}
                            className="  mt-0 p-0 img shadow border border-dark border-2 shadow"
                            roundedCircle
                            style={{
                              //   position: "relative",
                              width: "30%",
                              height: "160px",
                            }}
                          />
                        </div>
                        <div className="mt-2">
                          <b> Fiber Splicing</b>
                        </div>
                        <div className="">
                          <p style={{ fontSize: "0.9rem" }}>
                            Techrhon is a leader in the telecommunications
                            industry, providing expert fiber splicing services
                            to ensure high-speed data transmission. Our
                            exceptional installation service guarantees a smooth
                            and efficient setup, making us a trusted partner in
                            your digital journey.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 p-2">
                      <div
                        className=" shadow-lg mt-5 p-3"
                        style={{
                          height: "350px",
                          backgroundColor: "#fffff",
                          paddingBottom: "40px",
                        }}
                      >
                        <div className="">
                          <Image
                            src={fiberman}
                            className="  mt-0 p-0 img shadow border border-dark border-2 shadow"
                            roundedCircle
                            style={{
                              //   position: "relative",
                              width: "30%",
                              height: "160px",
                            }}
                          />
                        </div>
                        <div className="mt-2 ">
                          <b> Construction</b>
                        </div>
                        <div className="">
                          <p style={{ fontSize: "0.9rem" }}>
                            Techrhon is at the forefront of the digital
                            revolution, specializing in the construction of
                            state-of-the-art fiber optic networks. Our
                            commitment to excellence is reflected in our
                            top-notch installation service, ensuring seamless
                            connectivity for our clients
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="ml-1 mt-5  rounded border border-dark border-2"
                    style={{ height: "200px", backgroundColor: "#3b3a38" }}
                  >
                    <div className="mt-3 pl-2" style={{ color: "lightGray" }}>
                      <b>Quick Links</b>
                    </div>
                    <div
                      className="mt-2 pl-2"
                      style={{ color: "white", fontSize: "1.0rem" }}
                    >
                      <p>About | Safety | Careers | Contact | Onboarding</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Home3Mobile />
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(Home3);
