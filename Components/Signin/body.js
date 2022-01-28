import { useRouter } from "next/router";
import { useState } from "react";


const SigninBody=()=>{
    const router = useRouter();
    const [password_type,set_password_type] = useState("password");

    return(
        <div className="flex flex-col items-center justify-center">
            <div className="bg-white shadow-xl rounded-2xl px-9 py-6 flex flex-col pb-16">
                <h2 className="font-medium text-[1.75rem]">Sign in</h2>
                <span>Stay updated on your professional world</span>
                <input className="my-3 border-2 font-[1.5rem] outline-none border-gray-400 p-3 rounded-lg  placeholder:text-gray-500" placeholder="Email or Phone"></input>
                <div className="my-3 border-2 font-[1.5rem]  border-gray-400 py-3 rounded-lg">
                    <input type={password_type} className="w-[82%] px-3 outline-none placeholder:text-gray-500" placeholder="Password"></input>
                    <a onClick={()=>{
                        if(password_type==="text"){set_password_type("password")}
                        else{set_password_type("text")}
                    }} className="font-bold cursor-pointer text-blue-500 ">show</a>
                </div>
                <a className="font-bold cursor-pointer text-blue-500">Forgot password?</a>
                <button className="my-4 duration-300 hover:scale-105 bg-[rgb(38,91,206)] text-white rounded-3xl py-3">Sign in</button>
            </div>
            <span className="mt-10">New to Linkedin? <a onClick={()=>{
                router.push("/register")
            }} className="font-bold text-blue-500 cursor-pointer">Join now</a></span>
        </div>
    )
}

export default SigninBody;