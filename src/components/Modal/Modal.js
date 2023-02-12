import React, { forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { DELETE_INGREDIENT_DETAL } from "../../services/actions/BurgerIngredient";

const Modal = forwardRef((props, ref) => {
  const dispatch = useDispatch();
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
      closeModal: () => close(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };
  const close = () => {
    dispatch(
      {
        type: DELETE_INGREDIENT_DETAL,
      },
    )
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={styles.modal_wrapper}>
        <ModalOverlay close={close} />
        <div className={styles.modal_box}>{props.children}</div>
      </div>,
      document.getElementById("modal_root")
    );
  }
  return null;
});

Modal.propTypes = {
  props: PropTypes.object,
};

export default Modal;