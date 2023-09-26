import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const SingleWishList = ({ wishData,handleDeleteItem }) => {
  const { user } = useContext(AuthContext);
  const { img, name, price, _id, quantity } = wishData;

  const handleAddToCart = () => {
    // window.my_modal_5.showModal();
    const savedData = {
      addCartId: _id,
      name,
      img,
      price,
      quantity,
    };
    if (user) {
      fetch("http://localhost:5000/addToCart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "The product has been successfully added to your cart",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    }
  };

 

  return (
    <div className="relative flex justify-between border-2 my-5 gap-5 p-2  bg-[#A1CCD1] rounded-md w-full">
      <button onClick={()=>handleDeleteItem(_id)} className="btn btn-circle bg-[#61677A] absolute  -right-8 -top-6 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 "
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
      <div className="img-div w-24 h-24">
        <img className="w-full rounded-md" src={img} alt="" />
      </div>
      <div className="title-div px-2 flex flex-col  justify-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p x>
          Lorem ipsum dolor sit ametbr
          <br /> consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col justify-between items-end px-2">
        <p>${price}</p>
        <button
          onClick={handleAddToCart}
          className="btn  btn-outline border-0 border-b-4 "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleWishList;
