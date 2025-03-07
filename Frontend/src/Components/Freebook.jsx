import React from 'react';
import  {useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";
function Freebook() {

    const[book,setBook]=useState([])
    useEffect(()=>{
      const getBook=async()=>{
        try {
          const res =await axios.get("http://localhost:3001/book");
          
          const data=res.data.filter((data) => data.category === "Free");
          console.log(data)
          setBook(data)

        } catch (error) {
          console.log(error)
        }
       
      }
      getBook();
    },[])
    

    const settings = { // No need for 'var' here, 'const' is preferred
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
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-2xl text-purple-600 pb-2'>Open-Pages</h1>
                    <p>Dive into Engineering Knowledge: A Treasure Trove of Free Resources-</p>
                    <p >Engineering is a vast and ever-evolving field, demanding constant learning and adaptation. Luckily, the digital age has opened up access to a wealth of free resources, empowering aspiring and seasoned engineers alike to expand their knowledge without breaking the bank.</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {book.map((item) => ( // Use 'item' here, not 'items'
                            <Cards item={item} key={item.id || item.title || Math.random()} /> // Corrected key prop
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;