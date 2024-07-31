import React, { memo, useState } from "react";
import { Button, Image, Form, FormRange } from "react-bootstrap";
// import NavBar from "./Navbar";

const MyComponent = memo((props) => {
  //console.log("component" + JSON.stringify(props));
  const [scale, setScale] = useState(0.7);
  alert(JSON.stringify(props.fileUrl));

  //alert(fileUrlFormatted)
  // console.log("MyComponent rendered!");
  // console.log(JSON.stringify(props.scale));
  // console.log(JSON.stringify(props));
  let scaleMe = props.scale;
  // console.log("ScaleMe: " + scaleMe);

  const getScale = (scaleVal) => {
    console.log("==== called getScale()" + scale);
    if (scaleVal) {
      let floatVal = parseFloat(this.scaleVal);
      setScale(floatVal);
      console.log(scale);
    }
    console.log("Scale Adjust: " + scaleVal);
    return scaleVal;
  };

  const adjustScale = (e) => {
    console.log("adjustScale Called. : " + e.target.value);
    // props.sendScaleChange(e.target.value);
    props.setScale(e.target.value);
  };

  return (
    <div>
      {/* <p>Scale: {scale}</p> */}
      {props.scale ? (
        <div
          className="shadow p-0 fixed-top justify-content-center align-items-center"
          style={{
            //display: "inline",
            // backgroundColor: "rgba(133, 193, 233, 0.3)",
            width: "100%",
            height: "120%",
            padding: "1px",
            border: "0px solid ",
            // backgroundColor: "white",
            position: "relative",
            //   width: "100%",
            // height: "100%",
            // position: "absolute",
            display: "inline-block",
          }}
          fileUrl
        >
          <div className="" style={{}}>
            <div className="row p-0">
              <div
                className="col-2 col-md-12 p-0"
                // style={{ height: "50px" }}
              >
                {/* <NavBar className="border" /> */}
              </div>
              <div className="col col-md-12 border shadow p-0">
                <div
                  className="shadow-lg  bg-light rounded d-flex justify-content-center align-items-center sticky-top w-100  mb-0 p-0 bg-light-50 align-left"
                  style={{
                    index: "999",

                    display: "inline",

                    // position: "fixed",
                    // top: "10px",
                    // left: "1000px",
                  }}
                >
                  {/* ZOOM IN GLASS  */}
                  {/* <Form.Label>Zoom</Form.Label> */}
                  <Form.Range
                    // value={scale}
                    className="shadow-lg rounded mb-2 p-3 justify-content-center align-items-center"
                    defaultValue={props.scale}
                    onChange={(e) => adjustScale(e)}
                    max={parseFloat("5.3")}
                    step="0.01"
                    style={{
                      // transform: "rotate(270deg)",
                      width: "90%",
                      backgroundColor: "rgba(250, 250, 246, 0.9)",
                      // height: "900px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="border rounded "
            style={{
              position: "relative",
              height: "79vh",
              overflow: "auto",
              backgroundColor: "rgba(255, 255, 255 , 0.5)",
              // display: "inline",
            }}
          >
            <iframe
              src={props.fileUrl}
              className=" h-100 "
              style={{
                width: "100%",
                height: "100%",
                border: "0px solid black",
                msZoom: "0.55",
                MozTransform: "scale(0.45)",
                MozTransformOrigin: "0 0",
                OTransform: "scale(0.25)",
                OTransformOrigin: "0 0",
                WebkitTransform: `scale(${props.scale})`,
                WebkitTransformOrigin: "0 0",
                position: "absolute",
              }}
            />
          </div>
        </div>
      ) : (
        <p>You got nothing </p>
      )}
    </div>
  );
});
export default function ReactPdfViewer(props) {
  console.log("ReactPdf INITIALIZATION: " + JSON.stringify(props));
  const [scale, setScale] = useState(props.scale);
  return (
    <div style={{ backgroundColor: "" }}>
      <MyComponent
        test={props.test}
        scale={scale}
        setScale={setScale}
        sendScaleChange={props.handleScaleChange}
        fileUrl={props.fileUrl.split(".crop").shift()}
      />
    </div>
  );
}
