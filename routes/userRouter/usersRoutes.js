import express from 'express';
import { allusersData } from './usersData.js';


export  const usersRoute = express.Router();



usersRoute.get('/',(req, res)=>{
    res.status(200).send({status: 200, message:"Success", users: allusersData})
})