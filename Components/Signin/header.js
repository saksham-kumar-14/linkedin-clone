import { useRouter } from "next/router";

const SigninHeader = () => {
    const router = useRouter();

    return(
        <div className="px-10 py-6">
            <img onClick={()=>{
                router.push("/")
            }} className="h-8 cursor-pointer" src="/logo-with-text.svg"></img>
        </div>
    )
}

export default SigninHeader;