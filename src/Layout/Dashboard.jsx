import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  // const isAdmin = true
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
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/adminHome">Admin Home</Link>
              </li>
              <li>
                <Link to="/dashboard/allUser">All user</Link>
              </li>
              <li>
                <Link to='/dashboard/manageItems'>Manage Items</Link>
              </li>
              <li>
                <Link to='/dashboard/addItem'>Add an Item</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/dashboard/userHome'>User Home</Link>
              </li>
            </>
          )}


<div className="divider"></div>
          <li>
            <Link to="/">
              <FaCalendarAlt></FaCalendarAlt> Home
            </Link>
          </li>
          <li>
            <Link to="/menu">Our Menu</Link>
          </li>
          <li>
            <Link to="/order/salad">Our Food</Link>
          </li>
        </ul>        
      </div>
    </div>
  );
};

export default Dashboard;
