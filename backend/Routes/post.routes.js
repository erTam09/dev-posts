const express=require("express");
const { createPost, getPosts } = require("../controllers/post.controller");
const router=express.Router();


//create rooutes handling
router.post('/post', createPost)




//get routes handling
router.get('/post', getPosts)


module.exports=router;