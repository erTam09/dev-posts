const express=require("express");
const { createPost, getPosts, editPost, getPost, deletePost } = require("../controllers/post.controller");
const router=express.Router();


//create rooutes handling
router.post('/post', createPost)




//get routes handling
router.get('/post', getPosts)
router.get('/post/:id', getPost);


//edit 
router.put('/post/:id', editPost)

//delelte
router.delete('/post/:id', deletePost);
module.exports=router;