import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_upload_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;
  const onSubmit = (data) => {

      const formData = new FormData();
    formData.append("image", data.img[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {

        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url
          const { name, price, category, quantity, description } = data
          const newItem = { name, price: parseFloat(price), category, quantity: parseFloat(quantity), description, img: imgURL }
          axiosSecure.post('/allPerfume', newItem)
            .then(data => {
              console.log(data)
              if (data.data.insertedId) {
                reset()
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
        }
      });
  };

  return (
    <>
      <div className="my-10">
        <h1 className="text-5xl text-center">Add an Item</h1>
      </div>

      <form className="mx-auto w-2/4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product name:</span>
            </label>
            <input
              type="text"
              placeholder="product name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-10 my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>men</option>
              <option>women</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="md:flex gap-10">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Pick a file</span>
            </label>
            <input
              type="file"
              {...register("img", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Quantity:</span>
            </label>
            <input
              type="number"
              placeholder="quantity"
              {...register("quantity", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Description:</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            {...register("description", { required: true })}
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Add Item"
            className="hover:bg-slate-900 bg-[#116D6E] hover:transition-colors hover:duration-300  w-2/4 py-2 text-white uppercase mt-5"
          />
        </div>
      </form>
    </>
  );
};

export default AddItem;
