import React, { Component } from "react";
import FileDrop from "./FileDrop";
import Slider from "./Slider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
// import Navbar from "./Navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      hovered: false,
    };
  }

  onMouseEnter = () => {
    console.log("Mouse Entered");
    this.setState({ hovered: true });
  };

  onMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const style = {
      backgroundColor: this.state.hovered
        ? "rgba(255, 255, 200 , 0.9)"
        : "rgba(17, 129, 211 , 0.6)",
      color: this.state.hovered ? "black" : "white",
    };

    return (
      <div
        className=" rounded pt-0 shadow p-0 pl-1 pr-1"
        style={{
          position: "",
          width: "100%",
          // height: "500px",
          // border: "10px solid black",

          //backgroundColor: "rgba(234,182,118, 0.3)",
        }}
      >
        {/* <div
          className="p-3 pt-3 sticky-top "
          style={{
            backgroundColor: "rgba(255, 255, 255 , 0.9)",
          }}
        >
          <img
            src="./images/techrhon.png"
            alt="Techrhon Banner"
            style={{ width: "120px" }}
          />
        </div> */}

        <div
          className="border border-5 border-success border-dark  pt-0 pb-0 p-0"
          style={
            {
              // backgroundColor: "rgba(234,182,118, 0.0)",
            }
          }
        >
          {/* ======= THIS IS THE MAIN CONTAINER > ROW ==== */}
          <div
            className="row mt-2 p-0 border border-5 opacity-100 d-flex justify-content-center"
            // style={{ backgroundColor: "rgba(133, 193, 233, 0.5)" }}
            style={{
              backgroundSize: "cover",
            }}
          >
            {/* ======= COLUMN USED FOR MOBILE/PC CONVERSION ==== */}
            <div
              className="  col-12 col-md-10 pr-0 p-0 m-0 pb-5  mt-3"
              style={{
                // backgroundColor: "rgba(1, 1, 1 , 0.6)",
                position: "relative",
                paddingBottom: "20px",
              }}
            >
              {/* <div className=" mt-0 fixed-top w-100">
                <NavBar className="" style={{ zIndex: "999999" }} />
              </div> */}
              {/* <div
                  id="33"
                  className=" "
                  style={{
                    position: "absolute",
                    bottom: "80%",
                    right: "15%",
                    zIndex: 999999, <img
                        src="./images/social_icons/wa.jpeg"
                        className="img-fluid m-0"
                        alt="Techrhon Banner"
                        style={{ width: "100%" }}
                      />
                  }}
                >
                  <h1>Techrhon</h1>
                </div> */}
              {/* CONTAINER FOR SLIDER USED FOR PLACEMENT */}
              <div
                className=" d-inline-block rounded slider mt-0 p-0"
                style={{
                  paddingBottom: "5px",
                  backgroundColor: "white",
                  paddingTop: "15px",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                  width: "100%",
                  // height: "100%",
                  position: "relative",

                  // backgroundImage: `url(${"./images/metal3.jpg"})`,
                  backgroundSize: "cover",
                }}
              >
                {/* ========== HOME SLIDER ==============*/}
                <div
                  id="sliderBox"
                  className=" w-100  mt-0"
                  style={{
                    position: "relative",
                    zIndex: "10",
                    paddingTop: "0px",
                  }}
                >
                  <img
                    src="./images/cablerun.png"
                    className="img-fluid m-0"
                    alt="Email"
                    style={{ width: "100%" }}
                  />
                  {/* <Slider
                    className="   p-5 pl-1 pr-1  mt-0 m-0 video"
                    style={{
                      objectFit: "cover",
                      //  width: "150%",
                      // height: "100%",
                      // width: "100%",
                      // position: "absolute",
                      zIndex: 1,
                      borderBottom: "5px solid white",
                      top: "50px",
                    }}
                  /> */}
                </div>
              </div>
              {/* ========== SIMPLE NAV BAR ==============*/}
              {/* <div
                style={{}}
                className="d-flex border justify-content-center p-3"
              >
                <Navbar expand="lg" className="bg-body-tertiary">
                  <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div> */}
              <div className="bg-light p-4 d-flex justify-content-end">
                <nav>
                  <Link className="pr-4" to="/home">
                    Home
                  </Link>

                  <Link className="pr-4" to="/about">
                    Techrhon Services
                  </Link>

                  <Link className="pr-4" to="/login">
                    <b>Login</b>
                  </Link>

                  <Link className="pr-4" to="/contact">
                    Contact Us
                  </Link>
                </nav>
              </div>

              {/* ========== 1ST SECTION ==============*/}
              <div
                className="contianer-fluid border border-dark shadow pb-4 pl-1 "
                style={{
                  backgroundColor: "white",
                  // backgroundImage: `url(${"./images/metal3.jpg"})`,
                  marginBottom: "100px",
                  zIndex: "999",
                }}
              >
                <div className="row p-4 rounded  ">
                  <div
                    className="col-12 col-md-8  p-4 bg-light  shadow "
                    style={{
                      paddingBottom: "200px",
                      height: "1000px",
                    }}
                  >
                    <div
                      className="row p-2 pb-4 bebas"
                      style={{ color: "#51B5F1" }}
                    >
                      A competitive edge in cable contracting
                    </div>
                    <div
                      className="shadow rounded"
                      style={{
                        backgroundImage: `url(${"./images/tower.jpg"})`,
                        backgroundImageHeight: "200px",
                        backgroundSize: "cover",
                        height: "200px",
                      }}
                    ></div>
                    <div className="container  m-2 bebas mb-1 ">
                      <div className="row InclusiveSans mt-2 mb-2 pb-4 p-2">
                        <p>
                          Techrhon Aerial is a leading cable contracting company
                          based in the vibrant city of Atlanta. With a rich
                          history spanning over 12 years, the company has built
                          a reputation for delivering{" "}
                          <strong>high-quality</strong> services and maintaining
                          an <strong>impeccable</strong> track record.
                        </p>
                        <br />
                        <br />
                        <p>
                          Founded in 2011, Techrhon has grown from a small local
                          business to a well-respected industry player. The
                          company’s success is largely attributed to its team of
                          experienced linemen and cable technicians who bring a
                          wealth of knowledge and expertise to every project.
                        </p>
                        <br />
                        <br />
                        <p>
                          Techrhon’s team is its greatest asset. Comprising
                          numerous seasoned linemen and cable technicians, the
                          company prides itself on having a workforce that is
                          not only <strong>highly skilled</strong> but also{" "}
                          <strong>dedicated</strong> and{" "}
                          <strong>passionate</strong> about their craft. Their
                          expertise ranges from routine installations and
                          maintenance to complex network designs and
                          implementations.
                        </p>
                        <br />
                        <br />
                        <p>
                          Over the years, Techrhon has been instrumental in
                          supporting disaster recovery efforts. The company’s
                          experience in this area is extensive, having provided
                          critical infrastructure support in the aftermath of
                          numerous natural disasters. This work has not only
                          helped communities get back on their feet but also
                          demonstrated Techrhon’s commitment to{" "}
                          <strong>service</strong> and{" "}
                          <strong>social responsibility</strong>.
                        </p>
                      </div>

                      {/* <div
                        className="row mt-0 p-4 pb-2"
                        style={{ color: "#51B5F1" }}
                      >
                        We Offer:
                      </div> */}
                    </div>
                  </div>

                  <div
                    id="rightMainContact"
                    className="col-12 col-md-4 border-left border-left-5    p-0 pl-0 ml-0 rounded justify-content-center"
                    style={{
                      backgroundImage: `url(${"./images/city.jpg"})`,
                      backgroundSize: "cover",
                      borderColor: "purple",
                      // display: "flex",
                      // marginTop:"50%",
                      // justifyContent: "center",
                      // alignItems: "center",
                      // height: "100%",
                    }}
                  >
                    <div
                      className=" p-3  "
                      style={{
                        color: "#9EA2A4",
                        backgroundColor: "rgba(255, 255, 255 , 0.8)",
                        marginTop: "15%",
                      }}
                    >
                      <div
                        className="row bebas mt-0 pl-2"
                        style={{ color: "#51B5F1" }}
                      >
                        Techrhon Aerial LLC
                      </div>
                      <div className="row pl-2" style={{}}>
                        4426 Hugh Howell Rd Ste B 405
                      </div>
                      <div className="row pl-2" style={{}}>
                        Atlanta, GA 30084
                      </div>
                      <div className=" row mt-4 pl-3" style={{}}>
                        <table style={{ width: "100%" }}>
                          <td style={{ width: "40px" }}>
                            <img
                              src="./images/phone-message.png"
                              className="img-fluid m-0"
                              alt="Email"
                              style={{ width: "50px" }}
                            />
                          </td>
                          <td>(404) 740-5477</td>
                        </table>
                      </div>

                      <div className="row mt-3 pl-3" style={{}}>
                        <table>
                          <td style={{ width: "40px" }}>
                            <img
                              src="./images/mobile-email.png"
                              className="img-fluid m-0"
                              alt="Email"
                              style={{ width: "50px" }}
                            />
                          </td>
                          <td>techrhonaerial@gmail.com</td>
                        </table>
                      </div>

                      <div className="row mt-5 mb-3 p-3" style={{}}>
                        <Button variant="primary">Leave Message</Button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row mt-3 InclusiveSans p-4 pt-1"
                // style={{ color: "#51B5F1" }}
              >
                <div className="col-12 col-md-6  p-4 pt-1 pb-0">
                  {/* <div className="container-fluid"> */}
                  <div className="row pb-1 pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">12+ Years </div>
                  </div>
                  {/* ===== */}
                  <div className="row pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">Cable Installation</div>
                  </div>
                  {/* ===== */}
                  <div className="row pb-1 pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">Fiber Optic Cabling</div>
                  </div>
                  {/* ===== */}
                  <div className="row pb-1 pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">OSHA</div>
                  </div>
                  {/* ===== */}
                  <div className="row pb-1 pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">Technical Expertise</div>
                  </div>
                  {/* </div> */}
                </div>
                {/* ===== RIGHT SIDE CHECKS ==== */}

                <div
                  className="bg-primary border p-5"
                  style={{ height: "200px" }}
                >
                  spacer
                </div>
                <div className="col-12 col-md-12  mt-5 w-100">
                  <div className="container-fluid border  ">
                    {/* >>>  LEAVE MESSAGE FOR TECHRHON*/}
                    <div className="row border " style={{}}>
                      <div className="container-fluid">
                        <div className="row ">
                          <div className="col p-4 m-0 border  shadow-lg">
                            <Form onSubmit={this.onMouseLeave}>
                              <div className="row  mb-3">
                                <div className="col-2">
                                  <img
                                    src="./images/pushSMS.png"
                                    className="img-fluid m-0"
                                    alt="Email"
                                    style={{ width: "40px" }}
                                  />
                                </div>
                                <div className="col">
                                  <h3>Leave A Message</h3>
                                </div>
                                <div className="mt-2">
                                  <p>
                                    A Techrhon associate will be notified and
                                    contact you shortly.
                                  </p>
                                </div>

                                <h5>We look forward to hearing from you!</h5>
                              </div>
                              <Row>
                                <Form.Group>
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    defaultValue=""
                                  />
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group>
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    defaultValue=""
                                  />
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group>
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    defaultValue=""
                                  />
                                </Form.Group>
                              </Row>
                              <Row className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <FloatingLabel controlId="" label="Comments">
                                  <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: "200px" }}
                                  />
                                </FloatingLabel>
                              </Row>

                              <Button type="submit">Submit form</Button>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* >>>  CUSTOM FOOTER*/}
                    <div className="row border border-dark"> Custom Footer</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6  border border-3pr-4 pl-4 pt-1">
                <div className="container-fluid">
                  {/* ===== */}
                  <div className="row pb-1 pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">Professional Team</div>
                  </div>
                  {/* ===== */}
                  <div className="row pb-1 pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">Strong Network</div>
                  </div>
                  {/* ===== */}
                  <div className="row pb-1 pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">Disaster Recovery</div>
                  </div>
                  {/* ===== */}
                  <div className="row pb-1 pb-3">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">Highly Dynamic</div>
                  </div>
                  {/* ===== */}
                  <div className="row pb-1">
                    <div className="col-2">
                      <img
                        src="./images/check.svg"
                        className="img-fluid m-0"
                        alt="Email"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col">Prime Contractor</div>
                  </div>
                </div>
              </div>
              {/* ============  SECTION 2 BILLBOARD ======= */}

              <div
                className="container-fluid bg-light border mt-2 p-0 "
                style={{
                  // backgroundImage: `url(${"./images/neighborhood.jpg"})`,
                  backgroundSize: "cover",
                  height: "100%",
                }}
              >
                {/* ====== CUSTOMER BILLBOARD LEFT ===== */}
                <div
                  className="row border border-dark pt-2 rounded justify-content-center"
                  style={{
                    backgroundImage: `url(${"./images/fiber22.jpg"})`,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <div className="col-6 col-md-5 border ">
                    <div
                      className="w-100  h-100 opacity-100 RubicMonoOne p-0 d-flex d-flex justify-content-center align-items-center "
                      style={{ fontSize: "56", color: "white" }}
                    >
                      <img
                        src="./images/leveler.jpg"
                        className="img-fluid m-0"
                        alt="Techrhon Banner"
                        style={{
                          width: "100%",
                          // height: "100%",
                          // backgroundRepeat: 'no-repeat',
                          content: "cover",
                        }}
                      />
                    </div>
                  </div> */}
                  {/* ====== VISITOR MESSAGE SUBMIT & FOOTER (INTEGRATED) ===== */}
                </div>
              </div>

              {/* ============  Spacer ======= */}

              <div
                className="container-fluid  border"
                style={{
                  backgroundImage: `url(${"./images/metal3.jpg"})`,
                  backgroundSize: "cover",
                  height: "500px",
                }}
              >
                <div className="border border-warning container d-flex border w-100 p-0">
                  <div className="row w-100 m-0">
                    <div className="col-6 border border-info">Left</div>
                    <div className="col-6 border border-info">Right</div>
                  </div>
                </div>
              </div>

              {/* ============  SECTION 2 BILLBOARD (END) ======= */}
            </div>
          </div>
        </div>
        {/* <div
          className="container border p-3 mt-4 rounded"
          style={{ backgroundColor: "white" }}
        >
          <h4>Techrhon Aerial </h4>
          <p>
            Techrhon is a leading cable contracting company based in the vibrant
            city of Atlanta. With a rich history spanning over 12 years, the
            company has built a reputation for delivering high-quality services
            and maintaining an impeccable track record. Founded in 2011,
            Techrhon has grown from a small local business to a well-respected
            industry player. The company’s success is largely attributed to its
            team of experienced linemen and cable technicians who bring a wealth
            of knowledge and expertise to every project. Techrhon’s team is its
            greatest asset. Comprising numerous seasoned linemen and cable
            technicians, the company prides itself on having a workforce that is
            not only highly skilled but also dedicated and passionate about
            their craft. Their expertise ranges from routine installations and
            maintenance to complex network designs and implementations. Over the
            years, Techrhon has been instrumental in supporting disaster
            recovery efforts. The company’s experience in this area is
            extensive, having provided critical infrastructure support in the
            aftermath of numerous natural disasters. This work has not only
            helped communities get back on their feet but also demonstrated
            Techrhon’s commitment to service and social responsibility.
            Techrhon’s services extend beyond cable contracting. The company
            also offers consulting services, helping clients navigate the
            complexities of network design and implementation. This holistic
            approach ensures that clients receive comprehensive solutions
            tailored to their specific needs. Despite its growth and success,
            Techrhon remains true to its roots. The company continues to uphold
            its founding values of integrity, quality, and customer
            satisfaction. These principles, coupled with its technical expertise
            and commitment to innovation, make Techrhon a trusted partner in the
            cable contracting industry. In conclusion, Techrhon is more than
            just a cable contracting company. It is a symbol of resilience, a
            testament to the power of experience, and a beacon of excellence in
            the industry. With its unwavering commitment to quality service and
            customer satisfaction, Techrhon is poised for even greater success
            in the years to come.
          </p>
          
        </div> */}

        {/* <div className="shadow mb-4 p-2 border">
          <a
            class="weatherwidget-io"
            href="https://forecast7.com/en/33d75n84d39/atlanta/?unit=us"
            data-label_1="ATLANTA"
            data-label_2="WEATHER"
            data-theme="original"
          >
            ATLANTA WEATHER
          </a>
        </div> */}
        <Footer />
        <div className="col">{/* <FileDrop /> */}</div>
      </div>
    );
  }
}
