import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import FileDrop from "./FileDrop";

export default function PayrollUpload(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log("The checkbox is: " + event.target.checked);
    console.log("The name is: " + props.name);
  };

  const submitPayrollConfirm = () => {
    alert("Payroll confirm called, props: " + JSON.stringify(props));

    const name = props.name;
    const form = "Payroll";
    const fileUrl = "www.google.com";

    const newFileUpload = {
      name,
      form,
      fileUrl,
    };
    alert("Sending ... " + JSON.stringify(newFileUpload));
    alert("fileUrl ... " + JSON.stringify(fileUrl));
    axios
      .post(
        "https://techrhon-aerial-backend-3ffb2d6069e4.herokuapp.com/requiredForms/add",
        newFileUpload
      )
      .then((res) => alert(res.data + " SUCCESS!!")) // get the result
      .catch((error) => {
        console.log("ERROR Sending ... " + error);
      });
    //props.confirmDriversComplete();

    //props.checkUserRequiredDocs();
  };

  return (
    <div className="border border-dark">
      <h1>{props.showPayrollDocFormComplete}</h1>
      {props.showPayrollDocFormComplete ? (
        <div className="p-2" style={{ backgroundColor: "#DBF9ED" }}>
          <span className="m-0">Form Completed</span>
        </div>
      ) : (
        <div>
          <h1>{props.showPayrollDocFormComplete}</h1>
          <div className="border border-dark pl-2">
            <div className="pl-5 border  mb-2 p-3">
              <div className="row">
                <span className="p-4">
                  <b>Please upload a void check or Direct Deposit Form</b>
                </span>
                <FileDrop
                  name={props.name}
                  uploadFiles={props.uploadFiles}
                  confirmPayrollComplete={() => props.confirmPayrollComplete()}
                  submitPayrollConfirm={() => submitPayrollConfirm()}
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
