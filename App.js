import logo from "./logo.svg";
import "./App.css";
import "react-dropzone-uploader/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useNavigate,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Invoices from "./Components/Invoices";
import Onboarding from "./Components/OnboardingNew";
import Resources from "./Components/Resources";
import Dashboard from "./Components/UserDashboard";
// import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Login from "./Components/Login3";
import car from "./images/logo.jpg"; // gives image path
import { Button } from "react-bootstrap";
import axios from "axios";
import DocViewer from "./Components/DocViewer";
import QuickHire from "./Components/QuickHire";
import DailyReports from "./Components/DailyReports";
import DailyLogin from "./Components/DailyLogin";
import DocReview from "./Components/DocReview";
import Homepage from "./Components/Home3";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Onboarding2 from "./Components/Onboarding2";
import Subcontractors from "./Components/Subtractors";
import Safety from "./Components/Safety";
// import PrivateRoute from "./Components/PrivateRoute";
import ProtectedPage from "./Components/ProtectedPage";

// DESCOPE.COM LIBRARY IMPORTS
import {
  AuthProvider,
  useDescope,
  useSession,
  useUser,
} from "@descope/react-sdk";
import { Descope } from "@descope/react-sdk";
import { useCallback, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

const AppRoot = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const PrivateRoute = ({
  element: Component,
  isLoggedIn,
  onLogout,
  ...rest
}) => (
  <Route
    {...rest}
    render={
      isLoggedIn ? (
        <Descope isLoggedIn={isLoggedIn}>
          <Component onLogout={onLogout} />
        </Descope>
      ) : (
        <Navigate to="/login" />
      )
    }
  />
);

// ====================================

function App() {
  // const navigate = useNavigate();

  const { isAuthenticated, isSessionLoading } = useSession();
  // The current user
  const { user, isUserLoading } = useUser();
  // Allow user to logout
  const { logout } = useDescope();
  // Retain the response from Descope
  const [descopeResponse, setDescopeResponse] = useState({ hot: "key" });
  //  Hold all users that are returned from Techrhon
  const [allUsersResponse, setAllUsersResponse] = useState([]);
  // Redirect user to Dashboard, once logged in
  const [redirect, setRedirect] = useState(false);
  // Capture User to address by name
  const [userId, setUserId] = useState(false);

  // Is the user logged in?
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Method that allows user to logout
  // const handleLogout = useCallback(() => {
  //   logout();
  //   //window.location.href = "/";
  // }, [logout]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // CHECK WHETHER OR NOT THE USER IS ALREADY REGISTERED WITH TECHRHON
  const isRegistered = (descopeData) => {
    //alert(JSON.stringify(descopeResponse))
    let usersData = [];
    // ======   PULL ALL USERS FROM TECHRHON TO AUTH REGISTRATION
    axios
      .get("http://localhost:5000/users")

      .then((res) => setAllUsersResponse(res.data)) // Capture all users returned from Techrhon DB
      // .then((res) => (usersData = res.data)) // get the result
      .then((res) => console.log(allUsersResponse)) // show result from all users
      .catch((error) => {
        console.log(error);
      });

    // ==== I need to create a variable to hold the email from descope then use it to compare against the email from users.
    // I need a variable to hold the email from descope

    const submittedEmail = descopeResponse.email;
    const submittedName = descopeResponse.name;
    const submittedPhone = descopeResponse.phone;

    const fullName = submittedName.split(" ");
    const firstname = fullName[0];
    const lastname = fullName[fullName.length - 1];

    // Check to see if the user by email already exists in Database
    const isVerified = allUsersResponse.some(
      (item) => item.email === submittedEmail
      // return item;
    );

    // Test to ensure I rcvd email
    console.log(submittedEmail);

    console.log("All users " + JSON.stringify(isVerified));
    console.log("Does user exist?  " + isVerified);

    // If verified by Descope, the either add new Techrhon user or allow access to personal UI Dashboard at Techrhon
    if (isVerified) {
      // ==> Send user to personal dashboard page
    } else {
      const newUser = {
        username: "new User",
        password: "",
        affiliation: "Pending",
        firstname: firstname,
        middlename: "",
        lastname: lastname,
        address: "Pending",
        aptNo: "",
        city: "Pending",
        state: "Pending",
        zipCode: "Pending",
        homePhone: "",
        mobilePhone: submittedPhone,
        email: "Pending",
        emergencyContact: "",
        emergencyRelationship: "",
        emergencyCity: "",
        emergencyState: "",
        emergencyPhone: "",
        medicalInfo: "",
      };

      // alert("calling axios .. ");
      axios
        .post("http://localhost:5000/users/add", newUser)
        .then((res) => console.log("This is it =>" + res.data)) // get the result
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div
      className=" shadow   m-0 pl-0 pr-0  "
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        // position: "relative",
      }}
    >
      {/* ==== BUTTON TO LOGIN :CALLS isRegistered */}
      {/* <Button variant="primary" onClick={() => isRegistered()}>
        Descope Response
      </Button> */}
      <Router>
        {/* ######### BANNER ########## */}
        {/* <div
          className=" shadow "
          style={{ height: "100px", width: "100%", position: "99" }}
        >
          <h1>HOmePage</h1>
        </div> */}

        {/* <br /> */}
        <div
          className="container-xxl   p-0 pt-0 rounded  center mt-0 shadow "
          style={{
            width: "100%",
            height: "100vh",
            zIndex: 99999,
            fontSize: "18px",
            // borderColor: "white",
            borderWidth: "0px",
            padding: "0px",
            paddingTop: "50px",
            backgroundColor: "white",
            // backgroundImage: `url(${"./images/greyBlack.jpg"})`,
            // position: "relative",
            zIndex: "10",
            maxWidth: "100vw",
            overflowY: "hidden",
          }}
        >
          <Routes>
            const navigate = useNavigate()
            {/* <Route path="/" exact element={<Home />} /> */}
            <Route path="/" exact element={<Homepage />} />
            <Route path="/onboarding/:id" element={<Onboarding />} />
            <Route path="/onboarding" element={<Onboarding2 />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/docview" element={<DocViewer />} />
            <Route path="/quickhire" element={<QuickHire />} />
            <Route path="/dailyreports" element={<DailyReports />} />
            <Route path="/dailylogin" element={<DailyLogin />} />
            <Route path="/docreview" element={<DocReview />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/onboarding2" element={<Onboarding2 />} />
            <Route path="/subcontractors" element={<Subcontractors />} />
            <Route path="/safety" element={<Safety />} />
            {/* <Route
              path="/dashboard"
              element={<Dashboard user={userId} onLogout={handleLogout} />}
            /> */}
            {/* <PrivateRoute
              path="/dashboard"
              component={<Dashboard user={userId} onLogout={handleLogout} />}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            /> */}
            <Route path="/dashboard" element={<Dashboard user={userId} />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          {/* <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
