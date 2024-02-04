import React, { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
interface blogtype {
  title: string;
  content: string;
  author: string;
  metadesc: string;
  slug: string;
}
const Blog = (props:blogtype) => {
  console.log(props);
  const {allblog} =props;
  // const [blogs, setBlogs] = useState(allblog);
  // useEffect(() => {
  //   // const fetchData = async () => {
  //     // const response=await fetch('http://localhost:3000/api/blogs')
  //     // const data= await response.json()
  //     // console.log(data);
  //     // or
  //   // };
  //   fetch(`http://localhost:3001/api/blogs`)
  //   .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => setBlogs(data));
  //   // fetchData();
  // }, []);
  return (
    <div className="max-w-4xl items-center  m-auto">
      <h2 className="text-xl py-2 ">Blog posts</h2>
      {/* {JSON.stringify(blogs)} */}
      {allblog?.map((blog, index) => {
        return (
          <>
            <div className="bg-gray-300 p-1">
              <Link href={`/blog/${blog.slug}`}>{blog?.title}</Link>
            </div>
            <div className="bg-white py-3 ">
              {blog.metadesc}
            <p className="">{blog.content.substring(0,100)}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};
export async function getServerSideProps(){
        const response=await fetch('http://localhost:3000/api/blogs')
      const allblog= await response.json()
      return {
          props: {allblog}
      }
}
export default Blog;
