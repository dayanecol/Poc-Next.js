import React, { ReactNode } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../styles/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isLoading?: boolean;
}

const Modal = ({ isOpen, onClose, children, isLoading }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const LoaderComponent = Loader as any;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        {isLoading ? (
          <LoaderComponent
            type="ThreeDots"
            color="#85BAA1"
            height={80}
            width={80}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Modal;
