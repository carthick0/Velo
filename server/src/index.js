const express=require("express");
const apiRoutes=require("./routes");
const {PORT}=require("./config/server-config");
const connectDB=require("./config/db-config");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello Worldd");
});     

app.use("/api",apiRoutes);

app.listen(PORT,async()=>{
    console.log(`Server is running on port ${PORT}`);
    try {
        await connectDB();
        console.log("Connected to the database");
    } catch (error) {
        console.error("Database connection failed", error);
    }
    
});