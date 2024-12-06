import express from 'express';
import { allphotoData } from './photoData.js';



export  const photoRoute = express.Router();

photoRoute.get('/',(req, res)=>{
res.status(200).send({status: 200, message: "Success", photo: allphotoData})
})