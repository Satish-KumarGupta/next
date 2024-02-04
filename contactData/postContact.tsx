import * as fs from 'fs';
import { NextRequest,NextResponse } from '../node_modules/next/server';

export default async function handler(req:NextRequest,res:NextResponse){
    if(req.method === 'POST'){
        let data=await fs.promises.readdir('contactData');
        fs.promises.writeFile(`contactData/${data.length+1}.json`,JSON.stringify(req.body))
        res.status(200).send(req)
    }
    else{
        res.status(200).json(["allblog"])

    }
}