import express from 'express';
import { alltodoData } from './todoData.js';


export  const todoRoute = express.Router();


todoRoute.get('/',(req, res)=>{
    res.status(200).send({status: 200, message: "Success", todo: alltodoData})
})



