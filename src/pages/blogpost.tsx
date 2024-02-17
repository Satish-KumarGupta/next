import React, { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import * as fs from 'fs';

import InfiniteScroll from '../../node_modules/react-infinite-scroll-component/dist/index';


interface BlogType {
  title: string;
  content: string;
  author: string;
  metadesc: string;
  slug: string;
}

const Blog = (props: { allblog: BlogType[], allcount: number }) => {
  const [blogs, setBlogs] = useState<BlogType[]>(props.allblog);
  const [count, setCount] = useState(2);

  // useEffect(() => {
  //   setBlogs(props.allblog);
  // }, [props.allblog]);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(prevCount => prevCount + 2);
    const data = await response.json();
    setBlogs(data);
  };

  return (
    <div className="max-w-4xl items-center m-auto">
      <h2 className="text-xl py-2">Blog posts</h2>
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchData}
        hasMore={props.allcount !== blogs.length}
        loader={<h2>...Loading</h2>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map((blog) => (
          <div key={blog.slug}>
            <div className="bg-gray-300 p-1">
              <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
            </div>
            <div className="bg-white py-3">
              {blog.metadesc}
              <p>{blog.content.substring(0, 100)}</p>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fs.promises.readdir("blogPostData");
  const allcount = data.length;
  let myfile;
  let allblog: BlogType[] = [];

  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(("blogPostData/" + item), 'utf-8');
    allblog.push(JSON.parse(myfile));
  }

  return {
    props: { allblog, allcount }
  };
}

export default Blog;
