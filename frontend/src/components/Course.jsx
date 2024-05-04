import React, { useState, useEffect } from 'react'
// import list from '../../public/list.json'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Course = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/v1/book')
                console.log(res.data)
                setBooks(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getBook();
    }, [])
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">We 're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
                    <p className="mt-12"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus necessitatibus rerum quidem quibusdam atque numquam nulla dolores tempore unde. Dolorum modi eveniet sint architecto est ex omnis. Deserunt, minus?</p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200">Back</button>
                    </Link>
                </div>

                <div className="mt-12 grid grid-col-1 md:grid-cols-4">
                    {
                        books.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
