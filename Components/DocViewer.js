import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import { Link } from "react-router-dom";

export default function DocViewer(props) {
  // const location = useLocation();
  // const { fileUrl } = location.state;
  const backToDashboard = { showDash: "dashboard" };

  const [fileUrl, setfileUrl] = useState(props.fileUrl);

  const handleClose = () => setShow(false);

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [zoom, setZoom] = useState(1.0);

  const url = fileUrl;
  const filename = url.split("/").pop();

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };
  //console.log(JSON.stringify(props));

  // if (props) {
  //   setfileUrl(props.fileUrl);
  //   console.log("set");
  // }

  const zoomIn = () => {
    if (zoom < 20) {
      setZoom(zoom + 0.5);
    }
  };

  const zoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 0.5);
    }
  };

  const resetZoom = () => {
    setZoom(1.0);
  };

  return (
    <div
      className="border bg-light m-0"
      style={{ height: "", position: "relative", overflow: "auto" }}
    >
      {/* {props.fileUrl} */}
      <>
        {values.map((v, idx) => (
          <div>
            <Link onClick={() => handleShow(v)}>{props.fileUrl}</Link>
            {/* <Button
              key={idx}
              className="me-2 mb-2"
              onClick={() => handleShow(v)}
            >
              Full screen
              {typeof v === "string" && `below ${v.split("-")[0]}`}
            </Button> */}
          </div>
        ))}
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Document Viewer <b style={{ color: "darkgray" }}>| {filename}</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              zIndex: "0",
            }}
          >
            <b>
              <Button
                variant="outline-primary"
                onClick={zoomIn}
                className="mr-2 border-2"
              >
                +
              </Button>
              <Button
                variant="outline-primary"
                onClick={zoomOut}
                className="mr-2 border-2"
              >
                -
              </Button>
              <Button
                variant="outline-primary"
                onClick={resetZoom}
                className="mr-2 border-2"
              >
                Reset
              </Button>
            </b>

            {/* <div className="fixed-top bg-light">
              <h1>DocViewer</h1>
              <Link to="/dashboard" state={{ user: "robo" }}>
                Back
              </Link>
            </div> */}
            <div
              className=" w-100 mt-5 "
              id=""
              style={{
                height: "100%",
                position: "absolute",
                backgroundColor: "lightGray",
              }}
            >
              <div
                className="border border-dark p-1 "
                style={{
                  position: "relative",
                  overflow: "auto",
                  width: "98%",
                  height: "100%",
                  backgroundColor: "gray",
                }}
              >
                <iframe
                  src={props.fileUrl}
                  className=""
                  style={{
                    transform: "scale(" + zoom + ")",
                    transformOrigin: "0 0",
                  }}
                  position="absolute"
                  title="Embedded "
                  width="100%"
                  id=""
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div
              className="border fixed-bottom bg-light"
              style={{ height: "70px" }}
            >
              Bottom
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
