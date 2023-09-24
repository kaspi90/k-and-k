import React, { FC, ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  setModalState: (isVisible: boolean) => void;
}

const Modals: FC<ModalProps> = ({
  isVisible,
  onClose,
  children,
  setModalState,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div
        onClick={() => setModalState(false)}
        className="absolute inset-0 bg-black bg-opacity-25 opacity-100 backdrop-blur-2xl"
      ></div>
      <div className="relative p-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg w-96 z-10">
        {children}
        <button
          onClick={() => setModalState(false)}
          className="absolute top-2 right-2 text-xl p-2"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
export default Modals;
