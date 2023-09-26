import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const UseCart = () => {

  const {user, loading} = useContext(AuthContext)
const [axiosSecure] = useAxiosSecure()
// const token = localStorage.getItem('access-token')
const { refetch, data: addToCart = [] } = useQuery({
        queryKey: ['addToCart', user?.email],
        enabled: !loading,
        // queryFn: async ()=>{
        //         const res = await axiosSecure(`http://localhost:5000/carts?email=${user?.email}`,{
        //                 headers:{authorization: `bearer ${token}`}
        //         })
        //         return res.json()
        // },
        queryFn: async ()=>{
                const res = await axiosSecure(`/addToCart?email=${user?.email}`)
                return res.data
        },
      })
      return [addToCart, refetch]
  // const { user } = useContext(AuthContext);

  // const token = localStorage.getItem("access-token");
  // const {
  //   isLoading,
  //   refetch,
  //   data: addToCart = [],
  // } = useQuery({
  //   queryKey: ["addToCart", user?.email],
  //       queryFn: async () => {
  //         const response = await fetch(
  //           `http://localhost:5000/addToCart?email=${user?.email}`,
  //           {
  //             headers: {
  //               authorization: `bearer ${token}`,
  //             },
  //           }
  //         );
          
  //         const data = await response.json()
  //         return data;
  //   },    
        

  // });
  // if (isLoading) {
  //   return [];
  // }
  // return [addToCart, refetch];
};

export default UseCart;
