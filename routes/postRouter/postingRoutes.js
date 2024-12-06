import express from 'express';
import allpostData from './postingData.js';


 export  const postingRoute = express.Router();

 postingRoute.get('/',(req, res)=>{
res.status(200).send({status: 200, message: "Success", post: allpostData})
})


 postingRoute.get('/:id',(req, res)=>{

res.status(200).send({status: 200, message: "id successfully get", data:[]})
})
