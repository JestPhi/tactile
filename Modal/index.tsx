import { ReactNode } from "react";
import { useFocusTrap } from "../utils/useFocusTrap";
import styles from "./style.module.css";

interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  children: ReactNode;
  height?: string;
}

const Modal = ({
  visible,
  onClose,
  children,
  height = "100dvh",
}: ModalProps) => {
  const modalRef = useFocusTrap<HTMLDivElement>(visible);

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modal} ref={modalRef} data-component="Modal">
      <div className={styles.backdrop} onClick={handleClose} />
      <div className={styles.content} style={{ height }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
