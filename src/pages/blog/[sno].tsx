import { useRouter } from "../../../node_modules/next/router";

 
const Post=()=>{
    const router=useRouter()
    const {sno}=router.query;
    console.log(sno);
    return(
        <div className="max-w-xl m-auto items-center p-2">
            
        <p className="font-bold">The Blog title is {sno}</p>
        
        <p>The description of blog post of JavaScript to learn</p>
        </div>
    )
}
export default Post;