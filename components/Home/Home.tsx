'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnalyticsFeature from './AnalyticsFeature/AnalyticsFeature'
import Feature from './Feature/Feature'
import Review from './Review/Review'
import Price from './Price/Price'
import Offer from './Offer/Offer'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true, // whether animation should happen only once - while scrolling down
                anchorPlacement: "top-bottom", // whether elements should animate out while scrolling past them
            });
        }
        initAOS();
    }, []);
    return (
        <div className='overflow-hidden '>
            <Hero />
            <WhyChoose />
            <AnalyticsFeature />
            <Feature />
            <Review />
            <Price />
            <Offer />
        </div>
    )
}

export default Home
