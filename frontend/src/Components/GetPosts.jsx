import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../constant";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
const GetPosts = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState();

  useEffect(() => {
    async function post() {
      try {
        const res = await axios.get(`${base_url}post`);
        const finalRes = res.data;
        //  console.log(finalRes);
        const finalPosts = finalRes.posts;
        //  console.log('Final posts', finalPosts);
        setResult(finalPosts);
       
      } catch (err) {
        console.log(err);

      }
    }
    post();
  });
  async function handleDelete(id) {
    try{
       const res= await axios.delete(`${base_ur}post/${id}`);

       const finalData=res.data;
       toast.success(finalData.message);
      
    }catch(err){
      console.log(err);
      toast.error('Please try again.')
      
    }
  
  }
  return (
    <div className="flex flex-wrap mt-5 ml-5 space-x-4">
      {result &&
        result.map((post) => (
          <div
            key={post._id}
            className="rounded-sm shadow-lg shadow-gray-800 p-5"
          >
            <h1 className="font-bold text-xl">{post.title}</h1>
            <p>{post.content}</p>
            <div className="flex space-x-2 mt-3">
              <button
                className="bg-green-800 w-20 p-2 text-white font-medium rounded-sm"
                onClick={() => navigate(`/post/${post._id}`)}
              >
                Edit
              </button>
              <button
                className="bg-red-800 w-20 p-2 text-white font-medium rounded-sm"
                onClick={() => handleDelete(post._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GetPosts;
