import { HiX } from "react-icons/hi";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Container from "../Container";
import Swal from "sweetalert2";
import {  Link, useNavigate } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import UseCart from "../../hooks/UseCart";
import { AuthContext } from "../provider/AuthProvider";
import ProceedCheckout from "./ProceedCheckout";

const AddCart = () => {
  const {user}= useContext(AuthContext)
  const navigate = useNavigate() 
  const [addCart] = UseCart()

  const [cartData, setCartData] = useState(addCart);


  // useEffect(() => {
 
  //   fetch(`http://localhost:5000/addToCart/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCartData(data);
      
  //     });
  // }, [user?.email]);

  const handleIncrement = (id) => {
    // Find the item to be updated
  const updatedItem = cartData.find((item) => item._id === id);

  // Update only the quantity for the specific item
  const updateQuantity = updatedItem.quantity < 10 ? updatedItem.quantity + 1 : updatedItem.quantity;
  
    // Calculate new quantity
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity,
            }
          : item
      )
    );
 
    const updateData = { quantity: updateQuantity };
    console.log(updateData)

    fetch(`http://localhost:5000/addToCart/${id}`, {
      method: 'PUT',
      headers: {
      'content-type':'application/json'
      },
      body: JSON.stringify(updateData)
  })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  };

  const handleDecrement = (id) => {
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
          : item
      )
    );
  };

  const totalPrice = cartData.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addToCart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingData = cartData.filter((data) => data._id !== id);
              setCartData(remainingData);
            }
          });
      }
    });
  };

  const handleAllDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addToCart`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setCartData([]);
            }
          });
      }
    });
  };

  const handleContinueShopping = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/'); 
  };

  const handleCheckout = () => {
  
    document.getElementById('my_modal_5').showModal()
  }

  return (
    <>
      <Container>
      <h2 className="text-4xl font-semibold leading-loose">
          Shopping Cart
        </h2>

        <ProceedCheckout totalPrice={totalPrice}></ProceedCheckout>
        <div className="flex justify-between">
        <p className="caption-top block">
          You have{" "}
          <span className="font-bold text-[#116D6E] ring-2 ring-[#116D6E] rounded-full px-1">
            {cartData?.length}
          </span>{" "}
          items in your cart.
        </p>
        <button onClick={handleContinueShopping} className="hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300 text-center  w-1/4 py-2 text-white uppercase">    
          <span className="flex justify-center items-center gap-2"><HiArrowLongLeft></HiArrowLongLeft>  continue shopping</span>
            </button>
        </div>
        <div className="overflow-y-scroll md:h-[550px] border border-slate-200 mt-5 mb-5">
          <table className="table ">
            <thead>
              <tr className="divide-x text-center text-black uppercase divide-slate-200 border-slate-200">
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="">
              {cartData?.map((data, index) => (
                <tr key={data._id} className="text-center border-slate-200">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask  w-28 h-28">
                          <img
                            src={data.img}
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span> ${data.price}</span>
                  </td>
                  <td>
                    <div className="inline-block w-24 border-2 border-gray-300 relative mb-3 max-w-[100px] min-w-[60px] overflow-visible">
                      <button
                        onClick={() => handleDecrement(data._id)}
                        type="button"
                        className="absolute right-0 bottom-0 h-[50%] w-[52%] border-t-2 block text-center overflow-hidden transition-all duration-300 text-[#111111] p-0 border-0 font-semibold text-sm normal-case rounded-none hover:text-[#116D6E]"
                      >
                        <span className="flex justify-center items-center">
                          <FaCaretUp></FaCaretUp>
                        </span>
                      </button>

                      <input
                        type="text"
                        className="w-[45px] border-0 py-[10px] px-0 text-center text-xl text-[#000] font-semibold border-r-2 block m-0 overflow-visible box-border"
                        value={data.quantity}
                        readOnly
                      />

                      <button
                        onClick={() => handleIncrement(data._id)}
                        type="button"
                        className="absolute right-0 top-0 h-[50%] w-[52%] block text-center overflow-hidden transition-all duration-300 text-[#111111] p-0 border-0 font-semibold text-sm normal-case rounded-none hover:text-[#116D6E]"
                      >
                        <span className="flex justify-center items-center">
                          <FaCaretDown></FaCaretDown>
                        </span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <span> ${data.price * data.quantity}</span>
                  </td>
                  <td>
                    <HiX
                      onClick={() => handleDelete(data._id)}
                      className="hover:text-[#116D6E]"
                    ></HiX>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
        </div>

        <div className="flex items-end justify-end ">
          
          <button
            onClick={handleAllDelete}
            className="bg-slate-900 hover:bg-[#116D6E] hover:transition-colors hover:duration-300  w-1/4 py-3 text-white uppercase"
          >
            Clear Cart
          </button>
        </div>

        <div className="border w-full mt-5 nb-10 p-8">
          <p>Cart Totals</p>
          <div className="divider w-[95%] mx-auto"></div>
          <div className="flex w-full justify-end">
            <div className="flex w-2/4 justify-around px-3">
              <p>Total</p>
              <p className="font-bold">
                $<span>{totalPrice.toFixed(2)}</span>
              </p>
            </div>
          </div>

          {/* <Link to='/checkout'> */}
          <button onClick={()=>handleCheckout()} className="hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300  w-1/4 py-3 text-white uppercase">
            proceed to checkout
          </button>
          {/* </Link> */}
        </div>
      </Container>
    </>
  );
};

export default AddCart;
