import express ,{Request,Response,NextFunction} from "express";
import { getVandorProfile, updateVandorProfile, updateVandorService, vandorLogin } from "../Controller";
import { authenticate } from "../Middlewares";


const router=express.Router()

router.post('/login',vandorLogin)

router.use(authenticate)
router.get('/profile',getVandorProfile)
router.patch('/profile',updateVandorProfile)
router.patch('/service',updateVandorService)


export {router as VandorRoute}