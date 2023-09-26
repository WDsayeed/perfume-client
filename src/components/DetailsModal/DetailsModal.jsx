

const DetailsModal = (selectedPerfume) => {
        return (
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                        <img src={selectedPerfume.img} alt="" />
                  <h3 className="font-bold text-lg">{selectedPerfume.name}</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
        );
};

export default DetailsModal;