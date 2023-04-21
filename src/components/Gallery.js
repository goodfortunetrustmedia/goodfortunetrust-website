import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { BarLoader } from "react-spinners";

function Gallery(props) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {}, []);

  const handleToggleModalImage = (state, index) => {
    setImgIndex(index);
    setShowImageModal(state);
  };

  const handleNextImage = () => {
    if (imgIndex < props.images.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  const handleImageLoaded = (index) => {
    setLoadedImages([...loadedImages, index]);
  };

  const isImageLoaded = (index) => {
    return loadedImages.includes(index);
  };

  return (
    <div className="d-flex flex-row flex-wrap align-self-center align-items-center justify-content-center gap-3">
      {props.images.map((imgUrl, idx) => {
        const isContentfulImage = imgUrl.includes("images.ctfassets");
        const newImgUrl = isContentfulImage ? imgUrl + `?fit=fill&w=${props.width}&h=${props.width}` : imgUrl;
        return <img key={idx} src={newImgUrl} className="img-fluid" placeholder="blurred" layout="constrained" width={props.widths} onClick={() => handleToggleModalImage(true, idx)} alt="" />;
      })}

      <Modal show={showImageModal} onHide={handleToggleModalImage} centered contentClassName="bg-light border-0">
        <Modal.Body className="bg-transparent">
          <div className="d-flex flex-column justify-content-end align-self-center align-items-center">
            <div className="my-2">{!isImageLoaded(imgIndex) && <BarLoader />}</div>
            <img src={props.images[imgIndex]} className="img-fluid" placeholder="blurred" layout="constrained" alt="" onLoad={() => handleImageLoaded(imgIndex)} />
            <div className="d-flex flex-row gap-3 justify-content-evenly align-self-center align-items-center">
              <button className="btn btn-outline-secondary border-0 rounded-0 p-2" style={{ width: "100px" }} onClick={() => handlePrevImage()}>
                {"< Previous"}
              </button>
              <span className="text-muted"> {imgIndex + 1 + " of " + props.images.length} </span>
              <button className="btn btn-outline-secondary border-0 rounded-0 p-2" style={{ width: "100px" }} onClick={() => handleNextImage()}>
                {"Next >"}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Gallery;
