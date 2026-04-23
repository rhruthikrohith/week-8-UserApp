  // create mini express app
  import exp from "express";
  export const UserApp = exp.Router();
  import { usermodel } from "../MODELS/USERMODEL.js";
  // create user
  UserApp.post('/users', async (req, res, next) => {
  try {
    console.log("BODY:", req.body); 

    const newuserdoc = new usermodel(req.body);
    await newuserdoc.save();

    res.status(201).json({ message: "user created" });
  } catch (err) {
    console.log("ERROR:", err); 
    next(err);
  }
});
  // read all users
  UserApp.get('/users', async (req, res) => {
      // fetch all users from database
      let users = await usermodel.find({ status: true });
      // send response
      res.status(201).json({ message: "all users", users });
  });
  // read user by id
  UserApp.get('/users/:id', async (req, res) => {
      // get id from URL
      let uid = req.params.id;
      // find user by id
      let user = await usermodel.findById(uid);
      // send response
      res.status(200).json({ message: "user by id found", user });
  });
  // update user by id
  UserApp.put('/users/:id', async (req, res, next) => {
    try {
      // get id from URL
      const uid = req.params.id;
      // update user in database
      const updatedUser = await usermodel.findByIdAndUpdate(
        uid,
        { $set: req.body },
        { new: true }
      );
      // send updated data
      res.status(200).json({ message: "User updated", updatedUser });
    }
    catch (err) {
      // pass error to middleware
      next(err);
    }
  });
  // delete user by id
  // delete user by id
  UserApp.patch('/users/:id',async(req,res)=>{
      // get userid 
      let userid=req.params.id
      // update user status
      let user=await usermodel.findByIdAndUpdate(userid,{$set:{status:false}},{new:true})
      // check user exists
      if(!user){
          //if not existing
          return res.status(201).json({message:"user not found"})
      }
      //if exists continue deletei
      res.status(201).json({message:"user removed"})
  })
  UserApp.use((err, req, res, next) => {
    // Mongoose validation error
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: err.errors,
      });
    }
    // Invalid ObjectId
    if (err.name === "CastError") {
      return res.status(400).json({
        message: "Invalid ID format",
      });
    }
    // Duplicate key
    if (err.code === 11000) {
      return res.status(409).json({
        message:  "Email already exists",
      });
    }
    res.status(500).json({
      message: "Internal Server Error",
    });
  });