import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';

type Data = {
    name: string;
  };
export default function handler(req:NextApiRequest,res:NextApiResponse<Data>){
    fs.readFile("blogPostData/post.json","utf-8",(error,data)=> {
        console.log(data);
        
    })
    res.status(200).json({name:"satish kumar"})
}