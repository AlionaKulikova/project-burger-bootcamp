import React, { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";

const OrderDetails = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);
  useImperativeHandle(ref, () => {
    return {
      openOrderDetails: () => open(),
      closeOrderDetails: () => close(),
      close: () => close(),
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
        <div className={styles.modal_backdrop} onClick={close} />
        <div className={styles.modal_box}>{props.children}</div>
      </div>,
      document.getElementById("modal_root")
    );
  }
  return null;
});

export default OrderDetails;