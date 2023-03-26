import { Dialog, Transition } from '@headlessui/react'
import { Fragment, type PropsWithChildren, type ReactNode } from 'react'

const Backdrop = () => (
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-black/75" />
  </Transition.Child>
)

const ModalContainer = ({ children }: { children: ReactNode }) => (
  <div className="fixed inset-0 overflow-y-auto">
    <div className="flex min-h-full items-center justify-center">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {children}
      </Transition.Child>
    </div>
  </div>
)

type ModalProps = {
  isVisible: boolean
  handleClose: () => void
}

const Modal = ({ isVisible, handleClose, children }: PropsWithChildren<ModalProps>) => {
  return (
    <Transition appear show={isVisible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Backdrop />
        <ModalContainer>{children}</ModalContainer>
      </Dialog>
    </Transition>
  )
}

export default Modal
