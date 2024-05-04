import express from "express";
import cors from "cors";
import bookRouter from './routes/bookRouter.js'
import userRouter from './routes/userRouter.js'

const app = express();



//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//endpoints
app.use('/api/v1/book', bookRouter)
app.use('/api/v1/users', userRouter)

export default app;
