import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUser = () => {
  // const [users, setUsers] = useState([]);
 const [axiosSecure] = useAxiosSecure()
  const {data: users =[] , refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users/')
    return res.data
  })

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);


  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // const remainingData = users.filter((data) => data._id !== id);
              // setUsers(remainingData);
            }
          });
      }
    });
  }

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
    method:'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch()
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
  }

  // const handleMakeManager = (user) => {
  //   fetch(`http://localhost:5000/users/manager/${user._id}`, {
  //   method:'PATCH'
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.modifiedCount) {
  //         Swal.fire({
  //           position: "top-center",
  //           icon: "success",
  //           title: `${user.name} is a Manager now!`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     })
  // }
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table ">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'Admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300  w-2/4 py-2 text-white uppercase">Make admin</button>}</td>
                
                {/* <td>{user.role === 'Manager' ? 'Manager' : <button onClick={() => handleMakeManager(user._id)} className="bg-slate-900 hover:bg-[#116D6E] hover:transition-colors hover:duration-300  w-2/4 py-2 text-white uppercase">Make manager</button>}</td> */}
                
                <td><button onClick={()=> handleDeleteUser(user._id)} className="bg-white p-2  rounded-full drop-shadow-md hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white"><HiOutlineXMark className="w-6 h-6"></HiOutlineXMark></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
