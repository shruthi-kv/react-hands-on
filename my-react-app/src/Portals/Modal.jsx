import React from "react";
import ReactDom from "react-dom";

const Modal = ({ setIsShowModal }) => {
  return ReactDom.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>This is Modal</p>
        <button onClick={() => setIsShowModal(false)}>Close</button>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
