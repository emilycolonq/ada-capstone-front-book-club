import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const FormModal = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <button onClick={toggleForm}>{props.header}</button>
      <Modal show={isFormOpen} onHide={toggleForm}>
        <Modal.Header>
          <b>{props.header}</b>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <button onClick={toggleForm}>Cancel</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
