import React, { Component } from "react";
import Iframe from "react-iframe";
import Accordion from "react-bootstrap/Accordion";
import FileDrop from "./FileDrop";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import W2Form from "./W9Form";
import Table from "react-bootstrap/Table";
import RegisterForm from "./RegisterForm";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import welcome from "../images/welcome.jpg"; // gives image path
import axios from "axios";
import { Descope } from "@descope/react-sdk";

async function downloadFile(params) {
  const baseUrl = "https://upcdn.io";
  const path = `/${params.accountId}/raw${params.filePath}`;
  const entries = (obj) =>
    Object.entries(obj).filter(([, val]) => (val ?? null) !== null);
  const query = entries(params.querystring ?? {})
    .flatMap(([k, v]) => (Array.isArray(v) ? v.map((v2) => [k, v2]) : [[k, v]]))
    .map((kv) => kv.join("="))
    .join("&");
  const response = await fetch(
    `${baseUrl}${path}${query.length > 0 ? "?" : ""}${query}`,
    {
      method: "GET",
      headers: Object.fromEntries(
        entries({
          Authorization:
            params.apiKey === undefined ? undefined : `Bearer ${params.apiKey}`,
        })
      ),
    }
  );
  if (Math.floor(response.status / 100) !== 2) {
    const result = await response.json();
    throw new Error(`Upload API Error: ${JSON.stringify(result)}`);
  }
  return await response.blob();
}

