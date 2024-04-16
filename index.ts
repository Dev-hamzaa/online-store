import express from "express";
import bodyParser from 'body-parser'
import { AdminRoute,VandorRoute } from "./Routes";
import mongoose from "mongoose";
import { dbUri } from "./Config";
const app=express();


mongoose.connect(dbUri).then(
    result=>{
  //console.log(result)
  console.log("connected to dB");
  
    }
).catch(err=>{
    console.log("error"+err);
    
})

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use('/admin',AdminRoute)

app.use('/vandor',VandorRoute)

app.listen(8000,()=>{
    console.clear()
    console.log("App is listening ")
})