import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Iframe from "react-iframe";
const CircularJSON = require("circular-json");

function W2Form(props) {
  //console.log("W2Form props: " + JSON.stringify(props));

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    //console.log("The checkbox is: " + event.target.checked);
    //console.log("The name is: " + props.name);
  };

  const submitW2Confirm = () => {
    if (isChecked) {
      const name = props.name;
      const form = "W2 Form";
      const fileUrl = "www.google.com";

      const newFileUpload = {
        name,
        form,
        fileUrl,
      };
      //console.log("Sending ... " + JSON.stringify(newFileUpload));
      //console.log("fileUrl ... " + JSON.stringify(fileUrl));
      axios
        .post(
          "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/requiredForms/add",
          newFileUpload
        )
        .then((res) => console.log(res.data)) // get the result
        .catch((error) => {
          console.log("ERROR Sending ... " + error);
        });
      props.confirmW2Complete();
    }

    //props.checkUserRequiredDocs();
  };

  //  const uploadFiles = (props) => {
  //     //alert(JSON.stringify(CircularJSON.stringify(props)));
  //     const name = this.state.name;
  //     const affiliation = this.state.affiliation;
  //     const fileUrl = props;

  //     const newFileUpload = {
  //       name,
  //       affiliation,
  //       fileUrl,
  //     };
  //     // console.log("Sending ... " + JSON.stringify(newFileUpload));
  //     // console.log("fileUrl ... " + JSON.stringify(fileUrl));

  //     axios
  //       .post("http://localhost:5000/files/add", newFileUpload)
  //       .then((res) => console.log(res.data)) // get the result
  //       .catch((error) => {
  //         console.log("ERROR Sending ... " + error);
  //       });
  //   };

  return (
    <div className="border  border-2" style={{ height: "600px" }}>
      {props.btnShowW2Complete ? (
        <div className="p-2" style={{ backgroundColor: "#DBF9ED" }}>
          <span className="m-0">Form Completed</span>
        </div>
      ) : (
        <div className="border  border-2" style={{ height: "100%" }}>
          <div className="pl-5 border  mb-2 p-3">
            {/* Add onMouseEnter Event to scroll W9 form to the top */}
            <div className="row" onMouseEnter={props.scrollToW9}>
              <div className="col-4">
                <Button
                  className="btn btn-warning"
                  disabled={!isChecked}
                  onClick={() => submitW2Confirm()}
                >
                  Confirm
                </Button>
              </div>
              <div className="col-8 border">
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="pl-2">W9 Form Submitted</span>
                </label>
              </div>
            </div>
          </div>
          {/* <Iframe
            url="https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhANGBj47z8gVR5yGnV-uvVTdv1PmjgwzOp-x4R4Y8M0kokercC0vS5-IplmENu7emw*"
            width="100%"
            height="100%"
            id=""
            className=""
            display="block"
            position="absolute"
          /> */}
          <div
            className=" p-0 h-100 w-100 pb-5"
            style={{ position: "relative" }}
          >
            <Iframe
              url="https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhANGBj47z8gVR5yGnV-uvVTdv1PmjgwzOp-x4R4Y8M0kokercC0vS5-IplmENu7emw*"
              width="100%"
              height="90%"
              id=""
              className=""
              //display="block"
              position=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default W2Form;
