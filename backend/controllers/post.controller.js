const PostModel = require("../models/post.model");

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      res.send("Please fill all the fiels");
    }
    const post = new PostModel({
      title: title,
      content: content,
    });
    await post.save();
    res.status(201).json({
      succes: true,
      message: "Post uploaded Succefully",
      post,
    });
  } catch (err) {
    console.log(err);
  }
};

//get posts
const getPosts = async (req, res) => {
  const posts = await PostModel.find();
  if (!posts) {
    res.send("No post fetched");
  }
  res.status(200).json({
    succes: true,
    message: "Posts fetched succefully",
    posts,
  });
};

//edit post
const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await PostModel.findByIdAndUpdate(
    id,
    {
      title: title,
      content: content,
    },
    { new: true }
  );

  if (!post) {
    res.send("Post not updated");
  } else {
    res.send(post);
  }
};

//get post by id
const getPost = async (req, res) => {
  const { id } = req.params;

  const post = await PostModel.findById(id);
  if (!post) {
    res.send("No post available");
  } else {
    res.send(post);
  }
};

//delete post
const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await PostModel.findByIdAndDelete(id);
  if (!post) {
    res.send("Post not deleted. try Again");
  } else {
    res.status(200).json({
      success: true,
      message: "Post Deleted Succefully",
    });
  }
};
module.exports = { createPost, getPosts, editPost, getPost, deletePost };
