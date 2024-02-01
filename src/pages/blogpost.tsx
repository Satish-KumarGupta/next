import React, { useEffect } from "react";
import Link from "../../node_modules/next/link";

const Blog = () => {
  useEffect(()=>{
    
  },[])
  return (
    <div className="max-w-4xl items-center m-auto">
      <h2>Blog posts</h2>
      <div>
        <div className="bg-gray-300 p-1">
          <Link href={'/blog/learn'}>How to learn js</Link>
        </div>
        <p className="bg-white">
          JavaScript is used to design logic for the web
        </p>
      </div>
      <div className="bg-gray-300 p-1">
        <h1 className=" ">How to learn js</h1>
      </div>
      <p className="bg-white">JavaScript is used to design logic for the web</p>
      <div className="bg-gray-300 p-1">
        <h1 className=" ">How to learn js</h1>
      </div>
      <p className="bg-white">JavaScript is used to design logic for the web</p>
    </div>
  );
};

export default Blog;
