import "./Modal.css";
const Modal = ({ selectedPerfume }) => {
  const { name, img, _id, description, quantity, price } = selectedPerfume;

  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <form method="dialog" className="modal-box">
          <div className="modal-action mt-0">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center py-5">
           
              <img className="w-60 h-60" src={img} alt="" />
              <h4 className="font-medium">{name}</h4>
              <p className="my-2">{description}</p>
              <p><span className="font-semibold">Price:</span> ${price}</p>
              <p><span className="font-semibold">QTY: </span>{quantity}</p>
        
          </div>

        </form>
      </dialog>
    </>
  );
};

export default Modal;
