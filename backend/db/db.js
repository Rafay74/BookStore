import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'


const connectDB = async () => {
    const title = "connectDB ::"
    try {
        console.log("process.env.MONGODB_URL :", process.env.MONGODB_URL)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}${DB_NAME}`)
        console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host}`)
        console.log(`\n MONGODB CONNECTED !! DB NAME: ${connectionInstance.connection.name}`)

    } catch (error) {
        console.log(`MONGODB Connection FAILED`, error)
        process.exit(1)
    }
}

export default connectDB;
