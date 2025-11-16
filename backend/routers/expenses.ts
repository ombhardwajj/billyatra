import { Router } from 'express';
import z from 'zod'
import { Users } from '../db/schema.ts';
export const router = Router()

router.post('/add', async(req,res) =>{

    const ReqSchema = z.object({ 
                            name: z.string(),
                            description: z.email(),
                            amount: z.number,
                            tags:z.array
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

router.post('/update',(req,res) =>{
    
})

router.get('/',(req,res) =>{
    
})
