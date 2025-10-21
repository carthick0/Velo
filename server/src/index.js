const express=require("express");
const {PORT}=require("./config/server-config");
const connectDB=require("./config/db-config");
const userRoutes=require('./routes/userRoutes');
const app=express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello Worldd");
});     


app.use('/api/user', userRoutes );

app.listen(PORT,async()=>{
    console.log(`Server is running on port ${PORT}`);
    try {
        await connectDB();
        console.log("Connected to the database");
    } catch (error) {
        console.error("Database connection failed", error);
    }
    
});