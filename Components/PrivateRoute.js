import React from "react";
import { Route, Redirect } from "react-router-dom";

// A custom component that checks the user's authentication status and role
function PrivateRoute({ component: Component, ...rest }) {
  // You can use your own logic to get the user's authentication status and role
  // For example, you can use a fakeAuth object or a custom hook
  const isAuthenticated = fakeAuth.isAuthenticated;
  const isAdmin = fakeAuth.isAdmin;

  return (
    <Route
      {...rest}
      render={(props) =>
        // If the user is authenticated and has the admin role, render the component
        isAuthenticated && isAdmin ? (
          <Component {...props} />
        ) : (
          // Otherwise, redirect the user to the login page or the home page
          // You can also pass the current location as state to the redirect component
          // So that you can redirect the user back to the original page after login
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
