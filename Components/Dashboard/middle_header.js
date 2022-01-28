import { DocumentTextIcon, PhotographIcon, ShoppingBagIcon, VideoCameraIcon } from "@heroicons/react/solid";


const DashboardMiddleHeader=({dark_mode,posts, set_posts,set_start_post})=>{

    return(
        <div className={dark_mode?"flex flex-col items-center w-[100%] text-white bg-gray-700 rounded-xl px-2 py-3 mt-8":
        "flex flex-col items-center w-[100%] text-black bg-white rounded-xl px-2 py-3 mt-8"}>
            <div className="flex w-[100%] justify-center items-center">
                <img src="/codedamn.png" className="h-10 rounded-full cursor-pointer"></img>
                <button onClick={()=>{
                    set_start_post(true)
                }} className={dark_mode?"flex justify-start items-center rounded-full border-[0.01rem] border-gray-200 py-2 px-3 placeholder:text-gray-200 placeholder:font-medium bg-gray-700 text-white w-[82%] ml-4":
                "flex justify-start items-center rounded-full border-[0.01rem] border-gray-600 py-2 px-3 placeholder:text-gray-200 placeholder:font-medium bg-white text-gray-700 w-[82%] ml-4"}>
                    Start a post
                </button>
            
            </div>

            <div className="grid grid-cols-4 w-[100%]">
                <div className={dark_mode?"cursor-pointer duration-300 flex justify-center items-center hover:bg-slate-500 rounded-xl my-2 mx-1":
                "cursor-pointer flex justify-center items-center duration-300 hover:bg-gray-300 rounded-xl my-2 mx-1"}>
                    <PhotographIcon className="h-8 text-cyan-600"/>
                    <span>Photo</span>
                </div>
                <div className={dark_mode?"cursor-pointer duration-300 flex justify-center items-center hover:bg-slate-500 rounded-xl my-2 mx-1":
                "cursor-pointer duration-300 flex justify-center items-center hover:bg-gray-300 rounded-xl my-2 mx-1"}>
                    <VideoCameraIcon className="h-8 text-green-400"/>
                    <span>Video</span>
                </div>
                <div className={dark_mode?"cursor-pointer duration-300 flex justify-center items-center hover:bg-slate-500 rounded-xl my-2 mx-1":
                "cursor-pointer duration-300 flex justify-center items-center hover:bg-gray-300 rounded-xl my-2 mx-1"}>
                    <ShoppingBagIcon className="h-8 text-blue-600"/>
                    <span>Job</span>
                </div>
                <div className={dark_mode?"cursor-pointer duration-300 flex justify-center items-center hover:bg-slate-500 rounded-xl my-2 mx-1":
                "cursor-pointer duration-300 flex justify-center items-center hover:bg-gray-300 rounded-xl my-2 mx-1"}>
                    <DocumentTextIcon className="h-8 text-red-500"/>
                    <span>Write Article</span>
                </div>
                
            </div>
        </div>
    )
}

export default DashboardMiddleHeader;