import React, { forwardRef, useImperativeHandle } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./styles.module.css";;

const Modal = forwardRef((props, ref) => {

  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    const close = (evt) => {
      if (evt.key === "Escape") {
        {
          setDisplay(false);
        }
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
    };
  });

  const open = () => {
    setDisplay(true);
  };
  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={styles.modal_wrapper}>
        <ModalOverlay close={close} />

        <div className={styles.modal_box}>
          <div className={`${styles.close_order_modal} mt-15 mr-10`}>
            <CloseIcon type="primary" onClick={() => close()} />
          </div>
          {props.children}
        </div>
      </div>,
      document.getElementById("modal_root")
    );
  }
  return null;
});

Modal.propTypes = {
  data: PropTypes.object,
};

export default Modal;