import { FC } from "react";
import styles from "./styles.module.css";


type Props = {
  close: () => void,
}

const ModalOverlay: FC<Props> = ({ close }) => {

  return (
    <div className={styles.modal_overlay} onClick={close}> </div>
  )
}

export default ModalOverlay;