export default class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      affiliation: "",
      username: "",
      password: "",
      checkPassword: "",
      firstname: "",
      middlename: "",
      lastname: "",
      address: "",
      aptNo: "",
      city: "",
      zipcode: "",
      homePhone: "",
      mobilePhone: "",
      email: "",
      emergencyContact: "",
      emergencyRelationship: "",
      emergencyCity: "",
      emergencyPhone: "",
      medicalInfo: "",
      date: new Date(),
      show: false,
    };
  }

  onAffiliationChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      affiliation: e.target.value,
    });
  };

  onUsernameChange = (e) => {
    // alert('Username Successful')
    this.setState({
      username: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    // alert("Password Successful");
    this.setState({
      password: e.target.value,
    });
  };

  onCheckPasswordChange = (e) => {
    // alert("Password Successful");
    this.setState({
      checkPassword: e.target.value,
    });
  };

  onFirstNameChange = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };

  onMiddleNameChange = (e) => {
    this.setState({
      middlename: e.target.value,
    });
  };

  onLastNameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  onAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  onAptNoChange = (e) => {
    this.setState({
      aptNo: e.target.value,
    });
  };

  onCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  onStateChange = (e) => {
    this.setState({
      state: e.target.value,
    });
  };

  onZipCodeChange = (e) => {
    this.setState({
      zipCode: e.target.value,
    });
  };

  onHomePhoneChange = (e) => {
    this.setState({
      homePhone: e.target.value,
    });
  };

  onMobilePhoneChange = (e) => {
    this.setState({
      mobilePhone: e.target.value,
    });
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onEmergencyContactChange = (e) => {
    this.setState({
      emergencyContact: e.target.value,
    });
  };

  onEmergencyRelationshipChange = (e) => {
    this.setState({
      emergencyRelationship: e.target.value,
    });
  };

  onEmergencyCityChange = (e) => {
    this.setState({
      emergencyCity: e.target.value,
    });
  };

  onEmergencyStateChange = (e) => {
    this.setState({
      emergencyCity: e.target.value,
    });
  };

  onEmergencyPHoneChange = (e) => {
    this.setState({
      emergencyPhone: e.target.value,
    });
  };

  onEmergencyMedicalChange = (e) => {
    this.setState({
      emergencyPhone: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password,
      affiliation: this.state.affiliation,
      firstname: this.state.firstname,
      middlename: this.state.middlename,
      lastname: this.state.lastname,
      address: this.state.address,
      aptNo: this.state.aptNo,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,

      homePhone: this.state.homePhone,
      mobilePhone: this.state.mobilePhone,
      email: this.state.email,
      emergencyContact: this.state.emergencyContact,
      emergencyRelationship: this.state.emergencyRelationship,
      emergencyCity: this.state.emergencyCity,
      emergencyState: this.state.emergencyState,
      emergencyPhone: this.state.emergencyPhone,
      medicalInfo: this.state.medicalInfo,
      date: this.state.date,
    };
    console.log(newUser);

    axios
      .post(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/users/add",
        newUser
      )
      .then((res) => console.log(res.data)) // get the result
      .catch((error) => {
        console.log(error);
      });

    // ######### CLEAR FORM AFTER SUBMISSION  #############  //

    this.setState({
      affiliation: "",
      username: "",
      password: "",
      firstname: "",
      middlename: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      homePhone: "",
      mobilePhone: "",
      email: "",
      emergencyContact: "",
      emergencyRelationship: "",
      emergencyCity: "",
      emergencyState: "",
      emergencyPHone: "",
      medicalInfo: "",
    });

    // window.location = "/";
  };

  // downloadFile({
  //   accountId: "FW25bG7",
  //   filePath: "/uploads/image.jpg",
  // // - Optional -
  // // apiKey: "public_FW25bG73UKEmqZUJ5a5gbJ2VZbyt",
  // // querystring: {
  // //  auth: false,
  // //  cache: true,
  // //  cache_ttl: 31536000,
  // //  download: true,
  // //  version: "1"
  // //}
  // }).then(
  //   blob => {
  //     const objectUrl = window.URL.createObjectURL(blob);
  //     window.location.assign(objectUrl);
  //   },
  //   error => console.error(error)
  // )

  render() {
    return (
      <div className="container-fluid mt-1 mb-3 shadow" style={{}}>
        <Button
          variant="primary"
          onClick={() => {
            downloadFile({
              accountId: "FW25bG7",
              filePath: "/uploads/2023/05/07/BG_07-2d5Y.jpg",
              // // - Optional -
              // // apiKey: "public_FW25bG73UKEmqZUJ5a5gbJ2VZbyt",
              // // querystring: {
              // //  auth: false,
              // //  cache: true,
              // //  cache_ttl: 31536000,
              // //  download: true,
              // //  version: "1"
              // //}
            }).then(
              (blob) => {
                const objectUrl = window.URL.createObjectURL(blob);
                window.location.assign(objectUrl);
              },
              (error) => console.error(error)
            );
          }}
        >
          Test UploadIO
        </Button>
        <div className="container-fluid mt-4">
          <div className="container m-2">
            <p style={{}}>
              “Welcome to our cable installation company! We’re excited to have
              you as our customer and we’re committed to providing you with the
              best service possible. Our team of experts is here to help you
              with all your cable installation needs. Thank you for choosing
              us!”
            </p>
          </div>

          {/* #################### NEW USERNAME AND PASSWORD FORM ####### */}

          <div className="">
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}

            {/* ################ THIS IS THE FORM  ####################### */}
            <Form onSubmit={this.onSubmit}>
              <div className="container mt-2 p-3  border border-primary">
                <div className="row">
                  {/* ########## WELCOME PHOTOT ############## */}
                  <div className="col-6 p-2 align-middle">
                    <img
                      src={welcome}
                      alt="Techrhon Welcome"
                      className="shadow rounded"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col ">
                    <div className="p-1 mt-2">
                      <h4>Let's Get Started</h4>
                    </div>
                    <div className=" mt-2 mb-4 p-2">
                      <b>
                        Please enter your desired username and password below to
                        create your account and begin a new journey with us.”...
                        "
                      </b>
                    </div>
                    <Container fluid>
                      <Row>
                        <Col>
                          <Container>
                            <Row className="mb-1 d-flex mb-3">
                              <Col>
                                <label>Username:</label>
                              </Col>
                              <Col>
                                <input
                                  type="text"
                                  name="username"
                                  className="w-100"
                                  onChange={this.onUsernameChange}
                                  autoComplete="username"
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1 d-flex mb-3">
                              <Col>Password:</Col>
                              <Col>
                                <input
                                  type="password"
                                  name="pass1"
                                  className="w-100"
                                  onChange={this.onPasswordChange}
                                  autoComplete="current-password"
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1 d-flex mb-3">
                              <Col>Retype Password:</Col>
                              <Col>
                                <input
                                  type="password"
                                  name="pass2"
                                  className="w-100"
                                  onChange={this.onCheckPasswordChange}
                                  autoComplete="current-password"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <div className="row border  mb-3 mt-3 pb-3 pt-3">
                                <div className="col-7">
                                  <Form.Label>
                                    What is your affiliation to TechRhon?
                                  </Form.Label>
                                </div>
                                <div className="col">
                                  {["Contractor", "Inhouse"].map((value) => (
                                    <div
                                      key={`radio-${value}`}
                                      className="mb-3"
                                    >
                                      <Form.Check
                                        type="radio"
                                        id={`radio-${value}`}
                                        label={` ${value}`}
                                        name="group1"
                                        value={` ${value}`}
                                        onChange={(val) =>
                                          this.onAffiliationChange(val)
                                        }
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div
                    className="border border-primary container  mt-1 p-1 shadow modal-content "
                    style={{ backgroundColor: "#ffffff", height: "100%" }}
                  >
                    {/* <div
                    className="  d-flex align-items-end p-3"
                    style={{ height: "100px" }}
                  >
                    <h5>
                      Please Complete the Registration Form, and proceed to the
                      next step.
                    </h5>
                  </div> */}

                    <div
                      className="border border-primary container mt-1 p-1"
                      style={{ height: "100%" }}
                    >
                      <div className="row " style={{ padding: "0px" }}>
                        <div className="col-12 col-lg-4  ">
                          <Form.Group className="mb-3">
                            {/* ############### FIRST NAME #####m-5############ */}
                            <Form.Label>First Name</Form.Label>

                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onFirstNameChange}
                            />
                            {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text> */}
                          </Form.Group>
                        </div>
                        {/* ############### MIDDLE NAME ################# */}
                        <div className="col-12 col-lg-4">
                          <Form.Group>
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onMiddleNameChange}
                            />
                            {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text> */}
                          </Form.Group>
                        </div>
                        {/* ############### LAST NAME ################# */}
                        <div className="col-12 col-lg-4">
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onLastNameChange}
                            />
                            {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text> */}
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        {/* ############### HOME ADDRESS ################# */}
                        <div className="col-6">
                          <Form.Group className="mb-3">
                            <Form.Label>Home Address</Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onAddressChange}
                            />
                          </Form.Group>
                        </div>
                        {/* ############### APT NUMBER ################# */}
                        <div className="col-2">
                          <Form.Group className="mb-3">
                            <Form.Label>Apt</Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onAptNoChange}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        {/* ############### CITY ################# */}
                        <div className="col-6">
                          <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onCityChange}
                            />
                          </Form.Group>
                        </div>
                        {/* ############### STATE ################# */}
                        <div className="col-1">
                          <label className="form-label" htmlFor="formControlLg">
                            State
                          </label>
                          <select
                            className="form-control border border-3"
                            style={{}}
                            id="state"
                            name="state"
                            onChange={this.onStateChange}
                          >
                            <option value=""></option>
                            <option value="AK">AK</option>
                            <option value="AL">AL</option>
                            <option value="AR">AR</option>
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VA">VA</option>
                            <option value="VT">VT</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                          </select>
                        </div>
                        {/* ############### ZIP CODE ################# */}
                        <div className="col-2">
                          <Form.Group className="mb-3">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onZipCodeChange}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        {/* ############### HOME PHONE ################# */}
                        <div className="col-4">
                          <Form.Group className="mb-3">
                            <Form.Label>Home Phone #</Form.Label>
                            <Form.Control
                              type="tel"
                              className=" border border-3"
                              id="phone"
                              name="homePhone"
                              placeholder="123-456-7890"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              onChange={this.onHomePhoneChange}
                            />
                          </Form.Group>
                        </div>
                        {/* ############### MOBILE PHONE ################# */}
                        <div className="col-4">
                          <Form.Group className="mb-3">
                            <Form.Label>Mobile Phone #</Form.Label>
                            <Form.Control
                              type="tel"
                              className=" border border-3"
                              id="mobilePhone"
                              name="phone"
                              placeholder="123-456-7890"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              onChange={this.onMobilePhoneChange}
                            />
                          </Form.Group>
                        </div>
                        {/* ############### EMAIL ################# */}
                        <div className="col-4">
                          <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onEmailChange}
                            />
                          </Form.Group>
                        </div>
                      </div>

                      {/* ############### EMEGERGENCY INFO ################# */}
                      {/* ################################################## */}

                      <div className="row mt-3">
                        <div className="col-12 ">
                          <p>
                            <b>Emergency Contact</b>
                          </p>
                          <hr />
                        </div>
                      </div>
                      <div className="row">
                        {/* ############### EMEGERGENCY CONTACT NAME  ################# */}
                        <div className="col-7">
                          <Form.Group className="mb-3">
                            <Form.Label>
                              Emergency Contact (Full Name)
                            </Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onEmergencyContactChange}
                            />
                          </Form.Group>
                        </div>
                        <div className="col-5">
                          <Form.Group className="mb-3">
                            <Form.Label>Relationship</Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onEmergencyRelationshipChange}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="input"
                              placeholder=""
                              className=" border border-3"
                              onChange={this.onEmergencyCityChange}
                            />
                          </Form.Group>
                        </div>
                        <div className="col-1">
                          <Form.Group className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="formControlLg"
                            >
                              State
                            </label>
                            <select
                              className="form-control border border-3"
                              style={{}}
                              id="emergency_state"
                              name="state"
                              onChange={this.onEmergencyStateChange}
                            >
                              <option value=""></option>
                              <option value="AK">AK</option>
                              <option value="AL">AL</option>
                              <option value="AR">AR</option>
                              <option value="AZ">AZ</option>
                              <option value="CA">CA</option>
                              <option value="CO">CO</option>
                              <option value="CT">CT</option>
                              <option value="DC">DC</option>
                              <option value="DE">DE</option>
                              <option value="FL">FL</option>
                              <option value="GA">GA</option>
                              <option value="HI">HI</option>
                              <option value="IA">IA</option>
                              <option value="ID">ID</option>
                              <option value="IL">IL</option>
                              <option value="IN">IN</option>
                              <option value="KS">KS</option>
                              <option value="KY">KY</option>
                              <option value="LA">LA</option>
                              <option value="MA">MA</option>
                              <option value="MD">MD</option>
                              <option value="ME">ME</option>
                              <option value="MI">MI</option>
                              <option value="MN">MN</option>
                              <option value="MO">MO</option>
                              <option value="MS">MS</option>
                              <option value="MT">MT</option>
                              <option value="NC">NC</option>
                              <option value="ND">ND</option>
                              <option value="NE">NE</option>
                              <option value="NH">NH</option>
                              <option value="NJ">NJ</option>
                              <option value="NM">NM</option>
                              <option value="NV">NV</option>
                              <option value="NY">NY</option>
                              <option value="OH">OH</option>
                              <option value="OK">OK</option>
                              <option value="OR">OR</option>
                              <option value="PA">PA</option>
                              <option value="RI">RI</option>
                              <option value="SC">SC</option>
                              <option value="SD">SD</option>
                              <option value="TN">TN</option>
                              <option value="TX">TX</option>
                              <option value="UT">UT</option>
                              <option value="VA">VA</option>
                              <option value="VT">VT</option>
                              <option value="WA">WA</option>
                              <option value="WI">WI</option>
                              <option value="WV">WV</option>
                              <option value="WY">WY</option>
                            </select>
                          </Form.Group>
                        </div>
                        <div className="col-5">
                          <Form.Group className="mb-3">
                            <Form.Label>Emergency Phone</Form.Label>
                            <Form.Control
                              type="tel"
                              className=" border border-3"
                              placeholder="123-456-7890"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              onChange={this.onEmergencyStateChange}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12 ">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              Please list any medical condtitions
                            </Form.Label>

                            <Form.Control
                              as="textarea"
                              aria-label="With textarea"
                              style={{ height: "150px" }}
                              className=" border border-3"
                              onChange={this.onEmergencyMedicalChange}
                            />
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>

          {/* ====== ACCORDIAN STARTS HERE */}

          <Table striped className="mt-5">
            {/* <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead> */}
            <tbody>
              <tr>
                <td className="align-middle" style={{ width: "30px" }}>
                  <span className="material-symbols-outlined fs-1"></span>
                </td>
                <td className="align-middle">
                  <h5>Create Password</h5>
                </td>
                <td></td>
                <td className="p-1" style={{ textAlign: "right" }}>
                  <RegisterForm />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-outlined fs-1 align-middle">
                    contact_page
                  </span>
                </td>
                <td className="align-middle">
                  <h5>Registration Form</h5>
                </td>
                <td></td>
                <td
                  className="col-1 ml-auto p-1"
                  style={{ textAlign: "right" }}
                >
                  <RegisterForm />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-outlined fs-1">
                    text_snippet
                  </span>
                </td>
                <td className="align-middle">
                  <h5>W-2 Form</h5>
                </td>
                <td></td>
                <td className="p-1" style={{ textAlign: "right" }}>
                  <W2Form />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-outlined fs-1">
                    recent_actors
                  </span>
                </td>
                <td className="align-middle">
                  <h5>Upload Drivers License</h5>
                </td>
                <td></td>
                <td className="p-1" style={{ textAlign: "right" }}>
                  <W2Form />
                </td>
              </tr>
            </tbody>
          </Table>
          {/* 
        <span className="material-symbols-outlined fs-1">arrow_outward</span>
        <span className="material-symbols-outlined fs-1">vpn_key_alert</span>
        <span className="material-symbols-outlined fs-1">sync_lock</span> */}
        </div>
      </div>
    );
  }
}
