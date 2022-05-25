import React from 'react'
import Announcements from '../Components/Announcements'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

function Home() {
  return (
    <div>
      <Announcements></Announcements>
      <Navbar/>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  )
}

export default Home