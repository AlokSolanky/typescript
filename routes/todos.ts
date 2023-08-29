import { Router } from "express";

import {todo} from '../models/todo'

const todos : todo [] = [];

const router = Router();

router.get('/',(req,res,next)=>
{
    res.status(200).json({todos:todos});
})
router.post('/todo',(req,res,next)=>
{
    // console.log(req.body.text);
    const newTodo:todo = {
        id:new Date().toISOString(),
        text:req.body.text
    }
    todos.push(newTodo);
    res.status(200).json({success:true});
})
router.delete('/todo/delete',(req,res)=>
{
    let count : number = 0;
    todos.forEach(el => {
        
        if(el.id === req.body.id)
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
    todos.forEach(el=>
        {
            if(el.id === req.body.id)
            {
                el.text = req.body.text;
                res.status(200).json({success:true});
            }
        })
        res.status(400).json({success:false});
})
export default router;
