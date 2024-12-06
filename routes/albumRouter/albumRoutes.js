import express from 'express';
import { albumData } from './albumData.js';



export const albumRoute = express.Router();



albumRoute.get('/',(req, res)=>{
    res.status(200).send({status: 200, message: "Success", album: albumData})
})