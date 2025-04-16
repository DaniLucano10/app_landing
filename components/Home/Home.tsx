import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnalyticsFeature from './AnalyticsFeature/AnalyticsFeature'
import Feature from './Feature/Feature'

const Home = () => {
    return (
        <div className='overflow-hidden '>
            <Hero />
            <WhyChoose />
            <AnalyticsFeature />
            <Feature />
        </div>
    )
}

export default Home
