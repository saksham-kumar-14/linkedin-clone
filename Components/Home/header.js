import { UsersIcon , PlayIcon , ShoppingBagIcon, ChatAlt2Icon } from "@heroicons/react/outline"
import { useRouter } from "next/router";

const HomeHeader = () => {
    const router = useRouter();
    return(
        <nav className="grid grid-cols-2">
            <div className="flex justify-center items-center">
                <img onClick={()=>{
                    router.push("/")
                }} className="h-10 cursor-pointer" src="/logo-with-text.svg"/>
            </div>

            <div className="flex justify-center items-center">
                <div className="border-r-2 border-gray-300 flex content-center items-center ">
                    <span onClick={()=>{
                        router.push("/dashboard")
                    }} className="mx-5 py-2 cursor-pointer transition duartion-1000 hover:-translate-y-3">
                        <ChatAlt2Icon className="h-8"/>
                        <span className="text-gray-500 font-bold">Discover</span>
                    </span>
                    <span onClick={()=>{
                        router.push("/dashboard")
                    }} className="mx-5 py-2 cursor-pointer transition duartion-1000 hover:-translate-y-3">
                        <UsersIcon className="h-8"/>
                        <span className="text-gray-500 font-bold">People</span>
                    </span>
                    <span onClick={()=>{
                        router.push("/dashboard")
                    }} className="mx-5 py-2 cursor-pointer transition duartion-1000 hover:-translate-y-3">
                        <PlayIcon className="h-8"/>
                        <span className="text-gray-500 font-bold">Learning</span>
                    </span>
                    <span onClick={()=>{
                        router.push("/dashboard")
                    }} className="mx-5 py-2 cursor-pointer transition duartion-1000 hover:-translate-y-3">
                        <ShoppingBagIcon className="h-8"/>
                        <span className="text-gray-500 font-bold">Jobs</span>
                    </span>
                </div>
                <button onClick={()=>{
                    router.push("/signin")
                }} className="duration-300 mx-3 border-blue-500 text-blue-600 border-2 rounded-3xl px-4 py-1.5 font-sans font-bold hover:scale-110">Sign in</button>
            </div>
        </nav>   
    )
}


export default HomeHeader;