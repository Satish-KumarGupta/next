import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';

type Data = {
    id: number,
    title:"string",
    body:"string"
};
export default function handler(req:NextApiRequest,res:NextApiResponse<Data>){
   
    fs.readFile("blogPostData/post.json","utf-8",(error,data)=> {
        res.status(200).json(JSON.parse( data))
    });

    // fs.readdir("blogPostData",(error,data)=> {
    //     res.status(200).json( data)
    // });


}