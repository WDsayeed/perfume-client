import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const UseCart = () => {

  const {user, loading} = useContext(AuthContext)
const [axiosSecure] = useAxiosSecure()

const { refetch, data: addToCart = [] } = useQuery({
        queryKey: ['addToCart', user?.email],
        enabled: !loading,

        queryFn: async ()=>{
                const res = await axiosSecure(`/addToCart?email=${user?.email}`)
                return res.data
        },
      })
      return [addToCart, refetch]
};

export default UseCart;
