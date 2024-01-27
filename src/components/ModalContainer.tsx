import { useModal } from "../store/useModal";

export function ModalContainer() {
  const { isOpen, modals, select } = useModal()

  const renderModal = () => {
    if (select === null) return null;

    const { id, props } = select;

    const Component = modals[id];

    return <Component {...props} />;
  };

  return isOpen && renderModal()
}
