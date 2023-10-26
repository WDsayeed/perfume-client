
import moment from "moment/moment";
import { useForm } from "react-hook-form";
import { HiOutlineXMark } from "react-icons/hi2";

const ProceedCheckout = ({ totalPrice }) => {
  console.log(totalPrice)
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
     
    data.purchaseDate = new Date();
    data.month = moment().format('MMMM')

    data.price = parseFloat(data.price)

    fetch("https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        window.location.replace(data.url)
      console.log(data)
      })
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-white p-2  rounded-full drop-shadow-md hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white">
                <HiOutlineXMark className="w-6 h-6"></HiOutlineXMark>
              </button>
            </form>
          </div>
          {/* <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address:</span>
                </label>
                <input
                  type="text"
                  placeholder="Your address"
                  {...register("address", { required: true })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone:</span>
                </label>
                <input
                  type="number"
                  placeholder="Phone number"
                  {...register("phone", { required: true })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Currency:</span>
                </label>
                <select
                  defaultValue="BDT"
                  {...register("currency", { required: true })}
                  className="select select-bordered"
                >
                  {/* <option disabled>Pick one</option> */}
                  <option>BDT</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Post code:</span>
              </label>
              <input
                type="number"
                placeholder="Your post code"
                {...register("postCode", { required: true })}
                className="input input-bordered w-ful"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price:</span>
              </label>
              <input
                type="number"
                defaultValue={totalPrice}
                readOnly
                {...register("price", { required: true })}
                className="input input-bordered w-ful"
              />
          
            </div>
           </div>
            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="Pay"
                className="hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300  w-20 py-2 text-white uppercase mt-5"
              />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ProceedCheckout;
