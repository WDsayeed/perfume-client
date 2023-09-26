import { useContext } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loader></Loader>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
