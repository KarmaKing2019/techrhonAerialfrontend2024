import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Iframe from "react-iframe";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Users from "./Users";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
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
      name: props.name,
      showRegistrationForm: props.showRegistrationForm,
      affiliationOptions: [],
    };
  }

  componentDidMount(props) {
    //console.log(this.props.showRegistrationForm);
    axios
      .get(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/affiliate/"
      )
      .then((response) => {
        this.setState({ affiliationOptions: response.data });
        console.log(response.data);
      })
      .then(() => {
        //console.log(JSON.stringify(this.state.users));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('Update called.')
    //this.props.checkUserRequiredDocs()
    //console.log(this.props.showRegistrationForm);
  }

  onAffiliationChange = (e) => {
    console.log(e.target.value);
    this.setState({
      affiliation: e.target.value,
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

    // add entry to 'requiredForms' Collection to signify completion
    const name = this.state.name;
    const form = "Registration Form";
    const fileUrl = "NA";

    const newFileUpload = {
      name,
      form,
      fileUrl,
    };
    console.log("Sending ... " + JSON.stringify(newFileUpload));
    console.log("fileUrl ... " + JSON.stringify(fileUrl));
    axios
      .post(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/requiredForms/add",
        newFileUpload
      )
      .then((res) => console.log(res.data)) // get the result
      .catch((error) => {
        console.log("ERROR Sending ... " + error);
      });

    // Add an entry to the 'users' collection to store user info

    const newUser = {
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

    // Set user name back to blank so user can enter another username

    this.setState({
      username: "",
      password: "",
      affiliation: "",
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

    this.props.ScrollToTopOnMount();
    // window.location = "/";
  };

  handleAffiliationChange = (prop) => {
    this.setState({ affiliation: prop });
    //alert(this.state.affiliation)
  };

  render() {
    return (
      <>
        {/* {"value: " + this.props.showRegistrationForm} */}
        {this.props.showRegistrationForm ? (
          <div
            className="border border-5 border-dark p-1 m-0"
            style={{ backgroundColor: "#DBF9ED", height: "100%" }}
          >
            <span className="m-0">Form Completed</span>
          </div>
        ) : (
          <h1>
            <div className="d-grid gap-2">
              <div
                className=" border border-primary mt-1 p-1 shadow modal-content "
                style={{ backgroundColor: "#ffffff", height: "100%" }}
              >
                <div
                  className="  d-flex align-items-end p-3 border-bottom border-2"
                  style={{ height: "100px" }}
                >
                  <h3>Techrhon Aerial LLC Registration</h3>
                </div>
                <Form onSubmit={this.onSubmit}>
                  <div
                    className="container mt-4 p-2"
                    style={{ height: "100%" }}
                  >
                    <div className=" border-3 w-100">
                      <h4>What is your affiliation with Techrhon?</h4>
                    </div>

                    <div>
                      <div className="dropdown mb-5">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Affiliation
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          {this.state.affiliationOptions.map((option) => (
                            <a
                              className="dropdown-item"
                              href="#"
                              key={option._id}
                              onClick={() =>
                                this.handleAffiliationChange(option.affiliation)
                              }
                            >
                              {option.affiliation}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* 
                    <div className="row  mb-3 pb-3 pl-4 pt-3">
                      <div className="col-9 ">
                        {["Contractor", "Inhouse"].map((value) => (
                          <div key={`radio-${value}`} className="mb-3">
                            <Form.Check
                              type="radio"
                              id={`radio-${value}`}
                              label={` ${value}`}
                              name="group1"
                              value={` ${value}`}
                              onChange={(val) => this.onAffiliationChange(val)}
                              style={{ fontSize: "19px" }}
                            />
                          </div>
                        ))}
                      </div>
                    </div> */}
                    <div className="row">
                      <div className="col-12 col-lg-4  ">
                        <Form.Group className="mb-3">
                          {/* ############### FIRST NAME ################# */}
                          <h5>First Name</h5>
                          {/* <Form.Label>First Name</Form.Label> */}
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
                          <h5>Middle Name (Optional)</h5>
                          {/* <Form.Label>Middle Name</Form.Label> */}
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
                      <div className="col-12 col-lg-4 pt-2">
                        <Form.Group className="mb-3">
                          <h5>Last Name</h5>
                          {/* <Form.Label>Last Name</Form.Label> */}
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
                    <div className="row p-0 mb-5 mt-5">
                      {/* ############### HOME ADDRESS ################# */}
                      <div
                        className="border border-3 pt-3 pl-3 pb-2  "
                        style={{ height: "100%" }}
                      >
                        <div className="row p-0">
                          <div className="col-12 col-md-6 p-0">
                            <div className=" col-12 col-md-12 p-0">
                              <Form.Group className="mb-3 p-1">
                                <p style={{ fontSize: "1.2rem" }}>
                                  Current Home Address
                                </p>
                                {/* <Form.Label>Home Address</Form.Label> */}
                                <Form.Control
                                  type="input"
                                  placeholder=""
                                  className=" border border-3"
                                  onChange={this.onAddressChange}
                                />
                              </Form.Group>
                            </div>
                          </div>
                          {/* ############### APT NUMBER ################# */}
                          <div className="col-12 col-md-6 p-0 ">
                            <div className="col-12 col-md-4 p-0 pl-3">
                              <Form.Group className="mb-3 p-1">
                                <p style={{ fontSize: "1.2rem" }}>
                                  Apt (Optional)
                                </p>
                                {/* <Form.Label>Apt</Form.Label> */}
                                <Form.Control
                                  type="input"
                                  placeholder=""
                                  className=" border border-3"
                                  onChange={this.onAptNoChange}
                                />
                              </Form.Group>
                            </div>
                          </div>
                        </div>
                        <div className="row  p-0">
                          <div className=" p-0 col-12 col-md-6 ">
                            <div className=" p-0 ">
                              {/* ############### CITY ################# */}
                              <div className=" col-12 col-md-12 p-0 mb-3 p-0">
                                <Form.Group className="mb-3 p-1">
                                  <p style={{ fontSize: "1.2rem" }}>City</p>
                                  {/* <Form.Label>City</Form.Label> */}
                                  <Form.Control
                                    type="input"
                                    placeholder=""
                                    className=" border border-3"
                                    onChange={this.onCityChange}
                                  />
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-12  p-0 pb-1">
                            {/* ############### STATE ################# */}
                            <div className=" col-12 col-md-6 pb-3 p-1">
                              <p
                                className="pb-0"
                                style={{ fontSize: "1.2rem" }}
                              >
                                State
                              </p>
                              {/* <label className="form-label" htmlFor="formControlLg">
                          State
                        </label> */}
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
                          </div>
                          <div className="col-12 col-md-3   p-0">
                            {/* ############### ZIP CODE ################# */}
                            <div className="col-12 col-md-6 p-0">
                              <Form.Group className="mb-3 p-1">
                                <p style={{ fontSize: "1.2rem" }}>Zip Code</p>
                                {/* <Form.Label>Zip Code</Form.Label> */}
                                <Form.Control
                                  type="input"
                                  placeholder=""
                                  className=" "
                                  onChange={this.onZipCodeChange}
                                />
                              </Form.Group>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {/* ############### HOME PHONE ################# */}
                      <div className="col-12 col-md-4">
                        <Form.Group className="mb-3">
                          <h5>Home Phone #</h5>
                          {/* <Form.Label>Home Phone #</Form.Label> */}
                          <Form.Control
                            type="tel"
                            className=" border border-3"
                            id="phone"
                            name="phone"
                            placeholder="123-456-7890"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            onChange={this.onHomePhoneChange}
                          />
                        </Form.Group>
                      </div>
                      {/* ############### MOBILE PHONE ################# */}
                      <div className="col-12 col-md-4">
                        <Form.Group className="mb-3">
                          <h5>Mobile Phone</h5>
                          {/* <Form.Label>Mobile Phone #</Form.Label> */}
                          <Form.Control
                            type="tel"
                            className=" border border-3"
                            id="phone"
                            name="phone"
                            placeholder="123-456-7890"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            onChange={this.onMobilePhoneChange}
                          />
                        </Form.Group>
                      </div>
                      {/* ############### EMAIL ################# */}
                      <div className="col-12 col-md-4">
                        <Form.Group className="mb-3">
                          <h5>Email</h5>
                          {/* <Form.Label>Email</Form.Label> */}
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

                    <div className="row mt-4">
                      <div className="col-12 ">
                        <h4>
                          <b>Emergency Contact</b>

                          <hr />
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      {/* ############### EMEGERGENCY CONTACT NAME  ################# */}
                      <div className="col-12 col-md-12 pt-4">
                        <Form.Group className="mb-3">
                          <h5>Emergency Contact (Full Name)</h5>
                          {/* <Form.Label>Emergency Contact (Full Name)</Form.Label> */}
                          <Form.Control
                            type="input"
                            placeholder=""
                            className=" border border-3"
                            onChange={this.onEmergencyContactChange}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-12 col-md-12">
                        <Form.Group className="mb-3">
                          <h5>Relationship</h5>
                          {/* <Form.Label>Relationship</Form.Label> */}
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
                      <div className="col-6 col-md-6">
                        <Form.Group className="mb-3">
                          <h5>City</h5>
                          {/* <Form.Label>City</Form.Label> */}
                          <Form.Control
                            type="input"
                            placeholder=""
                            className=" border border-3"
                            onChange={this.onEmergencyCityChange}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6 col-md-2">
                        <Form.Group className="mb-3">
                          <h5>State</h5>
                          {/* <label className="form-label" htmlFor="formControlLg">
                            State
                          </label> */}
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
                      <div className="col-12">
                        <Form.Group className="mb-3">
                          <h5>Emergency Phone</h5>
                          {/* <Form.Label>Emergency Phone</Form.Label> */}
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <h5>Notes</h5>
                          {/* <Form.Label>Comments</Form.Label> */}

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
                    <div className="border-top border-bottom border-5 mb-5 bg-light pt-2 pb-4 d-flex justify-content-center">
                      <Button
                        className="btn btn-lg btn-xl"
                        variant="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>

                  {/* 
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                </Form>
              </div>
            </div>
          </h1>
        )}
      </>
    );
  }
}
