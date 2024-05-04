import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
}, {
    timeStamps: true
})

const Book = mongoose.model("Book", bookSchema)

export default Book
