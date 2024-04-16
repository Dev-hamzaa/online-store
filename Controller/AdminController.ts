import { NextFunction, Request, Response } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../Model";



export const createVandor=async(req:Request,res:Response,next:NextFunction)=>{

const {name,ownerName,phone,password,email,foodType,address,pincode}=<CreateVandorInput>req.body

const exsistingVandor=Vandor.findOne({email:email})
if(exsistingVandor!==null){
    return res.json({"message":"Vandor already exsist"})
}
const createVandor=await Vandor.create(
    {
        name:name,
        ownerName:ownerName,
        pincode:pincode,
        phone:phone,
        email:email,
        password:password,
        foodType:foodType,
        address:address,
        salt:'',
        rating:0,
        serviceAvailable:false,
        coverImages:[]
    }
)
return res.json({createVandor})
}



export const getVandor=async(req:Request,res:Response,next:NextFunction)=>{

const allVandors= await Vandor.find()
if(allVandors!==null){
return res.json({allVandors})
}else{
    return res.json({"message":"no vandor is found"})
}
}


export const getVandorById=async(req:Request,res:Response,next:NextFunction)=>{



}
