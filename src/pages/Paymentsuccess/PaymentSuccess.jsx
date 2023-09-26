/* eslint-disable no-unused-vars */
import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { transId } = useParams();
  console.log(transId);
  return (
    // <div className="w-3/4 mx-auto">
    //   <h1 className="text-3xl font-semibold text-center mt-28">
    //     Successful Payment! Your order has been processed successfully with the
    //     payment. Thank you for choosing to make a deal with us.
    //               </h1>
    //               <p className="text-red mt-3">
    //                       Your transaction id : {transId}
    //               </p>
    // </div>

    <div className="w-2/4 mx-auto mt-10">
      <h1 className="text-green-700 font-semibold text-2xl mb-2">
        {" "}
        Successful Payment!
      </h1>
      <p>
        Your order has been processed successfully with the payment. Thank you
        for choosing to make a deal with us.
      </p>
      <p className="text-cyan-700 mt-3"><span className="font-semibold">Your transaction id :</span> {transId}</p>
      <Link to="/">
        <button className="hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300 text-center  w-1/4 py-2 text-white uppercase mt-5">
          <span className="flex justify-center items-center gap-2">
            <HiArrowLongLeft></HiArrowLongLeft> continue shopping
          </span>
        </button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
