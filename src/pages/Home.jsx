import React from 'react'
import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Navbar } from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { ProductItem } from '../components/ProductItem'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar>
            </Navbar>
            <Slider></Slider>
            <Categories/>
            <ProductItem />
            <Newsletter/>
            <Footer/>
        </div>
    )
}
