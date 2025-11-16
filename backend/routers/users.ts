import { Router } from 'express';
import {Users} from '../db/schema.ts'
import z from 'zod'

export const router = Router()

router.post('/signup', async(req,res) =>{
    const ReqSchema = z.object({ 
                        name: z.string(),
                        email: z.email(),
                        password: z.string().min(8)
                        });
    const r =ReqSchema.safeParse(req);
    if(r.success){
        await Users.create({
        name : req.body.name,
        email: req.body.email,
        password: req.body.password
    })
     res.status(200).json({})
    }
    else {
         res.status(400).json({"error":r.error})
    }
    
   
})

router.post('/signin', async(req,res) =>{
    const reqSchema = z.object({ 
                        email: z.email(),
                        password: z.string().min(8)
                        });
                        
    const user = await Users.findOne({
        email: req.body.email,
        password: req.body.password
    }).exec();
    
    if(user==null){
        res.status(400).json({"error":"user does not exist"})
    }
    else{
        res.status(200).json({"token":user})
    }
})
