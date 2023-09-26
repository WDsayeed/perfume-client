import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from "../../assets/animation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import Swal from "sweetalert2";
// import signAnimation from "../../assets/signAnimate.json";



const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate()
  const location = useLocation()

  const form = location.state?.form?.pathname || '/'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  

    createUser(data.email, data.password).then((result) => {
      const createdUser = result.user;
      console.log(createdUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email , role: data.category}
          fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "user created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            })
      })
    });
  };

  return (
    <>
      <h1 className="text-4xl text-center font-semibold bg-base-200">
        Sign UP
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center">
            <Lottie className="" animationData={animation} loop={true} />
          </div>
          <SocialLogin></SocialLogin>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password:</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase and one lower case
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password:</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPass")}
                  placeholder="confirm password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">
                    Select your role
                  </span>
                </label>
                <select defaultValue='Pick one' {...register("category", { required: true})} className="select select-bordered">
                  <option disabled>
                    Pick one
                  </option>
                  <option>Buyer</option>
                  <option>Seller</option>
                </select>              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Add Image:</span>
                </label>
                <input
                  type="file"
                  {...register("image")}
                  className="file-input file-input-bordered file-input-primary w-full "
                />
              </div> */}

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <p className="text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
