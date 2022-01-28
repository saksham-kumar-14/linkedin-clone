import { BookmarkAltIcon, BookmarkIcon, CashIcon, PlusIcon } from "@heroicons/react/solid";


const DashboardLeft=({dark_mode})=>{
    return(
        <div className={dark_mode?"flex flex-col items-center text-white overflow-y-scroll h-[88vh] pb-4":"flex flex-col items-center text-black overflow-y-scroll h-[88vh] pb-4"}>   
            <div className={dark_mode?"bg-gray-700 mt-8 rounded-2xl w-[65%]":"bg-white mt-8 rounded-2xl w-[65%]"}>
                <div className="grid grid-flow-row grid-rows-2 relative">
                    <div className="bg-gray-400 px-10 rounded-t-2xl"></div>
                    <div className="py-3 px-10 flex flex-col items-center">
                        <p className="mt-5 cursor-pointer hover:underline">Pranav M</p>
                        <p className={dark_mode?"text-gray-300 cursor-pointer hover:underline":"text-gray-600 cursor-pointer hover:underline"}>pranav@codedamn.com</p>
                    </div>
                        <img className="h-16 absolute border-2 border-white cursor-pointer rounded-full top-[30%] left-[40%]" src="/codedamn.png"></img>
                </div>

                <div className="flex flex-col items-center border-y-2 py-2 px-5 border-gray-600">
                    <div className="grid grid-cols-2">
                        <span className="font-medium flex justify-start">Who viewed you profile</span>
                        <span className="text-[rgb(36,204,255)] cursor-pointer hover:underline flex justify-end">321</span>
                    </div>
                    <div className="grid grid-cols-2 w-[100%]">
                        <span className="font-medium flex justify-start">Views of your post</span>
                        <span className="text-[rgb(36,204,255)] cursor-pointer hover:underline flex justify-end">1,893</span>
                    </div>
                </div>

                <div className="py-2 px-6 border-b-2 border-gray-600">
                    <span className={dark_mode?"text-gray-300":"text-gray-600"}>Access exclusive tools & insights</span>
                    <div className="flex items-center">
                        <CashIcon className="h-8 text-orange-500"/>
                        <span className="font-medium">Try Premium for free</span>
                    </div>
                </div>

                <div className="flex items-center py-2 px-6">
                    <BookmarkIcon className="h-8 text-gray-300"/>
                    <span className="font-medium">My items</span>
                </div>
            </div>

            <div className={dark_mode?"bg-gray-700 flex flex-col item-center rounded-2xl mt-4 pt-2 w-[65%]":"bg-white flex flex-col item-center rounded-2xl mt-4 pt-2 w-[65%]"}>
                <div className="px-6">
                    <span className="text-blue-400 font-medium">Groups</span>
                    <div className="grid grid-cols-2">
                        <span className="flext justify-start items-center text-blue-400 font-medium">Events</span>
                        <div className="flex justify-end items-center">
                            <PlusIcon className="h-6"/>
                        </div>
                    </div>
                    <span className="text-blue-400 font-medium">Followed Hashtags</span>
                </div>
                <button className={dark_mode?"border-t-2 border-gray-500 flex flex-col duration-500 items-center hover:bg-gray-500 rounded-b-2xl":"border-t-2 border-gray-500 flex flex-col duration-500 items-center hover:bg-gray-200 rounded-b-2xl"}>
                    <span className="font-medium py-2 px-6">Discover More</span>
                </button>
            </div>
        </div>
    )
}

export default DashboardLeft;