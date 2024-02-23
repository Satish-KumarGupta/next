// import type { NextApiRequest, NextApiResponse } from "next";
// import * as fs from 'fs';
// import path from "path";

// export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
//     try{

//     }catch(error){
//         res.status(500).json({error:"Internal server error"})
//     }

//     let data=await fs.promises.readdir("blogPostData");
//     data=data.slice(0,parseInt(req?.query?.count))
//     let myfile;
//     let allblog:any[]=[];

//     await Promise.all(data.map(async(item)=>{  
//        myfile=await fs.promises.readFile(("blogPostData/"+item),'utf-8');
//        allblog.push(JSON.parse(myfile))
//     }));    
//     res.status(200).json(allblog)

//     // fs.readFile("blogPostData/post.json","utf-8",(error,data)=> {
//     //     res.status(200).json(JSON.parse( data))
//     // });

//     // fs.readdir("blogPostData",(error,data)=> {
//     //     res.status(200).json( data)
//     // });

// }

import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';
import path from 'path';

interface ErrorResponse {
    error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Check if the "blogPostData" directory exists
        const blogDataDir = path.join(process.cwd(), "blogPostData");
        const isDirExists = await fs.promises.stat(blogDataDir).then(stat => stat.isDirectory()).catch(() => false);
        if (!isDirExists) {
            throw new Error("Blog data directory not found");
        }

        // Parse and validate the count parameter
        const count = parseInt(req.query.count as string);
        if (isNaN(count) || count <= 0) {
            throw new Error("Invalid or missing count parameter");
        }

        // Read directory and slice data based on count
        const data = await fs.promises.readdir(blogDataDir);
        const slicedData = data.slice(0, count);

        // Read files, parse JSON, and collect blog data
        const allblog: any[] = [];
        await Promise.all(slicedData.map(async (item) => {
            try {
                const filepath = path.join(blogDataDir, item);
                const myfile = await fs.promises.readFile(filepath, 'utf-8');
                const parsedBlog = JSON.parse(myfile);
                allblog.push(parsedBlog);
            } catch (error) {
                console.error(`Error reading/parsing file ${item}:`, error);
                // Continue processing other files even if one fails
            }
        }));

        // If no blogs are found, return a 404 error
        if (allblog.length === 0) {
            return res.status(404).json({ error: "No blogs found" } as ErrorResponse); // Type assertion here
        }

        // Send response with collected blog data
        res.status(200).json(allblog);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" } as ErrorResponse); // Type assertion here
    }
}
