import Book from "../models/book.model.js"

export const getBook = async (req, res) => {
    const title = "getBook ::"
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
        console.log({ title: title + 'error', details: error })
    }
}
