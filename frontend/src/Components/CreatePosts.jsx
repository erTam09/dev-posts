import React, { useState } from 'react'
import base_url from '../constant';
import axios from 'axios';
const CreatePosts = () => {
    const [formData, setFormdata]=useState({
        title:'',
        content:''
    })
     function handleInut(e){
            setFormdata({
                ...formData , 
                [e.target.name]:e.target.value
            })
    }

    async function handleSubmit(e){
        e.preventDefault();
        const post=await axios.post(`${base_url}post`, formData);
        console.log('Post created succesfully',post);
        
    }

  return (
    <div className='m-10 border-1 rounded-sm shadow-md'>
         <form onSubmit={handleSubmit}>
            <input type="text" name="title" id=""  value={formData.title}   onChange={handleInut} placeholder='Write title' className='border-0 border-b-2'/><br /><br />
            <input type="text" name="content" id="" value={formData.content} onChange={handleInut} placeholder='Write Content' className='border-0 border-b-2'/><br /><br />
            <input type="submit" value="Create Post" className='bg-purple-800 p-2 rounded-sm w-24 text-white font-semibold'/>
         </form>
    </div>
  )
}

export default CreatePosts



//constt [data, setDta]
//<input type="text" value={data} onChange={(e)=>{setData(e.target.valu)}}