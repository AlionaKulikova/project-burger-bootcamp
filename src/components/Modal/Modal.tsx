import React, { FC } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./styles.module.css";


type Props = {
  children: React.ReactElement | React.ReactNode,
  closeModal: () => void,
}


export const Modal: FC<Props> = ({ children, closeModal }) => {

  React.useEffect(() => {
    const close = (evt: { key: string; }) => {
      if (evt.key === "Escape") {
        {
          closeModal();
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
    document.getElementById("modal_root") as Element
  );
};

export default Modal;