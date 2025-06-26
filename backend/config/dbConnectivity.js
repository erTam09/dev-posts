const mongoose=require("mongoose");

const myDb= async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log('DB connected');
    
}

module.exports=myDb;