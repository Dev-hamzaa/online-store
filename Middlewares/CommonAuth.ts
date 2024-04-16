import { NextFunction, Request, Response } from "express";
import { authPayload } from "../dto";
import { validateSignature } from "../utility";


declare global{
    namespace Express{
            interface Request{
                    user?:authPayload
            }
    }
}

export const authenticate=async (req:Request,res:Response,next:NextFunction)=>{

    const validate=await validateSignature(req)
    if(validate){
next()
    }else{
        return res.json({
            "message":"Not verfied"
        })
    }
}