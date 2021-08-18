import * as React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import { Button } from "@core/components/Button";

import s from "./Modal.module.css";

interface IProps {
  show: boolean;
  
  className?: string;

  title?: string;

  header?: boolean;
  footer?: boolean;

  children: React.ReactNode;

  onClose: () => void;
  onConfirm: () => void;
}

export const Modal = (props: IProps) => {
  const modalNode = document.getElementById("modal");

  const {
    show = false,
    className,
    title,
    header = true,
    footer = true,
    children,
    onClose,
    onConfirm,
  } = props;

  React.useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")[0];

    if (!bodyElement) {
      return;
    }

    bodyElement.style.overflow = "hidden";

    return () => {
      bodyElement.style.overflow = "";
    };
  }, []);

  const handleConfirm = () => {
    onConfirm();
  }

  if (!modalNode || !show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={s.overlay}>
      <div className={cn(s.modal, className)}>
        {header && (
          <div className={s.header}>
            <h2 className={s.title}>{title}</h2>
          </div>
        )}

        <div className={s.content}>{children}</div>

        {footer && (
          <div className={s.footer}>
            <div className={s.actions}>
              <Button theme="danger" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleConfirm}>Create</Button>
            </div>
          </div>
        )}
      </div>
    </div>,
    modalNode
  );
};
