import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./styles.module.css";
import { Navigate } from "react-router-dom";

export const Modal = ({ children, closeModal }) => {

  React.useEffect(() => {
    const close = (evt) => {
      if (evt.key === "Escape") {
        {
          closeModal();
          return (
            <Navigate to="/" replace />
          );
        }
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.modal_wrapper}>
      <ModalOverlay close={closeModal} />
      <div className={styles.modal_box}>
        <div className={`${styles.close_order_modal} mt-15 mr-10`}>
          <CloseIcon type="primary" onClick={closeModal} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal_root")
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;