import { PropsWithChildren } from "react";

const Modal = ({ children }: PropsWithChildren) => {
  return (
    <section className="absolute flex flex-col justify-center items-center gap-10 top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10">
      {children}
    </section>
  );
};

export default Modal;
