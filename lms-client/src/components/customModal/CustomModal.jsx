import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export const CustomModal = ({ title, children, onHide, show }) => {
  return (
    <Modal
      show={show}
      onHide={() => onHide({})}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
