
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authPayload, vandorPayload } from '../dto'
import { app_secret } from '../Config'
import { Request } from 'express'


export const generateSalt=async()=>{
    return await bcrypt.genSalt()
}

export const generatePassword=async(password:string,salt:string)=>{

return await bcrypt.hash(password,salt)
}

export const validatePassword=async(enterdPassword:string,savedPassword:string,salt:string)=>{


return await generatePassword(enterdPassword,salt)===savedPassword
}

export const generateSignature=(payload:vandorPayload)=>{
    const signature=jwt.sign(payload,app_secret,{expiresIn:'1d'})

    return signature
}

export const validateSignature= async(req:Request)=>{
        const signature=req.get('Authorization')

        if(signature){
            const payload=await jwt.verify(signature.split(' ')[1],app_secret) as authPayload

            req.user=payload

            return true
        }
        return false
}


