import React, { Component } from "react";
// import to allow different routes
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default class NavbarComponent extends Component {
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

  componentDidMount() {
    console.log("Color Passed: " + this.props.navColor);
    this.setState({ navColor: this.props.navColor });
    // window.addEventListener("resize", this.handleResizeWindow);
    // window.addEventListener("scroll", this.handleScroll());
    // this.getPosition();
  }
  componentDidUpdate() {
    console.log("Updated Color Passed: " + JSON.stringify(this.props.navColor));
  }

  render() {
    return (
      <>
        <div
          className=" fixed-top p-0 navbarAdjust"
          style={{
            fontSize: "1.0rem",
            color: "white",
            backgroundColor: "" + this.props.navColor + "",
          }}
        >
          <div className="row">
            {/* <div className="  col-2 p-0 pt-4 d-flex justify-content-center m-0">
              <h4>
                <span style={{ color: "lightgray" }}>Techrhon</span>
                <span style={{ color: "orange" }}> Aerial</span>
              </h4>
            </div> */}
            <div className="col-12 m-0">
              <Navbar expand="lg" className=" pb-1" style={{}}>
                <Container
                  className=" pr-0 pl-2 pr-3 pt-0 pb-0 d-flex justify-content-left"
                  style={{ width: "100%" }}
                >
                  <Navbar.Brand className="mr-3" href="#home">
                    <h3>
                      <span style={{ color: "lightgray" }}>Techrhon</span>
                      <span style={{ color: "orange" }}> Aerial</span>
                    </h3>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="bg-light "
                    style={{ color: "white" }}
                  />
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={{ color: "white" }}
                  >
                    <Nav className="me-auto" style={{ color: "white" }}>
                      <Nav.Link
                        href="/"
                        className="mr-3 pt-4"
                        style={{ color: "white" }}
                      >
                        <b>HOME</b>
                      </Nav.Link>
                      <Nav.Link
                        // href="#link"
                        className="mr-3 pt-4"
                        style={{ color: "white" }}
                        onClick={() => this.props.aboutUs()}
                      >
                        <b> ABOUT US</b>
                      </Nav.Link>
                      <Nav.Link
                        // href="#link"
                        className="mr-3 pt-4"
                        style={{ color: "white" }}
                        onClick={() => this.props.goToSafety()}
                      >
                        <b> SAFETY</b>
                      </Nav.Link>
                      <Nav.Link
                        // href="#link"
                        className="mr-3 pt-4"
                        style={{ color: "white" }}
                        onClick={() => this.props.goToSubcontractors()}
                      >
                        <b> SUBCONTRACTORS</b>
                      </Nav.Link>
                      <Nav.Link
                        // href="/onboarding"
                        className="mr-3 pt-4"
                        style={{ color: "white" }}
                        onClick={() => this.props.onboarding()}
                      >
                        <b> ONBOARDING</b>
                      </Nav.Link>
                      <Nav.Link
                        // href="#link"
                        className="mr-3 pt-4"
                        style={{ color: "white" }}
                        onClick={() => this.props.goToQuickHire()}
                      >
                        <b> APPLY FOR JOB</b>
                      </Nav.Link>
                      <Nav.Link
                        // to="/dailylogin"
                        className="mr-3 pt-4"
                        style={{ color: "white" }}
                        onClick={() => this.props.dailies()}
                      >
                        <b> DAILIES</b>
                      </Nav.Link>
                      <Nav.Link
                        // href="/contactus"
                        className="mr-3 pt-4"
                        style={{ color: "white" }}
                        onClick={() => this.props.contactUs()}
                      >
                        <b> CONTACT US</b>
                      </Nav.Link>
                      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </>
    );
  }
}
