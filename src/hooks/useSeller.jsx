import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useSeller = () => {
       
  const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
   // use axios secure with react hook
   const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ["isInstructor", user.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/users/seller/${user?.email}`);
          console.log(res)
          return res.data.Instructor
        },
      });
      return [isInstructor, isInstructorLoading]
};

export default useSeller;