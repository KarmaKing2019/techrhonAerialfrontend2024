import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import NavbarComponent from "./NavbarComponent";
import NavbarMobileComponent from "./NavbarMobileComponent";
import { useNavigate } from "react-router-dom";

// ==== IMAGES

import fibertech from "../images/contact.png";
import handshake from "../images/handshake.png";
import techsTalking from "../images/operator.png";
import walkieTalkie from "../images/walkieTalkie2.png";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      navColor: "",
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
            <div
              className="mt-0 shadow-lg"
              style={{
                //   backgroundColor: "#d3d3d3",
                height: "78vh",
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
                style={{ height: "78vh", position: "relative" }}
              >
                <Image
                  src={techsTalking}
                  className="  mt-0 p-0 img shadow"
                  thumbnail
                  style={{
                    //   position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                />
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
                  Contact Us
                  <h3 style={{ color: "orange" }}>Call for a Quote</h3>
                </div>
              </div>
            </div>
            <div className=" w-100 mt-5" style={{ height: "800px" }}>
              <div className=" w-100 mt-5 pl-5">
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
              <div className="b w-100 mt-3 pl-5" style={{ fontSize: "1.4rem" }}>
                <p className="pr-5 " style={{ width: "85%" }}>
                  Our Techrhon team are available around the clock to support
                  your cable and fiber installation needs. Your goals are our
                  utmost priority. If you have questions about our services,
                  equipment, or simply need a quote please give us a call. We
                  look forward to hearing from you.
                </p>
              </div>

              <div className="mt-3 mb-4 pl-2 mt-5">
                <p
                  style={{ textAlign: "center" }}
                  className="pt-1 pb-1   justify-content-center align-items-center m-2"
                >
                  <b>
                    <p style={{ fontSize: "1.8rem" }}>
                      Available 24 hours a day
                    </p>
                  </b>
                  Call today
                </p>
              </div>

              <div className="container border-success">
                <div className="row">
                  <div className=" col-7">
                    <Image
                      src={walkieTalkie}
                      className="  mt-0 p-0 img shadow"
                      style={{
                        //   position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="border-left col-5 mt-0">
                    <div className="pl-2 mt-5">
                      <span style={{ color: "black" }}>
                        <h1>
                          <b>Contact Us</b>
                        </h1>
                      </span>
                      {/* <span style={{ color: "orange" }}> Aerial</span> */}
                    </div>
                    <div className="row pl-3 pb-0 mt-5 w-100 border-bottom">
                      <div className="col-2">
                        <h5 style={{ color: "orange" }}>Phone:</h5>
                      </div>
                      <div className="col-10 justify-content-start d-flex">
                        <p style={{}}>404.740.5477</p>
                      </div>
                    </div>
                    <div className="row pl-3 pt-2 pb-2 mt-2 w-100 border-bottom">
                      <div className="col-2">
                        <h5 style={{ color: "orange" }}>Email:</h5>
                      </div>
                      <div className="col-10">
                        <p style={{}}>info@techrhonaerial.com</p>
                      </div>
                    </div>
                    <div className="row pl-3 mt-2 w-100 pt-2">
                      <div className="col-12">
                        <h5 style={{ color: "orange" }}>Address:</h5>
                      </div>
                      <div className="col-12">
                        <div className="row pl-2 mt-2" style={{}}>
                          <p>4426 Hugh Howell Rd Ste B 405</p>
                        </div>
                        <div className="row pl-2 mt-0" style={{}}>
                          <p>Atlanta, GA 30084</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // =========== MOBILE PC ================
          <div
            style={{ overflow: "auto", height: "100vh" }}
            onScroll={this.handleScroll}
          >
            <div
              className="mt-0 shadow-lg "
              style={{
                //   backgroundColor: "#d3d3d3",
                height: "45vh",
                marginBottom: "100px",
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
                className=" p-0 "
                style={{ height: "45vh", position: "relative" }}
              >
                <Image
                  src={techsTalking}
                  className="  mt-0 p-0 img shadow"
                  thumbnail
                  style={{
                    //   position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                />
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
                  Contact Us
                  <h3 style={{ color: "orange" }}>Call for a Quote</h3>
                </div>
              </div>
            </div>
            <div className=" w-100 mt-3" style={{ height: "800px" }}>
              <div
                className=" w-100 mt-0 pl-0 d-flex justify-content-center"
                style={{ fontSize: "1.9rem" }}
              >
                <span style={{ color: "lightgray" }}>
                  <b>Techrhon</b>
                </span>
                <span style={{ color: "orange" }}>
                  {" "}
                  <b>Aerial</b>
                </span>
              </div>
              <div
                className="b w-100 mt-3 pl-0 d-flex justify-content-center text-align-center"
                style={{ fontSize: "1.4rem" }}
              >
                <p className="pr-0 text-align-center " style={{ width: "85%" }}>
                  Our Techrhon team are available around the clock to support
                  your cable and fiber installation needs. Your goals are our
                  utmost priority. If you have questions about our services,
                  equipment, or simply need a quote please give us a call. We
                  look forward to hearing from you.
                </p>
              </div>

              <div className="mt-3 mb-4 pl-2 mt-5">
                <p
                  style={{ textAlign: "center" }}
                  className="pt-1 pb-1   justify-content-center align-items-center m-2"
                >
                  <b>
                    <p style={{ fontSize: "1.5rem" }}>24 Hour Support</p>
                  </b>
                  {/* Call today */}
                </p>
              </div>

              <div className="container border-success">
                <div className="row">
                  <div className=" col-12">
                    <Image
                      src={walkieTalkie}
                      className="  mt-0 p-0 img shadow"
                      style={{
                        //   position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="border-left col-12 mt-0">
                    <div className="pl-2 mt-5 d-flex justify-content-center">
                      <span style={{ color: "black" }}>
                        <h1>
                          <b>Contact Us</b>
                        </h1>
                      </span>
                      {/* <span style={{ color: "orange" }}> Aerial</span> */}
                    </div>
                    <div className="row pl-3 pb-0 mt-5 w-100 border-bottom">
                      <div className="col-2">
                        <h5 style={{ color: "orange" }}>Phone:</h5>
                      </div>
                      <div className="col-10 justify-content-start d-flex">
                        <p style={{}}>404.740.5477</p>
                      </div>
                    </div>
                    <div className="row pl-3 pt-2 pb-2 mt-2 w-100 border-bottom">
                      <div className="col-2">
                        <h5 style={{ color: "orange" }}>Email:</h5>
                      </div>
                      <div className="col-10">
                        <p style={{}}>info@techrhonaerial.com</p>
                      </div>
                    </div>
                    <div className="row pl-3 mt-2 w-100 pt-2">
                      <div className="col-12">
                        <h5 style={{ color: "orange" }}>Address:</h5>
                      </div>
                      <div className="col-12">
                        <div className="row pl-2 mt-2" style={{}}>
                          <p>4426 Hugh Howell Rd Ste B 405</p>
                        </div>
                        <div className="row pl-2 mt-0" style={{}}>
                          <p>Atlanta, GA 30084</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: "100px" }}></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(ContactUs);
