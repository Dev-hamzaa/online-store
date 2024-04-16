import express,{ NextFunction, Request, Response} from 'express'
import { createVandor, getVandor, getVandorById } from '../Controller'



const router=express.Router()


router.get('/',(req:Request,res:Response,next:NextFunction)=>{

    res.json({message:"Heelo from admin hamza"})
})


router.post('/vandor',createVandor)
router.get('/vandor',getVandor)
router.get('/vandor/:id',getVandorById)

export {router as AdminRoute}