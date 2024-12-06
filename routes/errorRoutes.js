import express from 'express';




export const errorRoute = express.Router()

errorRoute.get('*',(req, res)=>{
res.status(404).send("page not found")

})