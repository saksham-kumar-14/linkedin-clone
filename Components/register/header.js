import { useRouter } from "next/router";

const RegisterHeader=()=>{
    const router = useRouter();
    
    return(
        <div className="flex flex-col items-center py-6">
            <img onClick={()=>{
                router.push("/")
            }} className="h-8 cursor-pointer" src="/logo-with-text.svg"></img>
            <span className="my-4 text-2xl">Join LinkedIn now - it's free!</span>
        </div>
    )
}

export default RegisterHeader;