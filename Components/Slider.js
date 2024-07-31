import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function Slider() {
  return (
    <div style={{ position: "relative" }}>
      <div
        className=" d-flex bebasTitle p-1 pt-0 shadow"
        style={{
          position: "absolute",
          zIndex: "9999",
          top: "5%",
          left: "3%",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container p-0 m-0 shadow">
          <div className="row p-0 m-0">
            <p className="" style={{ color: "#51B5F1", height: "30px" }}>
              Techrhon Aerial
            </p>
          </div>
          <div className="row p-0 m-0">
            <p
              className="pl-1 border-5 border-top"
              style={{ color: "#9EA2A4", height: "30px" }}
            >
              Cable Installation
            </p>
          </div>
        </div>
      </div>

      <div
        className=" shadow p-2 rounded"
        style={{
          backgroundColor: "rgba( 255, 255, 255  , 0.6)",
        }}
      >
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item
                className="w-100 p-0 shadow"
                style={{
                  height: "500px",
                  position: "relative",
                  backgroundColor: "white",
                }}
              >
                <div
                  className="container-fluid  p-0 "
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src="./images/homeboard2.jpg"
                    alt="My Image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                  />
                  {/* <video
                    autoPlay
                    muted
                    loop
                    id="myVideo1"
                    className="border  p-0 video"
                    style={{ position: "absolute", width: "100%" }}
                  >
                    <source src="./images/trucks.mp4" type="video/mp4" />
                  </video> */}
                </div>
                {/* <Carousel.Caption className="">
                  <div
                    className="p-3 w-100 shadow"
                    style={{
                      backgroundColor: "rgba( 234, 245, 98  , 0.6)",
                      color: "black",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <h4>Natural Disasters</h4>
                    <p>We are here to help</p>
                  </div>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item
                style={{
                  height: "500px",
                  position: "relative",
                  backgroundColor: "white",
                }}
              >
                {/* <img
                  src="./images/leveler.jpg"
                  alt="My Image"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                /> */}
                <div
                  className="shadow-lg bg-dark p-0 "
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    src="./images/6.jpg"
                    alt="My Image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                  />
                  {/* <video
                    autoPlay
                    muted
                    loop
                    id="myVideo2"
                    className="video"
                    // style={{ position: "absolute", width: "100%" }}
                  >
                    <source
                      src="./images/business.mp4"
                      type="video/mp4"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </video> */}
                </div>
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item
                style={{
                  height: "500px",
                  position: "relative",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="./images/gold.jpeg"
                  alt="My Image"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                />
                {/* <video autoPlay muted loop id="myVideo3" className="video">
                  <source
                    src="./images/business.mp4"
                    type="video/mp4"
                    style={{
                      position: "relative",
                      width: "80%",
                      // height: "100%",
                    }}
                  />
                </video> */}
                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
