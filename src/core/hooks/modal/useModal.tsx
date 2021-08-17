import * as React from "react";

import { Modal as ModalWrapper } from "../../components/Modal";

export const useModal = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const Modal = (props: any) => (
    <React.Fragment>
      {isVisible && (
        <ModalWrapper onClose={hide} {...props}>
          {props.children}
        </ModalWrapper>
      )}
    </React.Fragment>
  );

  return {
    show,
    hide,
    Modal,
  };
};
