import ReactDOM from "react-dom";
import { ModalContainer } from "./ModalContainer";

const Modal = () => {
  return (
    <section className="absolute flex flex-col justify-center items-center gap-10 top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10">
      {ReactDOM.createPortal(
        ModalContainer(),
        document.body
      )}
    </section>
  );
};

export default Modal;
