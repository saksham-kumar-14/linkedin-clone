import { useRouter } from "next/router";
import { useState } from "react";


const RegisterBody=()=>{
    const [password_type,set_password_type] = useState("password");
    const router = useRouter();
    
    return(
        <div className="flex flex-col items-center justify-center content-center">
            <form className="border-none flex flex-col w-[35%]">
                <div className="my-2">
                    <label className="text-gray-500">Email or phone number</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 w-[85%]" type="text"></input>
                </div>
                <div className="my-2">
                    <label className="text-gray-500">Your Name</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 w-[100%]" type="text"></input>
                </div>
                <div className="my-2">
                    <label className="text-gray-500">Password</label>
                    <div className="border-2 border-gray-300 rounded-md w-[100%]">
                        <input className="outline-none p-2 w-[90%]" type={password_type}></input>
                        <a onClick={()=>{
                            if(password_type==="text"){set_password_type("password")}
                            else{set_password_type("text")}
                        }} className="text-gray-500 font-medium cursor-pointer">Show</a>
                    </div>
                </div>
                <button className="border-none py-4 mt-4 rounded-[6rem] duration-300 hover:scale-105 bg-[rgb(38,91,206)] text-white">Continue</button>
            </form>

            <span className="mt-16">Already on LinkedIn? <a onClick={()=>{router.push("/signin")}} className="font-medium cursor-pointer text-blue-600">Sign in</a></span>
        </div>
    )
}

export default RegisterBody;