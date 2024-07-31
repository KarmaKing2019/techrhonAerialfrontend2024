import React from "react";
import { useNavigate } from "react-router-dom";

function navigateBackToLogin(WrappedComponent) {
  console.log(WrappedComponent.name); // logs the name of the WrappedComponent
  // This is a functional component

  return function (props) {
    const navigate = useNavigate();

    const handleRedirect = () => {
      //alert("handle called");
      navigate("/dailyreports");
    };

    // Pass the new prop to the WrappedComponent
    return <WrappedComponent {...props} onRedirect={handleRedirect} />;
  };
}

export default navigateBackToLogin;
