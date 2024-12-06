import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import { commentRoute } from './routes/commentRouter/commentRoutes.js';
import { postingRoute } from './routes/postRouter/postingRoutes.js';
import { albumRoute } from './routes/albumRouter/albumRoutes.js';
import { errorRoute } from './routes/errorRoutes.js';
import { photoRoute } from './routes/photoRouter/photoRoutes.js';
import { todoRoute } from './routes/todoRouter/todoRoutes.js';
import { usersRoute } from './routes/userRouter/usersRoutes.js';


const app  = express();
dotenv.config();

// app.use(cors());

app.get('/',(req, res)=>{
    res.status(200).send('Wellcome to backend startup new jurney happy life')
})



app.use('/post', postingRoute)
app.use('/comments', commentRoute)
app.use('/album', albumRoute)
app.use('/photos', photoRoute )
app.use('/todos', todoRoute)
app.use('/users',usersRoute )
app.use('/*', errorRoute)


// app.get('/posting',(req, res)=>{
// res.status(200).send({status: 200, message: "post data success", data: postData})
// })

// app.get('/product/:id',(req, res)=>{
// const id = req.params.id;
// res.status(200).send(` id successfully get ===  ${id}`)
// })


// app.get('*',(req, res)=>{
//     res.status(404).send("page not found")
// })


const PORT = process.env.PORT
app.listen(PORT,()=>{
console.log(`Server is started on port ${PORT}`)
})
