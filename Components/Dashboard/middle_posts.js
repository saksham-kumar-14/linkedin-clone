import { DotsHorizontalIcon, ThumbUpIcon as ThumbUpIcon2 , TrashIcon } from "@heroicons/react/solid";
import { ThumbUpIcon} from "@heroicons/react/outline";



const DashboardMiddlePosts=({dark_mode, posts, set_posts})=>{
    function increase_likes(post){
        const arr = []
        posts.map((e)=>{
            if(post===e){
                e.likes += 1
                e.liked = true
            }
            arr.push(e);
        })
        set_posts(arr);
    }
    function delete_post(post){
        const arr = [];
        posts.map((e)=>{
            if(post!==e){
                arr.push(e);
            }
        })
        set_posts(arr);
    }

    return(
        <div className="flex flex-col mt-2">
            {posts.map((e,index)=>{
                return(
                    <div className={dark_mode?"bg-gray-700 text-white rounded-xl mt-2 px-4 py-2":
                    "bg-white text-black rounded-xl mt-2 px-4 py-2"}>
                        <div className="grid grid-cols-2 col-span-2">
                            <div className="flex items-center">
                                <div className="pr-4">
                                    <img className="cursor-pointer h-8 rounded-full" src={e.icon}></img>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-[0.9em] cursor-pointer hover:underline">{e.name}</span>
                                    <span className={dark_mode?"text-gray-300 text-[0.85rem] cursor-pointer hover:underline":
                                    "text-gray-700 text-[0.85rem] cursor-pointer hover:underline"}>{e.email}</span>
                                    <span className={dark_mode?"text-gray-300 text-[0.85rem]":
                                    "text-gray-700 text-[0.85rem]"}>{e.time}</span>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <DotsHorizontalIcon className={dark_mode?"h-8 cursor-pointer hover:bg-gray-500 rounded-full duration-1000":
                                "h-8 cursor-pointer hover:bg-gray-300 rounded-full duration-1000"}/>
                            </div>
                        </div>

                        <div className={dark_mode?"border-b-[0.01rem] border-gray-300 px-1 pt-3 py-2 flex flex-col":
                        "border-b-[0.01rem] border-gray-500 px-1 pt-3 py-2 flex flex-col"}>
                            <span className="text-[1.1rem]">{e.body}</span>
                            <img className="h-[100%]" src={e.image}></img>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="flex justify-center cursor-pointer rounded-b-xl py-2">
                                {e.liked?
                                <ThumbUpIcon2 onClick={()=>{
                                    if(!e.liked){
                                        increase_likes(e)
                                    }
                                }} className="h-6  duration-300"/>:
                                <ThumbUpIcon onClick={()=>{
                                    if(!e.liked){
                                        increase_likes(e)
                                    }
                                }} className="h-6  hover:text-red-400 duration-300"/>
                                }
                                
                                {e.likes===0 ? 
                                <span>Like</span> : 
                                <span>{e.likes}</span>}
                            </div>
                            <div className="flex justify-center cursor-pointer rounded-b-xl py-2">
                                <TrashIcon onClick={()=>{
                                    delete_post(e)
                                }} className="h-6 hover:text-red-400 duration-300"/>
                                <span>Delete</span>
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default DashboardMiddlePosts;