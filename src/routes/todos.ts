import { Router } from "express";

import {todo} from '../models/todo'

const todos : todo [] = [];

const router = Router();

type requestBody = {text:string};
type requestParams = {id:string};


router.get('/',(req,res,next)=>
{
    res.status(200).json({todos:todos});
})
router.post('/todo',(req,res,next)=>
{
    const body = req.body as requestBody;
    const newTodo:todo = {
        id:new Date().toISOString(),
        text:body.text
    }
    todos.push(newTodo);
    res.status(200).json({success:true});
})
router.delete('/todo/delete',(req,res)=>
{
    const body = req.body as requestParams;
    let count : number = 0;
    todos.forEach(el => {
        
        if(el.id === body.id)
        {
            todos.splice(count,1);
            res.status(200).json({success:true});
        }  
        count ++;      
    });
    res.status(400).json({success:false});
})
router.put('/todo/update',(req,res)=>
{
    const body = req.body as requestParams;
    todos.forEach(el=>
        {
            if(el.id === body.id)
            {
                el.text = req.body.text;
                res.status(200).json({success:true});
            }
        })
        res.status(400).json({success:false});
})
export default router;
