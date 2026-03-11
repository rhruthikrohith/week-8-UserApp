import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import { UserApp } from "./APIs/USERAPI.js";
import cors from 'cors'
//read environment variables
config()
const app=exp()

app.use(cors());
app.use(exp.json());
app.use("/user-api",UserApp);
async function connectDB() {
    try{
    await connect(process.env.DB_URL)
    console.log("db connection success")
    // It stores data in documents
    app.listen(process.env.PORT,()=>console.log("server started"))
    }
    catch(err)
    {
console.log("error",err)
    }
}
connectDB()
    
    
