import React from "react";
import { IoMdClose } from "react-icons/io";
const Modal = ({ promt, isOpen, children, size, closeModal }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-3 z-50 flex items-center justify-center backdrop-blur-md bg-white bg-opacity-5">
      <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden w-full ${size === "sm" ? "max-w-sm" : size === "md" ? "max-w-md" : size === "lg" ? "max-w-lg" : size === "xl" ? "max-w-xl" : size === "2xl" ? "max-w-2xl" : size === "3xl" ? "max-w-3xl" : "max-w-sm"} mx-auto`}>
        {!promt && <div className="absolute w-10 h-10 bg-gray-100 top-3 right-3 rounded-full flex items-center cursor-pointer justify-center" onClick={() => closeModal()}><IoMdClose /></div>} 
        <div className="px-8 py-10">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
