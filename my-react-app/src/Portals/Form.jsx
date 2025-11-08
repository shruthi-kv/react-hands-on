import React, { useState } from "react";
import Modal from "./Modal";
import MyModal from './MyModal';

const Form = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <p>This is form</p>
      <button
        onClick={() => {
          setIsShowModal(true);
        }}
      >
        Open Modal
      </button>
      {isShowModal && <MyModal setIsShowModal={setIsShowModal} />}
    </>
  );
};

export default Form;
