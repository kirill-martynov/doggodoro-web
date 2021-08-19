import * as React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import { Button } from "@core/components/Button";

import s from "./Modal.module.css";

interface IProps {
  show: boolean;

  className?: string;

  title?: string;

  children: React.ReactNode;

  buttons?: {
    confirm?: {
      text?: string;
      on?: boolean;
    };
    cancel?: {
      text?: string;
      on?: boolean;
    };
  };

  onClose: () => void;
  onConfirm: () => void;
}

export const Modal = (props: IProps) => {
  const modalNode = document.getElementById("modal");

  const {
    show = false,
    className,
    title,
    children,
    buttons = {},
    onClose,
    onConfirm,
  } = props;

  const { confirm = {}, cancel = {} } = buttons;
  const { text: confirmText = "Create", on: confirmOn = true } = confirm;
  const { text: cancelText = "Cancel", on: cancelOn = true } = cancel;

  React.useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")[0];

    if (!bodyElement) {
      return;
    }

    if (show) {
      bodyElement.style.overflow = "hidden";
    }

    if (!show) {
      bodyElement.style.overflow = "";
    }
  }, [show]);

  const handleConfirm = () => {
    onConfirm();
  };

  const handleClose = (event) => {
    event.stopPropagation();

    onClose();
  }

  if (!modalNode || !show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={s.overlay} onClick={handleClose}>
      <div className={cn(s.modal, className)}>
        {title && (
          <div className={s.header}>
            <h2 className={s.title}>{title}</h2>
          </div>
        )}

        <div className={s.content}>{children}</div>

        <div className={s.footer}>
          <div className={s.actions}>
            {cancelOn && (
              <Button theme="danger" onClick={onClose}>
                {cancelText}
              </Button>
            )}
            {confirmOn && (
              <Button onClick={handleConfirm}>{confirmText}</Button>
            )}
          </div>
        </div>
      </div>
    </div>,
    modalNode
  );
};
