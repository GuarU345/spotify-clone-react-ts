import ReactDOM from "react-dom";
import { useModal } from "../store/useModal";

export function ModalContainer() {
  const { isOpen, modals, select } = useModal()

  const renderModal = () => {
    if (select === null) return null;

    const { id, props } = select;

    const Component = modals[id];

    return <section className="absolute flex flex-col justify-center items-center gap-10 top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10">
      {
        ReactDOM.createPortal(
          <Component {...props} />,
          document.body
        )
      }
    </section>

  };

  return isOpen && renderModal()
}
