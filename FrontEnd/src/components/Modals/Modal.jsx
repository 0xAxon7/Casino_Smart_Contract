import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { StyleModal } from "./styles";

const Modal = ({ children, isOpen = false, onClose, ...props }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={onClose ? onClose : () => {}}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0"
            style={{ backgroundColor: "rgb(0 0 0 / 0.4)" }}
            aria-hidden="true"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* Full-screen container to center the panel */}
          <StyleModal
            className="fixed inset-0 flex w-screen items-center justify-center p-4 overflow-hidden"
            maxWidth={`${props.maxWidth}px`}
            maxHeight={props.maxHeight}
          >
            {/* The actual dialog panel  */}
            <Dialog.Panel className="overflow-modal w-full max-w-sm rounded modal-panel max-h-screen overflow-y-auto">
              {children}
            </Dialog.Panel>
          </StyleModal>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
