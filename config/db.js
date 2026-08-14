const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://dharmitsathvara29_db_user:AWgoML2qqWpI7wv4@cluster0.hdbvxbs.mongodb.net/?appName=Cluster0')

const db=mongoose.connection;
db.on("connected",()=>{
    console.log("MongoDB connected successfully");
});
db.on("disconnected",()=>{
    console.log("MongoDB disconnected ");
});
db.on("error",()=>{
    console.log("MongoDB connection error:",error);
});


module.exports = db;

