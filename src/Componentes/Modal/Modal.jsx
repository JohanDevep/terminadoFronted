import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-container w-11/12 md:max-w-md mx-auto rounded  z-50 overflow-y-auto relative">
        <button className="modal-close absolute top-3 right-3 text-2xl text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8" onClick={onClose}>
          &times;
        </button>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
