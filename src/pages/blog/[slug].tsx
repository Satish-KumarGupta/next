import { useEffect, useState } from "react";
import { useRouter } from "../../../node_modules/next/router";
import * as fs from 'fs';
interface blogtype {
    title: string;
    content: string;
    author: string;
    metadesc: string;
    slug: string;
  }
const Post=(props:blogtype)=>{
    console.log(props);
    const {myblog}= props;
    
    const [blog,setBlog]=useState<blogtype>(myblog) 
    return(
        <div className="max-w-xl m-auto items-center p-2">
            
        <p className="font-bold">{blog?.title}</p>
        <p>{blog?.content}</p>
        </div>
    )
}

// export async function getStaticPaths(){
//   let allb=await fs.promises.readdir('blogPostData')
//   allb=allb.map((item)=> {
//     return { params:{slug: item.split(".")[0]} }
//   })
//   console.log(allb);
//   return{
//     paths:allb,
//     fallback:true
//   };
// }

export async function getServerSideProps(context:any){
   
    const {slug}=context.query;
    console.log(slug);
    
    const response=await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    const myblog= await response.json()
  return {
      props: {myblog}
  }
}
export default Post;