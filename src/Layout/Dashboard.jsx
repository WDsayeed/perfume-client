import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { FaCalendarAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { HiUserPlus } from "react-icons/hi2";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col md:mx-10 md:mt-10">
        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#cfe6ba] text-base-content">
          <li className="mx-auto mb-10">
            
          <div className="avatar ">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
         </li>

          {isAdmin ? (
            <>
              <li className="font-bold uppercase">
                <Link to="/dashboard/adminHome">Admin Home</Link>
              </li>
              <li className="font-bold uppercase">
                <Link to="/dashboard/allUser">All user</Link>
              </li>
              <li className="font-bold uppercase">
                <Link to="/dashboard/manageItems">Manage Items</Link>
              </li>
              <li className="font-bold uppercase">
                <Link to="/dashboard/orderDetails">Order Details</Link>
              </li>
              <li className="font-bold uppercase">
                <Link to="/dashboard/addItem">Add an Item</Link>
              </li>
            </>
          ) : (
            <>
              <li className="font-bold uppercase">
                <Link to="/dashboard/userHome"><span><HiUserPlus className="w-4 h-4"></HiUserPlus></span>User Home</Link>
              </li>
              <li className="font-bold uppercase">
                <Link to="/addCart">My Cart</Link>
              </li>
              <li className="font-bold uppercase">
                <Link to="/wishList">My WishList</Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className="font-bold uppercase">
            <Link to="/">
              <FaCalendarAlt></FaCalendarAlt> Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
