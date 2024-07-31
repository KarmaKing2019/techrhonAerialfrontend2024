// RegistrationForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import CircularJSON from "circular-json"; // Import the library
import { useLocation } from "react-router-dom";

// Import the 'node-fetch' library

// Define the URL of the resource you want to fetch
const url =
  "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/Registered";

const Login3 = () => {
  //alert("Login called");
  const location = useLocation();
  const showDash = location.state;
  useEffect(() => {
    // Perform side effects here
    console.log("####### Component has been rendered ");

    console.log("==================" + JSON.stringify(showDash));
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // NAVIGATION
  const navigate = useNavigate();
  // FIELD DATA
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [allRegisteredUsers, setAllRegisteredUsers] = useState("");
  const [showFail, setShowFail] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showUserDashboard, setUserDashboard] = useState(false);
  const [userFirstLast, setUserFirstLast] = useState("Chucky Jones");
  const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);
  // == formik
  //const { values, setValues } = useFormikContext();

  // #### FIRSTNAME
  const firstnameChange = (event) => {
    const value = event.target.value;
    setfirstname(value);
    console.log(firstname);
    setFormData({ ...formData, firstName: value });
  };

  // #### LASTNAME
  const lastnameChange = (event) => {
    //alert("last name");
    const value = event.target.value;
    setlastname(value);
    console.log(lastname);
    setFormData({ ...formData, lastName: value });
  };

  // #### PHONE
  const phoneChange = (event) => {
    const value = event.target.value;
    setphoneNo(value);
    console.log(phoneNo);
    setFormData({ ...formData, phoneNumber: value });
  };

  // #### EMAIL
  const emailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log(email);
    setFormData({ ...formData, email: value });
  };

  // #### PASSWORD
  const passwordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    console.log(password);
    setFormData({ ...formData, password: value });
  };

  // #### CONFIRM PASSWORD
  const confirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    //console.log(confirmPassword);
    setFormData({ ...formData, confirmPassword: value });
  };

  const handleEmailLoginChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log(value);
    setConfirmEmail(value);
    //setPlaceholder(formData.userID);
    setFormData({ ...formData, userID: value });
  };

  const handlePasswordLoginChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setConfirmPassword(value);
    setFormData({ ...formData, passwordLogin: value });
  };

  const clearEmail = (e) => {
    //alert("clear");
    // setValues({
    //   email: "",
    //   password: "",
    // });
  };

  const showRegistrationForm = (e) => {
    //alert("Show Registration");
    setShowRegistration(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Baby!");

    const form = e.target; // Assuming the form element is the event target
    const formData = new FormData(form);

    const { value } = e.target;
    //console.log("======== " + value);

    let allRegistered = [];

    // Fetch data from the specified URL
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the data (e.g., log it to the console)
    //     //alert(data);
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //     //alert("Error:", error);
    //   });

    axios
      .get(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/Registered"
      )
      .then((response) => {
        console.log("You got a response from Registered.");
        //window.location.href = "/dashboard";
        //alert(JSON.stringify(response.data));
        setAllRegisteredUsers(response.data);
        allRegistered = response.data;
        //alert("passed state setting");

        //console.log(confirmEmail);
        //console.log(confirmPassword);

        // check for email match
        response.data.map((val) => {
          console.log(val);
          let userName = val.firstname + " " + val.lastname;
          //alert("chucky says: " + userName);
          if (val.email === confirmEmail && val.password === confirmPassword) {
            //alert("Success!!");
            //window.location.href = "/dashboard";
            // window.location.href = "/dashboard";
            //return <UserDashboard />;
            //navigate("/dashboard?user=" + userName, { replace: true });
            setShowRegistration(false);
            setUserFirstLast(userName);
            setUserDashboard(true);
            //navigate("/dashboard?user=" + userName); // Navigate to the About page
          } else {
            setShowFail(true);

            const userID = document.querySelector("#userID");
            userID.value = "";
            const loginPassword = document.querySelector("#passwordLogin");
            loginPassword.value = "";
          }
        });

        //setUserDashboard(true)

        setConfirmPassword("");
        // setFormData({ ...formData, emailLogin: "" });
        setConfirmEmail(e.target.value);

        setFormData({
          ...formData,
          passwordLogin: "",
        });
        setFormData({
          ...formData,
          emailLogin: "",
        });
      })
      .catch((error) => {
        //alert(error);
        console.log(error);
      });

    //console.log(JSON.stringify(allRegisteredUsers));

    // ### CHECK ALL REGISTERED USERS AGAINST PROVIDE INFO

    // allRegistered.map((user) => {
    //   console.log(user);
    //   // console.log(user.password);
    // });

    //window.location.href = "http://localhost:3000/";
    //e.preventDefault();
    // Add your logic here (e.g., submit to Firebase).
    e.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // add entry to 'requiredForms' Collection to signify completion
    const firstname = formData.firstName;
    const lastname = formData.lastName;
    const phoneNo = formData.phoneNumber;
    const email = formData.email;
    const password = formData.password;

    const newFileUpload = {
      firstname,
      lastname,
      phoneNo,
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
        console.log("ERROR Sending ... " + error);
      });
    setShowRegistration(false);
    setShowRegisterSuccess(true);

    // Set user name back to blank so user can enter another username

    //CLEAR ALL FIELDS WHEN DONE
    setfirstname();
    setlastname();
    // this.setState({
    //   username: "",

    // });

    //this.props.ScrollToTopOnMount();
    // window.location = "/";
  };

  return (
    <div>
      {/* // LOGIN PANEL */}
      {showUserDashboard ? (
        <div
          className="border border-1 border-gray"
          style={{ backgroundColor: "#F9E79F", width: "99%" }}
        >
          <p>You have admin privileges</p>
          <UserDashboard userID={userFirstLast} />
        </div>
      ) : (
        <div>
          <div className="bg-light">
            <p>You do not have admin privileges</p>
          </div>
          {showRegistration ? (
            // #### SHOW REGISTRATION FORM

            <div className="  border border-5 border-success container  bg-light p-1 rounded  mt-0 justify-content-center">
              <div
                className="container bg-light rounded p-0 border mt-0 border-warning d-flex justify-content-center"
                style={{ height: "100%" }}
              >
                <form
                  style={{
                    width: "90%",
                    border: "2px solid black",
                    padding: "35px",
                    height: "800px",
                    paddingTop: "50px",
                    paddingBottom: "65px",
                  }}
                  onSubmit={onSubmit}
                >
                  <div className="">
                    <h1 className="fw-bold">Techrhon Aerial</h1>
                  </div>
                  <div className="mt-0">
                    <h2 className="fw-bold mb-5" style={{ color: "blue" }}>
                      Registration
                    </h2>
                  </div>
                  <div className="mb-2 " style={{ paddingTop: "100px" }}>
                    <p>Welcome to the Team.</p>
                    <p className="mt-4">
                      To register, simply submit the form below.
                    </p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={firstnameChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={lastnameChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={phoneChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={emailChange}
                      className="form-control"
                    />
                  </div>
                  {/* Repeat similar input fields for last name, phone number, email */}
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={passwordChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={confirmPasswordChange}
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </form>
              </div>
            </div>
          ) : (
            // #### HIDE REGISTRATION FORM

            <div
              className="container bg-light rounded p-2 border mt-0 border-warning d-flex justify-content-center"
              style={{ height: "90%", paddingTop: "50px" }}
            >
              <form
                style={{
                  width: "90%",
                  border: "2px solid black",
                  height: "800px",
                  padding: "35px",
                  paddingTop: "50px",
                  paddingBottom: "65px",
                }}
                onSubmit={handleSubmit}
              >
                <div className="mt-0">
                  <h1 className="fw-bold">Techrhon Aerial</h1>
                </div>
                {showRegisterSuccess ? (
                  <div>
                    <b>
                      <h2 style={{ color: "green" }}>
                        Registration Successful
                      </h2>
                    </b>
                  </div>
                ) : (
                  <></>
                )}

                <div className="mb-2 " style={{ paddingTop: "100px" }}>
                  <p>Welcome</p>
                  <p className="mt-4">
                    To Access Your Dashboard, please login below.
                  </p>
                </div>
                <div className="form-group ">
                  {/* <input
              type="text"
              name="emailLogin"
              placeholder="Email"
              value={formData.emailLogin}
              onChange={handleEmailLoginChange}
              className="form-control"
            /> */}
                </div>
                {/* Repeat similar input fields for last name, phone number, email */}
                <div className="form-group">
                  <input
                    type="email"
                    name="userID"
                    placeholder="Email"
                    id="userID"
                    value={formData.userID}
                    onChange={handleEmailLoginChange}
                    //onClick={clearEmail}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="passwordLogin"
                    type="password"
                    name="passwordLogin"
                    placeholder="Password"
                    value={formData.passwordLogin}
                    onChange={handlePasswordLoginChange}
                    className="form-control"
                  />
                </div>
                <div className="d-flex">
                  <button type="submit" className="btn btn-primary mr-2">
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={showRegistrationForm}
                    className="btn btn-primary pr-2"
                  >
                    Register
                  </button>
                </div>

                {showFail ? (
                  <div className="d-flex justify-content-center mt-3">
                    <p style={{ color: "red" }}>Login Failed. Try Again</p>
                  </div>
                ) : (
                  <></>
                )}
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login3;
