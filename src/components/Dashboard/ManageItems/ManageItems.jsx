import { HiOutlineXMark } from "react-icons/hi2";
import UsePerfume from "../../../hooks/UsePerfume";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [allPerfume, , refetch] = UsePerfume();
  const [axiosSecure] = useAxiosSecure()
        
        const handleFeedback = (perfume) => {
          
        }

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
        axiosSecure.delete(`/allPerfume/${id}`)
  
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // const remainingData = users.filter((data) => data._id !== id);
              // setUsers(remainingData);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table ">
        {/* head */}
        <thead className="text-center">
          <tr className="text-center">
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {allPerfume.map((perfume, index) => (
            <tr key={perfume._id} className="hover">
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask  w-28 h-28">
                      <img
                        src={perfume.img}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{perfume.name}</div>
                  </div>
                </div>
              </td>
              <td className="text-right">${perfume.price}</td>
              <td> <button onClick={() => handleFeedback(perfume)} className="hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300  w-2/4 py-2 text-white uppercase">Feedback</button></td>

             

              <td>
                <button
                  onClick={() => handleDeleteUser(perfume._id)}
                  className="bg-white p-2  rounded-full drop-shadow-md hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white"
                >
                  <HiOutlineXMark className="w-6 h-6"></HiOutlineXMark>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
