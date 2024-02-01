import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';

type Data = {
    
    title:"string",
    content:"string",
    author:"string",
    metadesc:"string",
    slug:"string"
};
export default function handler(req:NextApiRequest,res:NextApiResponse<Data>) {

  fs.readFile(`blogPostData/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: "No such blog found" })
    }
    res.status(200).json(JSON.parse(data))
  })
}