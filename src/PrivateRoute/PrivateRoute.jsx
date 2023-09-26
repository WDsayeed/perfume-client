import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";


const PrivateRoute = ({children}) => {
        const { user, loading } = useContext(AuthContext)

        if (loading) {
         return <Loader></Loader>
        }
        
        if (user) {
        return children
        }
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;