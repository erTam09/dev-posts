const PostModel = require("../models/post.model");

const createPost=async(req, res)=>{
    try{
         const {title, content}=req.body;
         if(!title || !content){
            res.send("Please fill all the fiels")
         }
         const post=new PostModel({
            title:title,
            content:content
         })
         await post.save();
         res.status(201).json({
            succes:true,
            message:'Post uploaded Succefully',
            post
         })

    }catch(err){
        console.log(err);
        
    }
}



//get posts
const getPosts=async(req, res)=>{
    const posts=await PostModel.find();
    if(!posts){
        res.send("No post fetched")
    }
    res.status(200).json({
        succes:true, 
        message:'Posts fetched succefully',
        posts
    })
}

module.exports={createPost , getPosts}