import React from 'react';
import Announcements from '../Components/Announcements';
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider';
import Product from '../Components/Product';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <>
    <Announcements/>
    <Navbar/>
    <Slider/>
    <Product/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Home