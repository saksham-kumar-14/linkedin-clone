import { TrashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import DashboardHeader from "../Components/Dashboard/header";
import DashboardLeft from "../Components/Dashboard/left";
import DashboardMiddle from "../Components/Dashboard/middle";
import DashboardRight from "../Components/Dashboard/right";


const Dashboard=()=>{
    const [dark_mode, set_dark_mode] = useState(true);
    const [current_text, set_current_text] = useState("asdfasdf");
    const [current_url, set_current_url] = useState("");
    const [posts,set_posts] = useState([{
        "icon" : "codedamn.png",
        "name" : "Pranav M",
        "email" : "pranav@codedamn.com",
        "time" : "11 minutes ago",
        "body" : "Drafting the first post",
        "likes" : 0,
        "liked" : false,
        "image" : ""
    }]);
    const [start_post, set_start_post] = useState(false);

    function add_post(){
        let arr = posts 
        arr.push({
            "icon" : "codedamn.png",
            "name" : "Pranav M",
            "email" : "pranav@codedamn.com",
            "time" : "11 minutes ago",
            "body" : current_text,
            "likes" : 0,
            "liked" : false,
            "image" : current_url
        })

        set_posts(arr)
        set_start_post(false);
        set_current_url("")
    }

    return(
        <div className={dark_mode?"bg-[rgb(10,10,10)] h-[100vh]":"bg-gray-300 h-[100vh] overflow-hidden"}>
            <DashboardHeader  dark_mode={dark_mode} set_dark_mode={set_dark_mode} />
            <div className="grid grid-cols-3">
                <DashboardLeft dark_mode={dark_mode}/>
                <DashboardMiddle dark_mode={dark_mode} posts={posts} set_posts={set_posts} set_start_post={set_start_post}/>
                <DashboardRight dark_mode={dark_mode}/>
            </div>

            {start_post && 
                <div className="absolute top-0 flex justify-center items-center w-[100vw] h-[100vh] bg-black bg-opacity-80">
                    <div className={dark_mode?"bg-gray-700 rounded-2xl text-white w-[35%] py-3":
                    "bg-white rounded-2xl text-black w-[35%] py-3"}>

                        <div className="grid grid-cols-2 border-b-2 border-gray-300 px-3 py-1">
                            <span className="text-[1.15rem] font-medium">Create a post</span>
                            <div className="flex justify-end">
                                <TrashIcon onClick={()=>{
                                    set_start_post(false)
                                }} className="h-8 cursor-pointer"/>
                            </div>
                        </div>

                        <div className="flex items-center py-5 px-3">
                            <img className="h-12 rounded-full" src="/codedamn.png" />
                            <span className="ml-2">Pranav M</span>
                        </div>

                        <textarea placeholder="What do you want to talk about?"
                        onChange={(e)=>{
                            set_current_text(e.target.value)
                        }} 
                        className={dark_mode?"resize-none py-1 px-4 placeholder:text-gray-300 bg-gray-700 outline-none w-[90%] h-[7rem]":
                        "resize-none py-1 px-4 placeholder:text-gray-500 bg-white outline-none w-[90%] h-[7rem]"}>
                        </textarea>

                        <div className="flex items-center">
                            <input onChange={(e)=>{
                                set_current_url(e.target.value)
                            }} placeholder="Add a photo URL (optional)" 
                            className={dark_mode?"w-[85%] outline-none bg-gray-700 placeholder:text-gray-300 py-1 px-3":
                            "w-[85%] outline-none bg-white placeholder:text-gray-500 py-1 px-3"}>
                            </input>
                            <button onClick={()=>{
                                add_post();
                            }} className="rounded-2xl bg-gray-200 text-gray-600 font-medium py-1 px-3 mx-2">Post</button>
                        </div>

                    </div>

                </div>
            }
        </div>
    )
}

export default Dashboard;