import * as React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import s from "./Modal.module.css";
import { Button } from "../Button";

interface IProps {
  className?: string;

  title?: string;

  header?: boolean;
  footer?: boolean;

  children: React.ReactNode;

  onClose: () => void;
}

export const Modal = (props: IProps) => {
  const modalNode = document.getElementById("modal");

  const { className, title, header = true, footer = true, children, onClose } = props;

  React.useEffect(() => {
    const bodyElement = document.getElementById("root");

    if (!bodyElement) {
      return;
    }

    bodyElement.style.overflow = "hidden";

    return () => {
      bodyElement.style.overflow = "";
    };
  }, []);

  if (!modalNode) {
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
              <Button theme="danger" onClick={onClose}>Cancel</Button>
              <Button onClick={onClose}>Create</Button>
            </div>
          </div>
        )}
      </div>
    </div>,
    modalNode
  );
};
