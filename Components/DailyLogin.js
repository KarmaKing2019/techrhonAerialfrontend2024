import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Image from "react-bootstrap/Image";
import NavbarComponent from "./NavbarComponent";
import Modal from "react-bootstrap/Modal";

// ==== IMAGES
import onboardGuy from "../images/whiteHat.png";
import rightArrow from "../images/rightArrow.png";
import dailiesMan from "../images/dailiesMan.png";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

function NavigateLogin(props) {
  //alert("navigation called.");
  const navigate = useNavigate();
  const [allowAccess, setAllowAccess] = useState(props.allowAccess);
  const checkUser = props.checkUser;
  const getAllowAccess = props.getAllowAccess;
  //alert("The value is : " + getAllowAccess());
  //checkUser();

  console.log(getAllowAccess());

  const handleNavigation = (e) => {
    e.preventDefault();
    checkUser();
    //alert("Navigating to Dailys  : " + allowAccess);
    if (getAllowAccess()) {
      alert("Login Successful.");
      navigate("/dailyreports"); // Replace '/dashboard' with your desired route
    } else {
      alert("Login Failed. Try Again");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleNavigation} className="shadow">
        Login
      </Button>
    </div>
  );
}

// == FORCE NAVIGATION BACK TO THE LOGIN PAGE

function navigateBackToLogin(WrappedComponent) {
  return function (props) {
    const navigate = useNavigate();
    return <WrappedComponent {...props} navigate={navigate} />;
  };
}

class DailyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      showRegister: "false",
      allRegisteredUsers: [],
      username: "",
      allowAccess: false,
      width: window.innerWidth,
      navColor: "",
      show: false,
      fileUrl: "",
      fileTitle: "",
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

  handleResizeWindow = () => {
    this.setState({ width: window.innerWidth });
    console.log(this.state.width);
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
    //alert("component remouted");
    window.fullname = "Test 001";
  }

  componentDidUpdate() {
    console.log("Updating ..");
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

  getAllowAccess = () => {
    return this.state.allowAccess;
  };

  setShowRegister = () => {
    // alert("changed");
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
    this.setState({ showRegister: !this.state.showRegister });
  };

  handleFirstname = (e) => {
    //console.log(e.target.value);
    this.setState({ firstname: e.target.value });
  };

  handleLastname = (e) => {
    //console.log(e.target.value);
    this.setState({ lastname: e.target.value });
  };

  handleEmail = (e) => {
    console.log(e.target.value);
    this.setState({ email: e.target.value });
    this.submitLogin();
  };

  handlePassword = (e) => {
    //console.log(e.target.value);
    this.setState({ password: e.target.value });
    this.submitLogin();
  };

  handleUsername = (e) => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
    this.submitLogin();
  };

  submitNewUser = (e) => {
    e.preventDefault();
    this.setShowRegister();

    // === REGISTRATION FORM CHECK
    if (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert(
        "Please complete all fields on the registration form before registering."
      );
    } else {
      // add entry to 'requiredForms' Collection to signify completion
      const firstname = this.state.firstname;
      const lastname = this.state.lastname;
      //const phoneNo = formData.phoneNumber;
      const email = this.state.email;
      const password = this.state.password;

      const newFileUpload = {
        firstname,
        lastname,
        email,
        password,
      };
      console.log("Sending ... " + JSON.stringify(newFileUpload));
      axios
        .post(
          "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/Registered/add",
          newFileUpload
        )
        .then((res) => console.log(res.data)) // get the result
        .catch((error) => {
          alert("ERROR Sending ... " + error);
        });

      alert("attempting to navigate back to login");
      this.props.navigate("/dailylogin");
    }
  };

  submitLogin = () => {
    // GET ALL REGISTERED USERS & CHECK USER
    console.log("============================");

    axios
      .get(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/Registered"
      )
      .then((response) => {
        console.log("You got a response from Registered.");
        //window.location.href = "/dashboard";
        //alert(JSON.stringify(response.data));
        this.setState({ allRegisteredUsers: response.data });
        //setAllRegisteredUsers(response.data);
        //allRegistered = response.data;
        //alert("passed state setting");

        //console.log(confirmEmail);
        //console.log(confirmPassword);

        // check for email match
        response.data.map((val) => {
          console.log(val);
          //console.log("check email: " + this.state.email);
          //console.log("check password: " + this.state.password);

          if (
            val.email === this.state.email &&
            val.password === this.state.password
          ) {
            //alert("Success!!");
            // sthis.props.history.push("/dailyreports");
            let userName = val.firstname + " " + val.lastname;
            //alert(userName);
            //this.setState({ fullname: userName });
            window.fullname = userName;
            //this.setAllowAccess();
            this.setState({ allowAccess: true });
            console.log("=== ACCESS GRANTED ===");
            //console.log("chucky says: " + userName);
            //window.location.href = "/dashboard";
            // window.location.href = "/dashboard";
            //return <UserDashboard />;
            //navigate("/dashboard?user=" + userName, { replace: true });
            // setShowRegistration(false);
            // setUserFirstLast(userName);
            // setUserDashboard(true);
            //navigate("/dashboard?user=" + userName); // Navigate to the About page
          } else {
            //this.setState({ allowAccess: false });
            console.log("=== LOGIN FAILED ===");
            // setShowFail(true);
            // const userID = document.querySelector("#userID");
            // userID.value = "";
            // const loginPassword = document.querySelector("#passwordLogin");
            // loginPassword.value = "";
          }
        });

        //setUserDashboard(true)

        // setConfirmPassword("");
        // // setFormData({ ...formData, emailLogin: "" });
        // setConfirmEmail(e.target.value);

        // setFormData({
        //   ...formData,
        //   passwordLogin: "",
        // });
        // setFormData({
        //   ...formData,
        //   emailLogin: "",
        // });
      })
      .catch((error) => {
        //alert(error);
        console.log(error);
      });
  };

  clearAllStates = () => {
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  setAllowAccess = () => {
    this.setState({ allowAccess: !this.state.allowAccess });
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
      <div className=" " style={{ height: "100%" }}>
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
                className="mt-0 shadow-lg"
                style={{
                  //   backgroundColor: "#d3d3d3",
                  height: "68vh",
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
                  style={{ height: "68vh", position: "relative" }}
                >
                  {/* ==== BILLBOARD MESSAGE === */}
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
                    Dailies
                    <h3 style={{ color: "orange" }}> Documents Center</h3>
                  </div>
                  {/* <div
                  style={{
                    fontSize: "2.8rem",
                    color: "white",
                    top: "40%",
                    left: "10%",
                    position: "absolute",
                    zIndex: "101",
                  }}
                  className="bebas"
                >
                  Onboarding
                  <h3 style={{ color: "orange" }}>
                    Thank you for joining our team
                  </h3>
                </div> */}

                  <Image
                    src={dailiesMan}
                    className="  mt-0 p-0 img shadow"
                    thumbnail
                    style={{
                      //   position: "relative",
                      width: "100%",
                      height: "69vh",
                      zIndex: "100",
                      // position: "absolute",
                    }}
                  />
                </div>
              </div>

              <div className="row  w-100">
                <div className="col-12 border-right border-warning ">
                  {/* ========= TECHRHON AERIAL AND STATEMENT ======== */}
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
                </div>
              </div>
              <div className=" w-100">
                <div style={{ height: "10px" }}></div>
                {this.state.showRegister ? (
                  // ################ LOGIN SECTION ###############
                  <div
                    className=" p-0 d-flex justify-content-center"
                    style={{ height: "30%" }}
                  >
                    {/* ========= USERNAME AND PASSWORD FIELDS  */}
                    <div
                      className="border border-secondary pt-4 pb-4 pl-2 shadow rounded"
                      style={{
                        margin: "10px",
                        borderColor: "lightGray",
                        width: "50%",
                      }}
                    >
                      <div
                        className="  d-flex justify-content-center bebas"
                        style={{ fontSize: "1.5rem", color: "darkGray" }}
                      >
                        <p>Dailies | Login Portal</p>
                      </div>
                      <div className="row ">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="">Email</label>
                        </div>
                        <div className="col-7 col-md-5">
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder=""
                            value={this.state.email}
                            onChange={this.handleEmail}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            Password
                          </label>
                        </div>
                        <div className="col-7 col-md-5">
                          <input
                            type="password"
                            className="form-control"
                            id=""
                            placeholder={this.state.password}
                            onChange={this.handlePassword}
                            required
                          />
                        </div>
                      </div>

                      {/* /// ===== LOGIN BUTTON */}

                      <div className="row mt-4 ">
                        <div className=" col-6 col-md-7 "></div>
                        <div className="col-md-4 col-4   d-flex justify-content-start  pl-3 pb-2">
                          <NavigateLogin
                            checkUser={this.submitLogin}
                            allowAccess={this.state.allowAccess}
                            getAllowAccess={this.getAllowAccess}
                          />
                        </div>
                      </div>

                      {/* ====== USER OPTION PANEL ========= */}
                      <div className="row  w-100 mt-3 justify-content-center">
                        {/* === CREATE ACCOUNT LINK  */}
                        <div className=" col-6 d-flex justify-content-end p-4">
                          <Link
                            to=""
                            onClick={this.setShowRegister}
                            className="login-link"
                          >
                            Create Account
                          </Link>
                        </div>
                        {/* === FORGOT PASSWORD  */}
                        <div
                          className=" col-5 border-left border-2  pl-3 pt-2 ml-2 mt-3 p-4"
                          style={{ paddingLeft: "20px" }}
                        >
                          <Link
                            to=""
                            onClick={this.changeIsSuccessful}
                            className="login-link"
                          >
                            Forgot Password
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // ################ NEW USER SECTION ###############
                  <div
                    className="border border-dark border-3"
                    style={{ height: "30%" }}
                  >
                    {/* ====== NEW USER FORM */}
                    <div
                      className="border  border-2 pt-4 pb-4 shadow"
                      style={{ margin: "10px", borderColor: "lightGray" }}
                    >
                      {/* >>>>>> FIRST NAME >>>> */}
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            First Name
                          </label>
                        </div>
                        <div className="col-7 col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="newFirstName"
                            value={this.state.firstname}
                            onChange={this.handleFirstname}
                          />
                        </div>
                      </div>
                      {/* >>>>>> LAST NAME >>>> */}
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            Last Name
                          </label>
                        </div>
                        <div className="col-7 col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            value={this.state.lastname}
                            onChange={this.handleLastname}
                          />
                        </div>
                      </div>
                      {/* >>>>>> EMAIL >>>> */}
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            Email
                          </label>
                        </div>
                        <div className="col-7 col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            onChange={this.handleEmail}
                          />
                        </div>
                      </div>
                      {/* >>>>>> PASSWORD >>>> */}
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            Password
                          </label>
                        </div>
                        <div className="col-7 col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            onChange={this.handlePassword}
                          />
                        </div>
                      </div>
                      {/* ======== REGISTER AND RETURN TO LOGIN BUTTONS */}
                      <div className="row  mt-4">
                        <div className="col-6 d-flex justify-content-end pt-1 pr-4">
                          <Link
                            to="/dailylogin"
                            onClick={this.submitNewUser}
                            className="login-link"
                          >
                            Register
                          </Link>
                        </div>
                        <div
                          className=" col-6 border-left border-2 justify-content-end pl-3 pt-1 ml-0"
                          style={{ paddingLeft: "20px" }}
                        >
                          <Link
                            to=""
                            onClick={this.setShowRegister}
                            className="login-link"
                          >
                            Return to Login
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className=" w-100 mt-2" style={{ height: "200px" }}></div>
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
                className="mt-0 shadow-lg"
                style={{
                  //   backgroundColor: "#d3d3d3",
                  height: "46vh",
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
                  style={{ height: "60vh", position: "relative" }}
                >
                  {/* ==== BILLBOARD MESSAGE === */}
                  <div
                    style={{
                      fontSize: "2.8rem",
                      color: "white",
                      top: "100px",
                      left: "0%",
                      position: "absolute",
                      // zIndex: "1999",
                      width: "50%",
                    }}
                    className="bebas border-right border-warning border-5 darkTint pl-3 pr-5"
                  >
                    Dailies
                    <h3 style={{ color: "orange" }}> Documents Center</h3>
                  </div>

                  <Image
                    src={dailiesMan}
                    className="  mt-0 p-0 img shadow"
                    thumbnail
                    style={{
                      //   position: "relative",
                      width: "100%",
                      height: "45vh",
                      zIndex: "100",
                      // position: "absolute",
                    }}
                  />
                </div>
              </div>

              <div className="row  w-100">
                <div className="col-12 border-right border-warning ">
                  {/* ========= TECHRHON AERIAL AND STATEMENT ======== */}
                  <div className=" w-100 mt-2 pr-0 d-flex justify-content-center">
                    <h2>
                      <span style={{ color: "lightgray" }}>
                        <b>Techrhon</b>
                      </span>
                      <span style={{ color: "orange" }}>
                        {" "}
                        <b>Mobile</b>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" w-100">
                <div style={{ height: "10px" }}></div>
                {this.state.showRegister ? (
                  // ################ LOGIN SECTION ###############
                  <div
                    className=" p-0 d-flex justify-content-center"
                    style={{ height: "30%" }}
                  >
                    {/* ========= USERNAME AND PASSWORD FIELDS  */}
                    <div
                      className="border border-secondary pt-4 pb-4 pl-2 shadow rounded"
                      style={{
                        margin: "10px",
                        borderColor: "lightGray",
                        width: "100%",
                      }}
                    >
                      <div
                        className="  d-flex justify-content-center bebas"
                        style={{ fontSize: "1.5rem", color: "darkGray" }}
                      >
                        <p>Dailies | Login Portal</p>
                      </div>
                      <div className="row ">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="">Email</label>
                        </div>
                        <div className="col-7 col-md-5">
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder=""
                            value={this.state.email}
                            onChange={this.handleEmail}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            Password
                          </label>
                        </div>
                        <div className="col-7 col-md-5">
                          <input
                            type="password"
                            className="form-control"
                            id=""
                            placeholder={this.state.password}
                            onChange={this.handlePassword}
                            required
                          />
                        </div>
                      </div>

                      {/* /// ===== LOGIN BUTTON */}

                      <div className="row mt-4 ">
                        <div className=" col-6 col-md-7 "></div>
                        <div className="col-md-4 col-4   d-flex justify-content-start  pl-3 pb-2">
                          <NavigateLogin
                            checkUser={this.submitLogin}
                            allowAccess={this.state.allowAccess}
                            getAllowAccess={this.getAllowAccess}
                          />
                        </div>
                      </div>

                      {/* ====== USER OPTION PANEL ========= */}
                      <div className="row  w-100 mt-3 justify-content-center">
                        {/* === CREATE ACCOUNT LINK  */}
                        <div className=" col-6 d-flex justify-content-end p-4">
                          <Link
                            to=""
                            onClick={this.setShowRegister}
                            className="login-link"
                          >
                            Create Account
                          </Link>
                        </div>
                        {/* === FORGOT PASSWORD  */}
                        <div
                          className=" col-5 border-left border-2  pl-3 pt-2 ml-2 mt-3 p-4"
                          style={{ paddingLeft: "20px" }}
                        >
                          <Link
                            to=""
                            onClick={this.changeIsSuccessful}
                            className="login-link"
                          >
                            Forgot Password
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // ################ NEW USER SECTION ###############
                  <div
                    className="border border-dark border-3"
                    style={{ height: "30%" }}
                  >
                    {/* ====== NEW USER FORM */}
                    <div
                      className="border  border-2 pt-4 pb-4 shadow"
                      style={{ margin: "10px", borderColor: "lightGray" }}
                    >
                      {/* >>>>>> FIRST NAME >>>> */}
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            First Name
                          </label>
                        </div>
                        <div className="col-7 col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            name="newFirstName"
                            value={this.state.firstname}
                            onChange={this.handleFirstname}
                          />
                        </div>
                      </div>
                      {/* >>>>>> LAST NAME >>>> */}
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            Last Name
                          </label>
                        </div>
                        <div className="col-7 col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            value={this.state.lastname}
                            onChange={this.handleLastname}
                          />
                        </div>
                      </div>
                      {/* >>>>>> EMAIL >>>> */}
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            Email
                          </label>
                        </div>
                        <div className="col-7 col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            onChange={this.handleEmail}
                          />
                        </div>
                      </div>
                      {/* >>>>>> PASSWORD >>>> */}
                      <div className="row">
                        <div className="col-4 d-flex justify-content-end p-1">
                          <label htmlFor="exampleFormControlInput1">
                            Password
                          </label>
                        </div>
                        <div className="col-7 col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            onChange={this.handlePassword}
                          />
                        </div>
                      </div>
                      {/* ======== REGISTER AND RETURN TO LOGIN BUTTONS */}
                      <div className="row  mt-4">
                        <div className="col-6 d-flex justify-content-end pt-1 pr-4">
                          <Link
                            to="/dailylogin"
                            onClick={this.submitNewUser}
                            className="login-link"
                          >
                            Register
                          </Link>
                        </div>
                        <div
                          className=" col-6 border-left border-2 justify-content-end pl-3 pt-1 ml-0"
                          style={{ paddingLeft: "20px" }}
                        >
                          <Link
                            to=""
                            onClick={this.setShowRegister}
                            className="login-link"
                          >
                            Return to Login
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className=" w-100 mt-2" style={{ height: "200px" }}></div>
            </div>
          )}
        </div>

        {/* ####### LAST SECTION ######## */}

        <div style={{ backgroundColor: "#FFF7D9", height: "100px" }}></div>
      </div>
    );
  }
}
export default navigateBackToLogin(DailyLogin);
