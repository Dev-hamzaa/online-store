import { NextFunction, Request, Response } from "express";
import { vandorLoginInputs } from "../dto";
import { findVandor } from "./AdminController";
import { generateSignature, validatePassword } from "../utility";



export const vandorLogin=async(req:Request,res:Response,next:NextFunction)=>{
    // console.log("in login-------------------------------------------------------------------");
    
    const {email,password}=<vandorLoginInputs>req.body
    const exsistingVandor=await findVandor('',email)
    if(exsistingVandor!==null){
     const validation=await validatePassword(password,exsistingVandor.password,exsistingVandor.salt)
     if(validation){
         console.log("validate ho gya h ");
         
        const signature=generateSignature({
            _id:exsistingVandor.id,
            email:exsistingVandor.email,
            foodType:exsistingVandor.foodType,
            name:exsistingVandor.name

        })
         return res.json(signature)
     }else{
    return res.json({"message":"password Credentials are not valid"})

     }
     
    }
    return res.json({"message":"LOgin Credentials are not valid"})

}

export const getVandorProfile=async(req:Request,res:Response,next:NextFunction)=>{

}
export const updateVandorProfile=async(req:Request,res:Response,next:NextFunction)=>{
    
}
export const updateVandorService=async(req:Request,res:Response,next:NextFunction)=>{
    
}