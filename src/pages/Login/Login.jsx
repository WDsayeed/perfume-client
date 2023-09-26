import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimate from '../../assets/login.json'
import { useContext } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
 
  const from = location.state?.from?.pathname || "/";
        const {
                register,
                handleSubmit,
          formState: { errors },
                reset
              } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
      reset();
    })
    .catch((error) => console.log(error));
  };
        return (
                <>
                <h1 className="text-4xl text-center font-semibold bg-base-200 pt-5">Please login</h1>
                   <div className="hero  bg-base-200">
                     
                     <div className="hero-content flex-col lg:flex-row">
                       <div className="text-center">
                         
                         <Lottie className="" animationData={loginAnimate} loop={true} />
             
                       </div>
                       <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <div className="card-body">
                          
                           <div className="form-control">
                             <label className="label">
                               <span className="label-text">Email:</span>
                             </label>
                             <input 
                             type="text" 
                             placeholder="email" 
                             {...register("email")}
                             className="input input-bordered" />
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
                             className="input input-bordered" />
                             {errors.password?.type === "minLength" && (
                             <p className="text-red-600">Password must be 6 characters</p>
                           )}
                           {errors.password?.type === "pattern" && (
                             <p className="text-red-600">
                               Password must have one Uppercase and one lower case
                             </p>
                           )}
                           </div>
                        
                       <div className="form-control mt-6">
                         <input
                           className="btn btn-primary"
                           type="submit"
                           value="Login"
                         />
                       </div>
                       <p className="text-center">
                         New here? please <Link to="/signUp"><span className="underline text-slate-900">Sign up</span></Link>
                       </p>
                         </div>
                       </form>
                     </div>
                   </div>
                 </>
        );
};

export default Login;