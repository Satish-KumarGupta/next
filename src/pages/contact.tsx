import React, { useState } from 'react'
interface inputprops{
    name:string;
    email:string;
    phone:string;
    message:string;
    password:string;
}
const Contact = () => {
    const [data,setData]=useState<inputprops>({
        "name":'',
        "email":'',
        "phone":'',
        "message":'',
        "password":'',
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>):void=>{
        const {name,value}=e.target;
        setData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        console.log(data);
        fetch('http://localhost:3000/api/postcontact',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((res)=> res.text())
        .then(data=>{
            console.log("success",data);
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='flex flex-col justify-center items-center py-4'>
        <h1 className='p-4'>Contact Us</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='mb-3 flex flex-col rounded'>  
                <label >Enter your name</label>
                <hr />
                <input type={"text"} id="name" name='name' value={data.name} className='border' onChange={handleChange} />
            </div>
            <div  className='mb-3 flex flex-col rounded'>  
                <label >Enter your email</label>
                <input type={"email"} id="email" name='email' value={data.email}  className='border' onChange={handleChange}/>
            </div>
            <div  className='mb-3 flex flex-col rounded'>  
                <label >Enter your phone</label>
                <input type={"text"} id="phone" name='phone' value={data.phone} className='border' onChange={handleChange}/>
            </div>
            <div  className='mb-3 flex flex-col rounded'>  
                <label >Enter your password</label>
                <input type={"password"} id="password" name='password' value={data.password} className='border' onChange={handleChange}/>
            </div>
            <div  className='mb-3 flex flex-col rounded'>  
                <label >Enter your message</label>
                <textarea  id="message" name='message' value={data.message} className='border' onChange={handleChange}/>
            </div>
            <button type='submit'>Save</button>
        </form>

    </div>
  )
}

export default Contact;