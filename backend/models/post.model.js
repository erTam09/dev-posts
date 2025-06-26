const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    }
}, {timestamps:true})


const PostModel=mongoose.model('posts', postSchema);

module.exports=PostModel;