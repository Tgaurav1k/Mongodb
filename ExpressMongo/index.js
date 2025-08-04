import mongoose from 'mongoose';
import express from "express";
import { Todo } from "./Models/Todo.js";

const connectt = mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    const todo = new Todo({name:'My first todo ',desc:'Description of the todo',
    isDone:false,
    days:3,
})
    todo.save()
    res.send('Hello Gaurav')
} )

app.get('/a',async(req,res)=>{
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({name:todo.name,desc:todo.desc})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

