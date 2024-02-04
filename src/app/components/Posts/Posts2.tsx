"use client"

import React from "react";
import { useQuery } from "react-query";
import PostCard from "../stateless/PostCard/PostCard";
import { usePostsQuery } from "@/services/post-service/postService";

const Posts2: React.FC = () => {
    const { data, isLoading, error } = usePostsQuery()
    
    if(isLoading) return <>Loading...</>
    console.log("🚀 ~ data:", data)

    return (
        <div>
            <h2 className="text-xl font-black">I&apos;m post 2</h2>
            {data && data.map((post) => <PostCard key={post.id} title={post.title} body={post.body} />)}
        </div>
    )
}

export default Posts2;