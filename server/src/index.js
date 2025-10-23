const express=require("express");
const {PORT}=require("./config/server-config");
const connectDB=require("./config/db-config");
const userRoutes=require('./routes/userRoutes');
const driverRoutes=require('./routes/driverRoutes');
const adminRoutes=require("./routes/adminRoutes");
const app=express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use('/api/user', userRoutes );
app.use('/api/driver',driverRoutes);
app.use('/api/admin',adminRoutes);

app.get("/",(req,res)=>{
    res.send("Hello Worldd");
});     


app.listen(PORT,async()=>{
    console.log(`Server is running on port ${PORT}`);
    try {
        await connectDB();
        console.log("Connected to the database");
    } catch (error) {
        console.error("Database connection failed", error);
    }
    
});