import { useRouter } from "../../../node_modules/next/router";

 
const Post=()=>{
    const router=useRouter()
    const {sno}=router.query;
    console.log(sno);
    return(
        <p>post{sno}</p>
    )
}
export default Post;