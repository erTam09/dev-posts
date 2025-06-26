import React, { useEffect, useState } from 'react'
import axios from 'axios';
import base_url from '../constant';
const GetPosts = () => {
   const [result, setResult]=useState();

    useEffect(()=>{
        async function post(){
            try{
               const res=await axios.get(`${base_url}post`);
               const finalRes=res.data;
               console.log(finalRes); 
               const finalPosts=finalRes.posts;
               console.log('Final posts', finalPosts);
               setResult(finalPosts)
                       
            }catch(err){
                console.log(err);
                
            }
        }
        post();
    })
  return (
    <div className='flex flex-wrap mt-5 ml-5 space-x-4'>
          { result && result.map((post , id)=>(
            <div key={id} className='rounded-sm shadow-lg shadow-gray-800 p-5'>
                <h1 className='font-bold text-xl'>{post.title}</h1>
                <p>{post.content}</p>
                <div className='flex space-x-2 mt-3'>
                    <button className='bg-green-800 w-20 p-2 text-white font-medium rounded-sm'>Edit</button>
                    <button className='bg-red-800 w-20 p-2 text-white font-medium rounded-sm'>Delete</button>
                </div>
            </div>
          ))}
    </div>
  )
}

export default GetPosts
