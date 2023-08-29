// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/todos'

const app = express()

app.use(router);
// app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

app.listen(3000,()=>
{
console.log('listening')
})
