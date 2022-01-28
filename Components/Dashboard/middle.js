import { useState } from "react";
import DashboardMiddleHeader from "./middle_header";
import DashboardMiddlePosts from "./middle_posts";

const DashboardMiddle=({dark_mode, posts,set_posts, set_start_post})=>{
    

    return(
        <div className="h-[88vh] overflow-y-scroll pb-5">
            <DashboardMiddleHeader dark_mode={dark_mode} posts={posts} set_posts={set_posts} set_start_post={set_start_post}/>
            <DashboardMiddlePosts dark_mode={dark_mode} posts={posts} set_posts={set_posts}/>
        </div>
    )
}

export default DashboardMiddle;