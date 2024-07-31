import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import NavbarComponent from "./NavbarComponent";

import { useNavigate } from "react-router-dom";

// ==== IMAGES

import fibertech from "../images/contact.png";
import hardworker from "../images/hardWork.png";
import techsTalking from "../images/bucket1.png";
import walkieTalkie from "../images/walkieTalkie2.png";
import poleClimb from "../images/poleClimb.png";
import threeguys from "../images/threeGuys.png";
import mission from "../images/mission.png";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

class AboutUs extends Component {
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
                height: "68vh",
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
                className="p-0 "
                style={{ height: "68vh", position: "relative" }}
              >
                <Image
                  src={hardworker}
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
                  About Us
                  <h3 style={{ color: "orange" }}>Founded in Atlanta, GA</h3>
                </div>
              </div>
            </div>
            <div className=" w-100 mt-2" style={{ height: "800px" }}>
              <div className=" w-100 mt-2 pl-5 d-flex justify-content-center">
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
                className="container p-3 d-flex justify-content-center bebas "
                style={{ color: "darkGray" }}
              >
                <div className="pl-5">
                  <h4>Making Great Connections.</h4>
                </div>
              </div>
              <div
                className="container w-100 mt-3 pl-5 d-flex justify-content-center  pb-5 pt-3"
                style={{ fontSize: "1.4rem" }}
              >
                <p
                  className="pr-5 d-flex justify-content-center"
                  style={{ width: "85%", textAlign: "center" }}
                >
                  Techrhon Aerial LLC was established in 2010 and has a accured
                  extensive experience in both cable installations. We are proud
                  to have taken on large scale projects and providing the
                  highest level of service. Our team specialized in
                  telecommuncation infastructure.
                </p>
              </div>
              {/* ==================== BUILDING CONNECTIONS  ================ */}
              <div className="container  mt-5 pl-2 pr-2 d-flex justify-content-center">
                <div className="row  w-100 ">
                  <div className="col-6  ">
                    <div>
                      <Image
                        src={poleClimb}
                        className="  mt-0 p-0 img shadow"
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-6 border-left border-dark border-4 pl-0">
                    <div>
                      <div className="container border-bottom border-dark pl-0">
                        <div
                          className="row bebas mt-4 pl-3"
                          style={{ color: "orange" }}
                        >
                          <h2>Building Connections Since 2010</h2>
                        </div>
                      </div>
                      <div className="container ">
                        <div
                          className="row  mt-2 pl-3"
                          style={{ color: "black" }}
                        >
                          <p>
                            Techrhon Aerial LLC, founded in 2010, specializes in
                            fiber and cable installations. They serve the
                            southeastern United States and Puerto Rico. As a
                            self-sufficient company, Techrhon manages its
                            operations independently, ensuring efficient service
                            delivery through their ownership of equipment.
                            Located in Atlanta, GA, Techrhon Aerial LLC is a
                            reliable player in the utility system construction
                            industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==================== TEAMWORK ================ */}
              <div className="container  mt-5 pl-2 pr-2 d-flex justify-content-center">
                <div className="row  w-100 ">
                  <div className="col-6 border-right border-dark border-4 pr-0">
                    <div>
                      <div className="container border-bottom border-dark d-flex justify-content-end pr-3">
                        <div
                          className="row bebas mt-4 "
                          style={{ color: "orange" }}
                        >
                          <h2>Meet our Techrhon Team</h2>
                        </div>
                      </div>
                      <div className="container ">
                        <div
                          className="row  mt-2 pl-3 pr-2"
                          style={{ color: "black" }}
                        >
                          <p style={{ textAlign: "left" }}>
                            Techrhon Aerial fosters a team-based safety culture,
                            prioritizing safety during cable and fiber
                            installations. Their unwavering commitment to
                            excellence ensures high-quality work that meets and
                            exceeds industry standards. The collaborative spirit
                            among Techrhon’s technicians allows them to go above
                            and beyond, addressing challenges with dedication
                            and creativity. When needed, the team steps up,
                            demonstrating their willingness to tackle any task.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6  ">
                    <div>
                      <Image
                        src={threeguys}
                        className="  mt-0 p-0 img shadow"
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* ==================== MISSION STATEMENT ================ */}
              <div
                className="container  w-100 mt-5 mb-5 "
                style={{
                  marginBottom: "200px",
                  borderTop: "2px dotted darkGray",
                }}
              >
                <div className="container w-100 mt-5">
                  {/* ====== MISSION / VISION ===== */}
                  <div className="row">
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                      <Image
                        src={mission}
                        className="  mt-0 p-0 img shadow"
                        roundedCircle
                        style={{
                          //   position: "relative",
                          width: "70%",
                          height: "250px",
                        }}
                      />
                    </div>
                    <div className="col-8 ">
                      <div
                        className="row  bebas mt-2  w-100 d-flex justify-content-end"
                        style={{ color: "darkGray" }}
                      >
                        <h2 className="d-flex justify-content-start">
                          Our Mission Statement
                        </h2>
                      </div>
                      <div
                        className="row   mt-2  w-100 d-flex justify-content-end"
                        style={{ color: "black" }}
                      >
                        <p className="d-flex justify-content-end">
                          “Techrhon Aerial empowers connectivity by providing
                          exceptional fiber and cable installation services. Our
                          mission is to connect all customers, bridging gaps and
                          enabling seamless communication.”
                        </p>
                      </div>
                      <div
                        className="row  bebas mt-2  w-100 d-flex justify-content-end"
                        style={{ color: "darkGray" }}
                      >
                        <h2 className="d-flex justify-content-start">
                          Our Vision
                        </h2>
                      </div>
                      <div
                        className="row  mt-2  w-100 d-flex justify-content-end"
                        style={{ color: "black" }}
                      >
                        <p className="d-flex justify-content-end">
                          “To be the leading provider of reliable, high-speed
                          connectivity solutions, enhancing lives and businesses
                          through seamless communication.”
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ======= VALUES ====== */}
                  <div className="row">
                    <div className="col-6">
                      <div className="container">
                        <div className="row  p-2">
                          <p>
                            <b>Reliability:</b> We deliver consistent,
                            dependable installations that keep businesses and
                            communities connected.
                          </p>
                        </div>
                        <div className="row p-2">
                          <p>
                            <b>Precision:</b> Our skilled technicians ensure
                            precise, efficient cable and fiber deployment,
                            minimizing disruptions.
                          </p>
                        </div>
                        <div className="row  p-2">
                          <p>
                            <b>Customer-Centric:</b> We prioritize customer
                            needs, offering turnkey solutions and exceptional
                            service.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="container">
                        <div className="row  p-2">
                          <p>
                            <b>Innovation:</b> Techrhon Aerial stays at the
                            forefront of technology, driving progress in
                            connectivity solutions.
                          </p>
                        </div>
                        <div className="row  p-2">
                          <p>
                            <b>Community Impact:</b> We actively contribute to
                            local communities, fostering growth and digital
                            inclusion.
                          </p>
                        </div>
                        <div className="row  p-2">
                          <b>Environmental Responsibility:</b> We minimize our
                          ecological footprint, promoting sustainable practices.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: "darkGray", height: "100px" }}
                ></div>
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
              className="mt-0 shadow-lg"
              style={{
                //   backgroundColor: "#d3d3d3",
                height: "40vh",
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
                style={{ height: "40vh", position: "relative" }}
              >
                <Image
                  src={hardworker}
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
                  About Us
                  <h3 style={{ color: "orange" }}>Founded in Atlanta, GA</h3>
                </div>
              </div>
            </div>
            <div className=" w-100 mt-0" style={{ height: "800px" }}>
              <div className=" w-100 mt-2 pl-0 d-flex justify-content-center">
                <h2>
                  <span style={{ color: "lightgray", fontSize: "2.0rem" }}>
                    <b>Techrhon</b>
                  </span>
                  <span style={{ color: "orange", fontSize: "2.0rem" }}>
                    {" "}
                    <b>Aerial</b>
                  </span>
                </h2>
              </div>
              <div
                className="container p-3 d-flex justify-content-center bebas "
                style={{ color: "darkGray" }}
              >
                <div className="pl-0">
                  <h4>Making Great Connections.</h4>
                </div>
              </div>
              <div
                className="container w-100 mt-3 pl-3 d-flex justify-content-center shadow pb-5 pt-3"
                style={{ fontSize: "1.4rem" }}
              >
                <p
                  className="pr-5 d-flex justify-content-center"
                  style={{
                    width: "95%",
                    textAlign: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  Techrhon Aerial LLC was established in 2010 and has a accured
                  extensive experience in both cable installations. We are proud
                  to have taken on large scale projects and providing the
                  highest level of service. Our team specialized in
                  telecommuncation infastructure.
                </p>
              </div>
              {/* ==================== BUILDING CONNECTIONS  ================ */}
              <div className="container  mt-5 pl-2 pr-2 d-flex justify-content-center">
                <div className="row  w-100 ">
                  <div className="col-12  ">
                    <div>
                      <Image
                        src={poleClimb}
                        className="  mt-0 p-0 img shadow"
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12  mt-4 border-4 pl-0 shadow">
                    <div>
                      <div className="container border-bottom border-dark pl-0">
                        <div
                          className="row bebas mt-4 pl-3"
                          style={{ color: "orange" }}
                        >
                          <h2>Building Connections Since 2010</h2>
                        </div>
                      </div>
                      <div className="container ">
                        <div
                          className="row  mt-2 pl-3"
                          style={{ color: "black" }}
                        >
                          <p>
                            Techrhon Aerial LLC, founded in 2010, specializes in
                            fiber and cable installations. They serve the
                            southeastern United States and Puerto Rico. As a
                            self-sufficient company, Techrhon manages its
                            operations independently, ensuring efficient service
                            delivery through their ownership of equipment.
                            Located in Atlanta, Techrhon Aerial LLC is a
                            reliable player in the utility system construction
                            industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==================== TEAMWORK ================ */}
              <div className="container  mt-4 pl-2 pr-2 d-flex justify-content-center">
                <div className="row  w-100 ">
                  <div className="col-12  mt-2">
                    <div>
                      <Image
                        src={threeguys}
                        className="  mt-0 p-0 img shadow"
                        thumbnail
                        style={{
                          //   position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12  border-4 pr-0 shadow mt-4">
                    <div>
                      <div className="container border-bottom border-dark d-flex justify-content-end pr-3">
                        <div
                          className="row bebas mt-4 "
                          style={{ color: "orange" }}
                        >
                          <h2>Meet our Techrhon Team</h2>
                        </div>
                      </div>
                      <div className="container ">
                        <div
                          className="row  mt-2 pl-3 pr-2"
                          style={{ color: "black" }}
                        >
                          <p style={{ textAlign: "left" }}>
                            Techrhon Aerial fosters a team-based safety culture,
                            prioritizing safety during cable and fiber
                            installations. Their unwavering commitment to
                            excellence ensures high-quality work that meets and
                            exceeds industry standards. The collaborative spirit
                            among Techrhon’s technicians allows them to go above
                            and beyond, addressing challenges with dedication
                            and creativity. When needed, the team steps up,
                            demonstrating their willingness to tackle any task.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==================== MISSION STATEMENT ================ */}
              <div
                className="container  w-100 mt-5 mb-5 "
                style={{
                  marginBottom: "200px",
                  borderTop: "2px dotted darkGray",
                }}
              >
                <div className="container w-100 mt-3">
                  {/* ====== MISSION / VISION ===== */}
                  <div className="row ">
                    <div className="col-12 d-flex justify-content-center align-items-center ">
                      <Image
                        src={mission}
                        className="  mt-0 p-0 img shadow"
                        roundedCircle
                        style={{
                          //   position: "relative",
                          width: "60%",
                          height: "250px",
                        }}
                      />
                    </div>
                    <div className="col-12 mt-5">
                      <div
                        className="row  bebas mt-2  w-100 d-flex justify-content-end"
                        style={{ color: "darkGray" }}
                      >
                        <h2 className="d-flex justify-content-start">
                          Our Mission Statement
                        </h2>
                      </div>
                      <div
                        className="row   mt-2  w-100 d-flex justify-content-end"
                        style={{ color: "black" }}
                      >
                        <p className="d-flex justify-content-end">
                          “Techrhon Aerial empowers connectivity by providing
                          exceptional fiber and cable installation services. Our
                          mission is to connect all customers, bridging gaps and
                          enabling seamless communication.”
                        </p>
                      </div>
                      <div
                        className="row  bebas mt-2  w-100 d-flex justify-content-end"
                        style={{ color: "darkGray" }}
                      >
                        <h2 className="d-flex justify-content-start">
                          Our Vision
                        </h2>
                      </div>
                      <div
                        className="row  mt-2  w-100 d-flex justify-content-end"
                        style={{ color: "black" }}
                      >
                        <p className="d-flex justify-content-end">
                          “To be the leading provider of reliable, high-speed
                          connectivity solutions, enhancing lives and businesses
                          through seamless communication.”
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ======= VALUES ====== */}
                  <div className="row">
                    <div className="col-12">
                      <div className="container">
                        <div className="row  p-2">
                          <p>
                            <b>Reliability:</b> We deliver consistent,
                            dependable installations that keep businesses and
                            communities connected.
                          </p>
                        </div>
                        <div className="row p-2">
                          <p>
                            <b>Precision:</b> Our skilled technicians ensure
                            precise, efficient cable and fiber deployment,
                            minimizing disruptions.
                          </p>
                        </div>
                        <div className="row  p-2">
                          <p>
                            <b>Customer-Centric:</b> We prioritize customer
                            needs, offering turnkey solutions and exceptional
                            service.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="container">
                        <div className="row  p-2">
                          <p>
                            <b>Innovation:</b> Techrhon Aerial stays at the
                            forefront of technology, driving progress in
                            connectivity solutions.
                          </p>
                        </div>
                        <div className="row  p-2">
                          <p>
                            <b>Community Impact:</b> We actively contribute to
                            local communities, fostering growth and digital
                            inclusion.
                          </p>
                        </div>
                        <div className="row  p-2">
                          <p>
                            <b>Environmental Responsibility:</b> We minimize our
                            ecological footprint, promoting sustainable
                            practices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(59, 58, 56)",
                    height: "100px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(AboutUs);
