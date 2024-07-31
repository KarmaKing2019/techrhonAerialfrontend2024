import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import FileDrop from "./FileDrop";

export default function DriversLicenseForm(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log("The checkbox is: " + event.target.checked);
    console.log("The name is: " + props.name);
  };

  const submitDriversConfirm = () => {
    alert("Calling Submit");

    const name = props.name;
    const form = "Drivers License";
    const fileUrl = "www.google.com";

    const newFileUpload = {
      name,
      form,
      fileUrl,
    };
    alert("Sending ... " + JSON.stringify(newFileUpload));
    console.log("fileUrl ... " + JSON.stringify(fileUrl));
    axios
      .post(
        "https://techrhon-aerial-backend-3ffb2d6069e4.herokuapp.com/requiredForms/add",
        newFileUpload
      )
      .then((res) => console.log(res.data)) // get the result
      .catch((error) => {
        console.log("ERROR Sending ... " + error);
      });
    props.confirmDriversComplete();

    //props.checkUserRequiredDocs();
  };

  return (
    <div className="border border-dark">
      {props.btnShowDriversLicenseComplete ? (
        <div className="p-2" style={{ backgroundColor: "#DBF9ED" }}>
          <span className="m-0">Form Completed</span>
        </div>
      ) : (
        <div>
          <div className="border border-dark pl-2">
            <div className="pl-5 border  mb-2 p-3">
              <div className="row">
                <span className="p-4">
                  Please Upload a photo of your drivers license below.
                </span>
                <FileDrop
                  uploadFiles={props.uploadFiles}
                  confirmDriversComplete={() => props.confirmDriversComplete()}
                  submitDriversConfirm={() => submitDriversConfirm()}
                  type="license"
                  //handleRefreshFileUpload={props.handleRefreshFileUpload}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
