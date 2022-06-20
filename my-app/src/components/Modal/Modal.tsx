import React, { CSSProperties, useEffect, useState } from "react";
import { ModalContainer, ModalContent, ButtonCloseModal } from "./styles";

interface IModalProps {
  title?: string;
  isOpened?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ title, isOpened, onClose, children }: IModalProps) => {
  const [visibility, setVisibility] = useState(isOpened ?? true);

  useEffect(() => {
    document.addEventListener("keyup", (e) => e.key === "Escape" && setVisibility(false));
  }, []);

  useEffect(() => {
    !visibility && setTimeout(() => onClose && onClose(), 800);
  }, [visibility]);

  useEffect(() => {
    isOpened !== undefined && setVisibility(isOpened);
  }, [isOpened]);

  return (
    <ModalContainer style={{ display: `${visibility ? "block" : "none"}` }}>
      <ModalContent>
        <header>
          <span>{title}</span>
          <ButtonCloseModal onClick={() => setVisibility(false)}>X</ButtonCloseModal>
        </header>
        <main>{children}</main>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
