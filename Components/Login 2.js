

// DESCOPE.COM LIBRARY IMPORTS
import {
  AuthProvider,
  useDescope,
  useSession,
  useUser,
} from "@descope/react-sdk";
import { Descope } from "@descope/react-sdk";
import { useCallback, useState, useEffect } from "react";


export default function Login() {
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
  const [loggedIn, setLoggedIn] = useState(false);

  // Method that allows user to logout
  const handleLogout = useCallback(() => {
    logout();
    //window.location.href = "/";
  }, [logout]);

  return (
    <div
      className="container border border-primary border-3 "
      style={{
        backgroundColor: "#E1EEF7",
        backgroundImage: `url(${"./images/blueBG.jpg"})`,
        backgroundSize: "cover",
      }}
    >
      <hr />

      <p>
        <div
          className="p-5 d-flex justify-content-center align-items-center bg-light rounded fade-50"
          style={{}}
        >
          {/* ==== LOGIN CONTAINER TO CENTER LOGIN BOX */}
          <div className="border border-5" style={{  }}>
            <div className="row h-100">
              <div className="col-12">
                {!isAuthenticated && (
                  <Descope
                    flowId="sign-up-or-in"
                    // Grabbing response from Descope.com, and placing in variable to format returned data.
                    onSuccess={(e) => {
                      //alert("DETAIL: " + JSON.stringify(e.detail.user));
                      // setUserId(JSON.stringify("donald"));
                      setDescopeResponse(e.detail.user);
                      window.location.href =
                        `/dashboard?user=` + e.detail.user.name + `&email=` + e.detail.user.email;
                    }}
                    // onSuccess={(e) => console.log(e.detail.user)}
                    // onSuccess={(e) => console.log(e.detail.user)}
                    onError={(e) => console.log("Could not log in!")}
                  />
                )}
              </div>
            </div>

            {/* === CHECKS TO SEE IF SESSION OF USER IS LOADING */}
            {(isSessionLoading || isUserLoading) && <p>Loading...</p>}

            {/* === IF AUTH, THEN SHOW LOGOUT OPTION */}
            {isAuthenticated && (
              <>
                {/* <p>Hello ${user.name}</p> */}
                <div>My Private Component</div>
                {JSON.stringify(descopeResponse)}
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </div>{" "}
      </p>

      <hr />
    </div>
  );
}
