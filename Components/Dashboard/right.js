import Articles from "./articles"
import {InformationCircleIcon} from '@heroicons/react/solid'
import { useState } from "react/cjs/react.development"
import { useEffect } from "react"

const DashboardRight=({dark_mode})=>{
    const [articles,set_articles] = useState(Articles)
    useEffect(()=>{
        let arr = [];
        articles.map((e)=>{
            if(e.body.length > 35){
                e.body = e.body.slice(0,35) + " ..."
            }
            arr.push(e);
        })
        set_articles(arr);
    },[])
    return(
        <div className={dark_mode?"text-white flex flex-col items-center overflow-y-scroll h-[88vh]":
        "text-black flex flex-col items-center overflow-y-scroll h-[88vh]"}>
            <div className={dark_mode?"bg-gray-700 mt-8 w-[75%] rounded-2xl py-5 px-4":
        "bg-white mt-8 w-[75%] rounded-2xl py-5 px-4"}>
                <div className="grid grid-cols-2">
                    <span className="font-bold text-[1.15rem]">LinkedIn News</span>
                    <div className="flex justify-end">
                        <InformationCircleIcon className="h-8 cursor-pointer"/>
                    </div>
                </div>
                {articles.map((e)=>{
                    return(
                        <div className={dark_mode?"flex items-center my-3 duration-500 hover:bg-gray-600 cursor-pointer rounded-lg py-1":
                        "flex items-center my-3 duration-500 hover:bg-gray-200 cursor-pointer rounded-lg py-1"}>
                            <span className="mx-2">●</span>
                            <div className="flex flex-col">
                                <span className="">{e.body}</span>
                                <span className={dark_mode?"text-gray-300 text-[0.9rem]":
                            "text-gray-500 text-[0.9rem]"}>{e.time}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <img src="/Dashboard-Promo-Image.jpg" className="cursor-pointer w-[75%] my-4 rounded-2xl"></img>
        </div>
    )
}

export default DashboardRight;