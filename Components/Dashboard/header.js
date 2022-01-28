import { HomeIcon, UsersIcon, ShoppingBagIcon, AnnotationIcon, BellIcon,
     ViewGridAddIcon, SunIcon, MoonIcon, SearchIcon } from '@heroicons/react/solid' 
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const DashboardHeader=({dark_mode, set_dark_mode})=>{
    const header_items = [ {
        "name" : "Home",
        "icon" : <HomeIcon className={dark_mode?"h-6 rounded-full text-gray-300 hover:text-white duration-500" : "duration-500 h-6 rounded-full text-gray-500 hover:text-black"} />
    },{
        "name" : "My Network",
        "icon" : <UsersIcon className={dark_mode?"h-6 rounded-full text-gray-300 hover:text-white duration-500" : "duration-500 h-6 rounded-full text-gray-500 hover:text-black"} />
    },{
        "name" : "Jobs",
        "icon" : <ShoppingBagIcon className={dark_mode?"h-6 rounded-full text-gray-300 hover:text-white duration-500" : "duration-500 h-6 rounded-full text-gray-500 hover:text-black"} />
    },{
        "name" : "Messaging",
        "icon" : <AnnotationIcon className={dark_mode?"h-6 rounded-full text-gray-300 hover:text-white duration-500" : "duration-500 h-6 rounded-full text-gray-500 hover:text-black"} />
    },{
        "name" : "Notifications",
        "icon" : <BellIcon className={dark_mode? "h-6 rounded-full text-gray-300 hover:text-white duration-500" : "duration-500 h-6 rounded-full text-gray-500 hover:text-black"} />
    },{
        "name" : "Me",
        "icon" : <img className={dark_mode? "h-6 rounded-full text-gray-300 hover:text-white duration-500" : "duration-500 h-6 rounded-full text-gray-500 hover:text-black"} src='/codedamn.png'></img>
    },{
        "name" : "Work",
        "icon" : <ViewGridAddIcon className={dark_mode? "h-6 rounded-full text-gray-300 hover:text-white duration-500" : "duration-500 h-6 rounded-full text-gray-500 hover:text-black"}/>
    } ]
    const router = useRouter()

    return(
        <div className= {dark_mode?"grid grid-cols-2 bg-gray-700":"grid grid-cols-2 bg-white"}>
            <div className='flex items-center'>
                <img className='h-16 ml-16 cursor-pointer' onClick={()=>{
                    router.push("/")
                }} src="/linkedin-icon.svg"></img>
                <SearchIcon className={dark_mode?"text-white h-8 cursor-pointer":"text-black h-8 cursor-pointer"}/>
                <input className={dark_mode?"h-8 mx-2 w-[50%] outline-none px-2 py-6 rounded-md bg-gray-600 placeholder:text-gray-300 text-white":
                "h-8 mx-2 w-[50%] outline-none px-2 py-6 rounded-md"} placeholder="Search" />
            </div>

            <div className='flex items-center'>
            <div className='flex items-center justify-center'>
                {header_items.map((e)=>{
                    return(
                        <div className={dark_mode?'cursor-pointer flex flex-col justify-center items-center mx-[0.75rem] duration-300 hover:text-black hover:border-b-4 hover:border-white':
                        'cursor-pointer flex flex-col justify-center items-center mx-[0.75rem] duration-300 hover:text-black hover:border-b-4 hover:border-black'}>
                            {e.icon}
                            <span className={dark_mode?"text-white":"text-black"}>{e.name}</span>
                        </div>
                    )
                })}
            </div>

                {dark_mode ? 
                    <div className='flex justify-center items-center bg-gray-500 rounded-3xl p-1'>
                    <MoonIcon className='h-8 text-yellow-400'/>
                        <button onClick={()=>{
                            set_dark_mode(false)
                        }} className='p-3 rounded-3xl bg-white'></button>
                    </div>
                : 
                <div className='flex justify-center items-center bg-gray-500 rounded-3xl p-1'>
                    <button onClick={()=>{
                        set_dark_mode(true)
                    }} className='p-3 rounded-3xl bg-white'></button>    
                    <SunIcon className='h-8 text-orange-500'/>
                </div>}
            </div>

        </div>
    )
}

export default DashboardHeader;