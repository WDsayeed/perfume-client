// import { useState } from "react";
import {
  HiOutlineHeart,
  HiShoppingCart,
  HiSearch,
  HiUserCircle,
  HiX,
} from "react-icons/hi";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UseCart from "../../hooks/UseCart";
import ProceedCheckout from "../AddCart/ProceedCheckout";
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
  // const [isSearchVisible, setSearchVisible] = useState(false);
  const [addToCart] = UseCart();
  const { user, logOut } = useContext(AuthContext);
  // const [searchText, setSearchText] = useState("")

  const [isAdmin] = useAdmin();

  // const listenScrollEvent = (event) => {
  //   if (window.scrollY < 93) {
  //     return setHeader("header");
  //   } else if (window.scrollY > 100) {
  //     return setHeader("header2");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);

  //   return () => window.removeEventListener("scroll", listenScrollEvent);
  // }, []);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };



  const totalPrice = addToCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleDelete = (id) => {
    console.log(id);
  };

  // const handleSearch = () => {
  //   setSearchVisible(!isSearchVisible);
  // };

  const handleCheckout = () => {
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <>
      {/* here new */}
      <div className="navbar bg-[#a0ddf7]  fixed z-50 md:px-36">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <h3>Category</h3>
                <ul className="p-2">
                <li>
                    <Link to="/menCategory">Men perfume</Link>
                  </li>
                  <li>
                    <Link to="/womenCategory">Women perfume</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="">
            <h3 className="uppercase text-3xl font-semibold">Permia</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex z-50">
          <ul className="menu menu-horizontal px-1 divide-x">
            <li className="font-bold">
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <details className="font-bold">
                <summary>Category</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/menCategory">Men perfume</Link>
                  </li>
                  <li>
                    <Link to="/womenCategory">Women perfume</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="font-bold">
            <Link to='/blog'>Blog</Link>
            </li>

           {isAdmin ? (
              <li className="font-bold">
                <Link to="/dashboard/adminHome">Dashboard</Link>
              </li>
            ) : (
              <li className="font-bold">
                <Link to="/dashboard/userHome">Dashboard</Link>
              </li>
            )}
           

            {user && (
              <li onClick={handleLogOut}>
                <p className="font-bold">Logout</p>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-x-3 relative">
          {/* <div className="">
            <HiSearch onClick={handleSearch} className="w-6 h-6"></HiSearch>
            {isSearchVisible && (
              <div className="absolute -left-20 top-11 w-96 h-32 bg-slate-600 join flex justify-center items-center">
                <input
                  className="input input-bordered join-item"
                  placeholder="search here"
                />
                <button className="btn join-item rounded-r-full bg-[#116D6E] text-white hover:text-[#116D6E]">
                  Search
                </button>
              </div>
            )}
          </div> */}
          <Link to="/wishList">
            <HiOutlineHeart className="w-6 h-6"></HiOutlineHeart>
          </Link>
        
          
          <label
            // onClick={handleDrawer}
            htmlFor="my-drawer-4"
            className="drawer-button relative mr-3 cursor-pointer"
          >
            {" "}
            <div className="font-bold text-[#116D6E] absolute -top-[.9rem] left-4">
              +{addToCart.length}
            </div>
            <HiShoppingCart className="w-6 h-6"></HiShoppingCart>
          </label>

          <div>
            {user ? (
              <div className="avatar online">
                <div className="w-10 h-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            ) : (
              <Link to="/login">
                <HiUserCircle className="w-10 h-10 bg-white p- rounded-full drop-shadow-md hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white"></HiUserCircle>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ProceedCheckout totalPrice={totalPrice}></ProceedCheckout>
      {/* drawer */}
      <div className="drawer drawer-end z-50 ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className=" drawer-side overflow-y-scroll h-content">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 h-full bg-base-200 text-base-content">
            {addToCart.map((data) => (
              <li key={data._id} className="my-3 block">
                <div className="flex justify-between gap-3 bg-[#A1CCD1] rounded-md">
                  <div className="img-div w-20 h-20">
                    <img className="w-full rounded-md" src={data.img} alt="" />
                  </div>
                  <div className="title-div px-2 flex flex-col  justify-center">
                    <h4 className="">{data.name}</h4>
                    <p>QTY:{data.quantity}</p>
                    <p>${data.price}</p>
                  </div>
                  <div className="">
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn  border-0 border-b-4 "
                    >
                      <HiX></HiX>
                    </button>
                  </div>
                </div>
              </li>
            ))}

            <div className="absolute bottom-0 left-0 w-full ">
              <div className="flex justify-between p-4 bg-white">
                <p>
                  <span className="font-semibold text-lg">Total: </span>
                </p>
                <p className="font-semibold text-lg text-[#116D6E]">
                  ${totalPrice}
                </p>
              </div>
              <div className="flex w-full">
                <div className="w-2/4">
                  <Link to="/addCart">
                    <button className=" hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300 w-full  py-3 text-white uppercase">
                      view cart
                    </button>
                  </Link>
                </div>
                <div className="w-2/4">
                  <button
                    onClick={() => handleCheckout()}
                    className=" bg-slate-900 hover:bg-[#116D6E] hover:transition-colors hover:duration-300  w-full py-3 text-white uppercase"
                  >
                    checkout
                  </button>
                </div>
              </div>
              {/* <div> 
            
              </div> */}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
