import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';


export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    
    let data=await fs.promises.readdir("blogPostData");
    data=data.slice(0,parseInt(req?.query?.count))
    let myfile;
    let allblog:any[]=[];

    await Promise.all(data.map(async(item)=>{  
       myfile=await fs.promises.readFile(("blogPostData/"+item),'utf-8');
       allblog.push(JSON.parse(myfile))
    }));    
    res.status(200).json(allblog)

    // fs.readFile("blogPostData/post.json","utf-8",(error,data)=> {
    //     res.status(200).json(JSON.parse( data))
    // });

    // fs.readdir("blogPostData",(error,data)=> {
    //     res.status(200).json( data)
    // });

}