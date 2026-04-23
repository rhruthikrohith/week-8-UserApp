import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import { UserApp } from "./APIs/USERAPI.js";
import cors from 'cors'
//read environment variables
config()
const app=exp()

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://week-8-user-app.vercel.app',
    ];

    const vercelPreview = /^https:\/\/week-8-user-app.*\.vercel\.app$/;

    if (!origin || allowedOrigins.includes(origin) || vercelPreview.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
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
    
    
