const express=require("express");
const server=express();
const dotenv=require("dotenv");
const cors=require("cors");
const myDb = require("./config/dbConnectivity");
const postRouter=require('./Routes/post.routes');

//
dotenv.config();

//middl
server.use(express.json());
server.use(cors());
server.use('/api', postRouter)


server.listen(process.env.PORT, async()=>{
    await myDb();
    console.log(`Server started and listening at http://localhost:${process.env.PORT}`);
    
})

