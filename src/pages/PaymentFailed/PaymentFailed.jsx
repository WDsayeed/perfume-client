/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="w-2/4 mx-auto mt-10">
      <h1 className="text-red-700 font-semibold text-2xl mb-2">
        {" "}
        Payment Failed!
      </h1>
      <p>
        We're sorry, but your payment was not successful. Please ensure that you
        have provided the correct payment information and check the status of
        your payment card. If you need any assistance, please don't hesitate to
        contact our support team.
      </p>
      <Link to="/addCart">
        <button className="hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300 text-center  w-1/5 py-2 text-white uppercase mt-5">
          <span className="flex justify-center items-center gap-2">
            <HiArrowLongLeft></HiArrowLongLeft> Go back
          </span>
        </button>
      </Link>
    </div>
  );
};

export default PaymentFailed;
