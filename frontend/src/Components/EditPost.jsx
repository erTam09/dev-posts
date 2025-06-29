import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import base_url from '../constant';
const EditPost = () => {
    const {id}=useParams();
     const navigate=useNavigate();
    const [formData, setFormdata]=useState({
        title:'',
        content:''
    })

    useEffect(()=>{
        async function fxn(){
             try{
              const res=await axios.get(`${base_url}post/${id}`);
              const finalRes=res.data;
              setFormdata({
                title: finalRes.title,
                content: finalRes.content
              })
        }catch(err){
            console.log(err);
            
        }
        }
       
         fxn();
    }, [id])

   
function handleInput(e){
    setFormdata({
        ...formData,
        [e.target.name]:e.target.value
    })
}

async function handleSubmit(e){
    e.preventDefault();
    await axios.put(`${base_url}post/${id}`, formData);
    navigate('/')
    

}
  return (
    <div className='bg-gray-100'>
        <form  onSubmit={handleSubmit}>
      <input type="text" name="title" id=""  value={formData.title}  onChange={handleInput} className='border-0 border-b-2 text-black' /><br /><br />
      <input type="text" name="contnet" id=""  value={formData.content} onChange={handleInput} className='border-0 border-b-2 text-black'/><br /><br />
      <button>Edit Post</button>
      </form>
    </div>
  )
}

export default EditPost
