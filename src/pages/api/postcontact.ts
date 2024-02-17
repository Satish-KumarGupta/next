
import { NextApiRequest, NextApiResponse } from '../../../node_modules/next';
import * as fs from 'fs';
type Data = {
    name: string;
    email:string,
    phone:string,
    message:string,
    password:string,
  };
  
export default async function handler(req:NextApiRequest,res:NextApiResponse<Data>){
    if(req.method === 'POST'){
        let data=await fs.promises.readdir('contactData');
        fs.promises.writeFile(`contactData/${data.length+1}.json`, JSON.stringify(req.body));
        res.status(200).json(req) 
    }
    else{
        res.status(200).json(["allblog"])

    }
}