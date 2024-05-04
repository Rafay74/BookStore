import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import app from './app.js'
dotenv.config()

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("Mongo Db connection failed!!!", err)
    })

// const app = express()
// const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
