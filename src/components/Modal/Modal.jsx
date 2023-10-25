import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Modal = ({ selectedPerfume, isOpen, setIsOpen }) => {
  const { name, img, _id, description, quantity, price } = selectedPerfume;

  function closeModal() {
    setIsOpen(false)
  }


  return (

    <>
   
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          

          <div className="fixed inset-0 overflow-y-auto">
            
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              
                  <div className="mt-2">
                  <div className="flex flex-col justify-center items-center py-5">
           
                     <img className="w-60 h-60" src={img} alt="" />
                    <h4 className="font-medium">{name}</h4>
                      <p className="my-2">{description}</p>
                      <p><span className="font-semibold">Price:</span> ${price}</p>
                     <p><span className="font-semibold">QTY: </span>{quantity}</p>
               
                 </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="btn bg-red-700 text-white"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    // <>
    //   <dialog
    //     id="my_modal_5"
    //     className="modal modal-bottom sm:modal-middle"
    //   >
    //     <form method="dialog" className="modal-box">
    //       <div className="modal-action mt-0">

    //         <button className="btn btn-circle">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="flex flex-col justify-center items-center py-5">
           
    //           <img className="w-60 h-60" src={img} alt="" />
    //           <h4 className="font-medium">{name}</h4>
    //           <p className="my-2">{description}</p>
    //           <p><span className="font-semibold">Price:</span> ${price}</p>
    //           <p><span className="font-semibold">QTY: </span>{quantity}</p>
        
    //       </div>

    //     </form>
    //   </dialog>
    // </>
  );
};

export default Modal;
