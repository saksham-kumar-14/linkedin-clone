import { ChevronRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const HomeBody1=()=>{
    const router = useRouter();

    return(
        <div className="flex flex-col content-center items-center px-12 py-3">
            <p className="w-[85%] font-sans text-amber-700 font-normal text-[2.75rem]">Welcome to your professional community</p>    

            <div className="py-10 flex flex-col w-[85%]">
                <button onClick={()=>{
                    router.push("/dashboard")
                }} className="grid grid-cols-2 bg-white rounded-2xl px-6 py-4 my-2 transition duration-300 hover:scale-110">
                    <div className="flex justify-start">
                        <span className="font-medium text-[1.25rem]">Search for a job</span>
                    </div>
                    <div className="flex justify-end">
                        <ChevronRightIcon className="h-10 transition duartion-1000 hover:translate-x-3"/>
                    </div>
                </button>
                <button onClick={()=>{
                    router.push("/dashboard")
                }} className="grid grid-cols-2 bg-white rounded-2xl px-6 py-4 my-2 transition duration-300 hover:scale-110">
                    <div className="flex justify-start">
                        <span className="font-medium text-[1.25rem]">Find a person you know</span>
                    </div>
                    <div className="flex justify-end">
                        <ChevronRightIcon className="h-10 transition duartion-1000 hover:translate-x-3"/>
                    </div>
                </button>
                <button onClick={()=>{
                    router.push("/dashboard")
                }} className="grid grid-cols-2 bg-white rounded-2xl px-6 py-4 my-2 transition duration-300 hover:scale-110">
                    <div className="flex justify-start">
                        <span className="font-medium text-[1.25rem]">Learn a new skill</span>
                    </div>
                    <div className="flex justify-end">
                        <ChevronRightIcon className="h-10 transition duartion-1000 hover:translate-x-3"/>
                    </div>
                </button>
            </div>

        </div>
    )
}

export default HomeBody1;