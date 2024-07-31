import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

// IMAGES
import onboardbillboard from "../images/onboarding.png";

export default class OnboardingNew extends Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      show: false,
      fileUrl: "",
      fileTitle: "",
    };
  }

  modalToggle = () => {
    this.setState({ show: !this.state.show });
  };

  inhouseDirectDeposit = () => {
    // https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDSyITeofBzwYkYXFcUUGP6duJ0UwowCmQiPGrmNR2JKrFY4nGbA9noy6FYiPfFCQQ*
    this.setState({
      fileUrl:
        "https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDSyITeofBzwYkYXFcUUGP6duJ0UwowCmQiPGrmNR2JKrFY4nGbA9noy6FYiPfFCQQ*",
    });

    this.setState({ fileTitle: "Inhouse Direct Deposit (English)" });
    this.setState({ show: true });
  };

  inhouseDirectDepositSpanish = () => {
    // https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDSyITeofBzwYkYXFcUUGP6duJ0UwowCmQiPGrmNR2JKrFY4nGbA9noy6FYiPfFCQQ*
    this.setState({
      fileUrl:
        "https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhD6YIEUY4YSPP74wYKe4AV1MsAck6rq8hhxT0rFlkWd39yn9MYKcyP3-ya76hrcG2g*",
    });

    this.setState({ fileTitle: "Inhouse Direct Deposit (Spanish)" });
    this.setState({ show: true });
  };

  subContractorAgreement = () => {
    // https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDSyITeofBzwYkYXFcUUGP6duJ0UwowCmQiPGrmNR2JKrFY4nGbA9noy6FYiPfFCQQ*
    this.setState({
      fileUrl:
        "https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCCI6Dv6aIo_AzA2HHRrYEuhMkVJJyrxO4HlWmuxlKcqmui3IhxyEE2vgljavVO1VQ*",
    });

    this.setState({ fileTitle: "Subcontractor Agreement Georgia" });
    this.setState({ show: true });
  };

  //

  render() {
    return (
      <div className="  m-1" style={{ overflow: "auto", height: "100vh" }}>
        <Modal
          show={this.state.show}
          fullscreen
          onHide={this.modalToggle}
          dialogClassName="modal-80w "
          aria-labelledby="example-custom-modal-styling-title"
          className=" mt-2"
          style={{ height: "98%" }}
          //   width="98vw"
        >
          <Modal.Header closeButton style={{ width: "98vw" }}>
            <Modal.Title id={this.state.fileTitle}>
              {this.state.fileTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className=" p-0 mr-2"
            style={{ height: "100%", overFlow: "auto" }}
          >
            <iframe
              src={this.state.fileUrl}
              className=""
              style={{
                // transform: "scale(1.0)",
                transformOrigin: "0 0",
              }}
              position="absolute"
              title="Embedded "
              width="100%"
              id=""
              height="70%"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>
        <div className="w-100 bg-light d-flex justify-content-center mb-0 ">
          <div
            className="row border border-dark w-100 justify-content-center pt-3"
            style={{ fontSize: "1.2rem", height: "70px" }}
          >
            <div className=" col-md-3 col-4  mt-2 mb-4 d-flex justify-content-center">
              <Link
                to="/quickhire"
                style={{
                  textDecoration: "none",
                  width: "100%",
                  bottom: "0px",
                }}
              >
                <Button
                  variant="light"
                  className="m-0 border-top border-left border-right border-2"
                  style={{ width: "100%" }}
                >
                  <b>Hiring</b>
                </Button>
              </Link>
            </div>
            <div className="col-md-5 col-4  mt-2 mb-4 d-flex justify-content-center pl-2 pr-2">
              <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
                <Button
                  variant="light"
                  className="w-100 d-flex justify-content-center border-top border-left border-right border-2"
                >
                  <b>Back</b>
                </Button>
              </Link>
            </div>
            <div className="col-md-3 col-4  mt-2 mb-4 d-flex justify-content-center">
              <Link
                to="/dailylogin"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  variant="light"
                  className="w-100 border-top border-left border-right border-2"
                >
                  <b>Dailies</b>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-100 h-100 bg-light d-flex justify-content-center mb-0 ">
          <div className="row w-100 " style={{ backgroundColor: "#565655" }}>
            <div className="col-12 col-md-6 border h-100 p-0">
              <Image
                src={onboardbillboard}
                className="shadow  mt-0 "
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="col-12 col-md-6 p-0 h-100 p-0">
              <div
                className="shadow border border-3 w-100  d-flex justify-content-center align-items-center antonRegular p-0 "
                style={{
                  height: "40%",
                  width: "100%",
                  fontSize: "2.5rem",
                  color: "white",
                }}
              >
                <div
                  className="border border-warning pl-5 pr-5 d-flex justify-content-center align-items-center "
                  style={{
                    boxShadow: "0 0 20px white, 0 0 10px white",
                    height: "50%",
                  }}
                >
                  Welcome.
                </div>
                {/* border: 2px solid white; box-shadow: 0 0 10px white, 0 0 5px
                white; */}
              </div>
              <div
                className="border w-100 bg-light p-3 bebas"
                style={{ fontSize: "1.8rem", color: "Gray" }}
              >
                Required Documents
              </div>
              <div
                className="row    m-0"
                style={{ backgroundColor: "#cccdcd", height: "50%" }}
              >
                <div className="" style={{ positon: "relative" }}>
                  <div
                    className="border-left border-warning border-5 pl-3 border-3 mt-4 pt-2 pb-2"
                    style={{ backgroundColor: "#565655" }}
                  >
                    <Button
                      variant="outline-light"
                      className=" shadow mt-1 mb-1 pl-2 pr-4 pt-0 pb-0 d-flex justifiy-content-start pt-2 pb-2"
                      onClick={this.subContractorAgreement}
                      style={{
                        // color: "lightGray",
                        // borderColor: "lightGray",
                        width: "95%",
                        borderWidth: "1px",
                        fontSize: "1.3rem",
                      }}
                    >
                      Subcontractor Agreement
                    </Button>
                  </div>

                  <div
                    className="border-left border-warning border-5 pl-3 border-3 mt-2 pt-2 pb-2"
                    style={{ backgroundColor: "#565655" }}
                  >
                    <Button
                      variant="outline-light"
                      className=" shadow mt-1 mb-1 pl-2 pr-4 pt-0 pb-0  d-flex justifiy-content-start pt-2 pb-2"
                      onClick={this.inhouseDirectDeposit}
                      style={{
                        // color: "lightGray",
                        // borderColor: "lightGray",
                        width: "95%",
                        borderWidth: "1px",
                        fontSize: "1.3rem",
                      }}
                    >
                      Inhouse Onboard (English)
                    </Button>
                  </div>
                  <div
                    className="border-left border-warning border-5 pl-3 border-3 mt-2 pt-2 pb-2"
                    style={{ backgroundColor: "#565655" }}
                  >
                    <Button
                      variant="outline-light"
                      className=" shadow mt-1 mb-1 pl-2 pr-4 pt-0 pb-0 d-flex justifiy-content-start pt-2 pb-2"
                      onClick={this.inhouseDirectDepositSpanish}
                      style={{
                        // color: "lightGray",
                        // borderColor: "lightGray",
                        width: "95%",
                        borderWidth: "1px",
                        fontSize: "1.3rem",
                      }}
                    >
                      Inhouse Onboard (Spanish)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
