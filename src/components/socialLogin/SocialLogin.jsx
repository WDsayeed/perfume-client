import { useContext } from "react";
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
        const { googleLogin, githubLogin } = useContext(AuthContext)
        const navigate = useNavigate()
        const location = useLocation()
      
        const from = location.state?.from?.pathname || '/'
        const handleGoogleLogin = () =>{
                googleLogin()
                .then(result=>{
                        const loggedUser = result.user 
                        console.log(loggedUser)
                        const savedUser = {name: loggedUser.displayName, email: loggedUser.email, role: 'Seller'}
                        fetch('https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/users',{
                                method:'POST',
                                headers:{
                                        'content-type':'application/json'
                                },
                                body:JSON.stringify(savedUser)
                        })
                        .then(res=> res.json())
                        .then(()=>{
                               
                                        navigate(from,{replace: true})
                               
                        })
                })
        }

        // const handleGithubLogin = ()=>{
        //         githubLogin()
        //         .then(result=>{
        //                 const loggedUser = result.user 
        //                 console.log(loggedUser)
        //                 const savedUser = {name: loggedUser.displayName, email: loggedUser.email}
        //                 fetch('https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/user',{
        //                         method:'POST',
        //                         headers:{
        //                                 'content-type':'application/json'
        //                         },
        //                         body:JSON.stringify(savedUser)
        //                 })
        //                 .then(res=> res.json())
        //                 .then(data=>{
        //                         console.log(data)
        //                 })
        //         })
        // }
        return (
                <div>
                        <div className="w-full flex flex-col items-center  mb-3 space-y-4">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline flex items-center justify-center">
                   
                <FaGoogle></FaGoogle>
                  
                 </button>
                {/* <button onClick={handleGithubLogin} className="btn btn-circle btn-outline flex items-center justify-center">
                   
              <FaGithub></FaGithub>
                  
                 </button> */}
                </div>
                </div>
        );
};

export default SocialLogin;