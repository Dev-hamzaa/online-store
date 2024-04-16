import { NextFunction, Request, Response } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../Model";
import { generatePassword, generateSalt } from "../utility";


export const findVandor=async(_id:string|undefined ,email?:string)=>{

if(email){
    const vandor=await Vandor.findOne({email:email})
    return vandor
}
else{
    const vandor=await Vandor.findById({_id:_id})
    return vandor
}
}

export const createVandor=async(req:Request,res:Response,next:NextFunction)=>{

const {name,ownerName,phone,password,email,foodType,address,pincode}=<CreateVandorInput>req.body

// const exsistingVandor=Vandor.findOne({email:email})

const exsistingVandor=await findVandor('',email)
if(exsistingVandor!==null){
    return res.json({"message":"Vandor already exsist"})
}

//create salt
const salt=await generateSalt()
const encrytPassword=await generatePassword(password,salt)

//excrypt the password
const createVandor=await Vandor.create(
    {
        name:name,
        ownerName:ownerName,
        pincode:pincode,
        phone:phone,
        email:email,
        password:encrytPassword,
        foodType:foodType,
        address:address,
        salt:salt,
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

const vandorId=req.params.id
// console.log(vandorId);

// const vandor=await Vandor.findById({_id:vandorId})
const vandor=await  findVandor(vandorId)
if(vandor!==null){
    console.log(vandor.id);
    
   return res.json({
        vandor
    })
}
   return res.json({"message ":"Not Found"})


}
