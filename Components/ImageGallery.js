import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import the styles

const ImageGallery = (props) => {
  //console.log(JSON.stringify(props.fileUrl));
  //   const images = [
  //     "https://upcdn.io/FW25bG7/image/uploads/2023/12/05/Techrhon Invoice Crew TN BL-3h5L.pdf",
  //     "https://upcdn.io/FW25bG7/image/uploads/2023/12/05/Electrical Service Invoice 2-3yPc.pdf",
  //     // "https://example.com/image3.jpg",
  //     // Add more image URLs as needed
  //   ];

  let images = [];
  let fileUrl = props.fileUrl;
  // format the fileUrl to remove Url parameters
  if (fileUrl) {
    // check for corp parameters and remove
    fileUrl = fileUrl.split(".crop").shift();
    // check for url parameters and remove
    fileUrl = fileUrl.split("?").shift();
    //alert(fileUrl)
  }
  // Add formatted Url to image array for use
  images.push(fileUrl);

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const customToolbar = [
    <button
      key="prev"
      onClick={() =>
        setPhotoIndex((photoIndex + images.length - 1) % images.length)
      }
    >
      Approve
    </button>,
    // <span key="counter">
    //   {photoIndex + 1} of {images.length}
    // </span>,
    <button
      key="next"
      onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}
    >
      Reject
    </button>,
    <button key="close" onClick={closeLightbox}>
      Close
    </button>,
  ];

  return (
    <div style={{ position: "relative" }}>
      {images.map((imageUrl, index) => (
        // {let formattedImageUrl = imageUrl.split("/").pop()}
        //
        <>
          {/* <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width="200px"
            onClick={() => openLightbox(index)}
            style={{ cursor: "pointer", margin: "5px" }}
          /> */}

          <a
            href
            onClick={() => openLightbox(index)}
            style={{ cursor: "pointer", margin: "5px" }}
          >
            {imageUrl
              ? imageUrl.split("/").pop().split("?").shift()
              : "Found Nothing"}
            {/* {imageUrl.split("/").pop()} */}
          </a>
        </>
      ))}

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          //   nextSrc={images[(photoIndex + 1) % images.length]}
          //   prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          //   onMovePrevRequest={() =>
          //     setPhotoIndex((photoIndex + images.length - 1) % images.length)
          //   }
          //   onMoveNextRequest={() =>
          //     setPhotoIndex((photoIndex + 1) % images.length)
          //   }
          toolbarButtons={customToolbar}
        />
      )}
    </div>
  );
};

export default ImageGallery;
