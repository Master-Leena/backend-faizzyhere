import express from 'express';
import { allcommentsData } from './commentData.js';




export const commentRoute = express.Router();



commentRoute.get('/',(req, res)=>{
    res.status(200).send({status:200, message: "Success", comments: allcommentsData})
})