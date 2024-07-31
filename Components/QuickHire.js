import React, { Component } from "react";
import QuickHireForm from "./QuickHireForm";
import NavbarComponent from "./NavbarComponent";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

// ==== IMAGES
import quickHire from "../images/quickHire.png";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

export default class QuickHire extends Component {
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
    window.addEventListener("scroll", this.handleScroll());
    // this.getPosition();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
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

  render() {
    const { width } = this.state;
    const breakpoint = 800;
    return (
      <div style={{ overflow: "auto", height: "100vh" }}>
        {width > breakpoint ? (
          <>
            {" "}
            <div
              className="border  "
              style={
                {
                  //   position: "relative",
                  //width: "100%",
                  // height: "100%",
                }
              }
            >
              <Image
                src={quickHire}
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
            <div className="border  ">
              <div className="p-2" style={{ height: "100%" }}>
                <div className="container " style={{ backgroundColor: " " }}>
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
                    className="d-flex justify-content-center bebas"
                    style={{ fontSize: "1.5rem", color: "darkGray" }}
                  >
                    <p>Application</p>
                  </div>
                  <p className="mt-3 mb-3">
                    Are you passionate about working with cables and fiber
                    optics? Techrhon Aerial is hiring lineman who can install
                    and maintain cable systems. If you’re ready to contribute to
                    our mission of seamless connectivity, apply today!
                  </p>
                  <p>{width}</p>
                  <QuickHireForm />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div
              className="border  "
              style={
                {
                  //   position: "relative",
                  //width: "100%",
                  // height: "100%",
                }
              }
            >
              <Image
                src={quickHire}
                className="  mt-0 p-0 img"
                fluid
                style={{
                  //   position: "relative",
                  width: "100%",
                  // height: "100%",
                  height: "40vh",
                }}
              />
            </div>
            <div className="border  ">
              <div className="p-2" style={{ height: "100%" }}>
                <div className="container " style={{ backgroundColor: " " }}>
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
                    className="d-flex justify-content-center bebas"
                    style={{ fontSize: "1.5rem", color: "darkGray" }}
                  >
                    <p>Application</p>
                  </div>
                  <p className="mt-3 mb-3">
                    Are you passionate about working with cables and fiber
                    optics? Techrhon Aerial is hiring lineman who can install
                    and maintain cable systems. If you’re ready to contribute to
                    our mission of seamless connectivity, apply today!
                  </p>
                  <p>{width}</p>
                  <QuickHireForm />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
