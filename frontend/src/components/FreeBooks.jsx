import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBooks = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/v1/book')
                console.log(res.data)
                setBooks(res.data.filter((data) => data.category === "free"))
            } catch (error) {
                console.log(error)
            }
        }
        getBooks()
    }, [])
    // const filterBooks = list.filter((books) => {
    //     return books.category === "free"
    // })
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae deleniti assumenda autem ratione. Nisi obcaecati nesciunt consectetur omnis quo corporis nam aspernatur laborum beatae, vero doloremque officia asperiores modi!</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {books.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default FreeBooks
