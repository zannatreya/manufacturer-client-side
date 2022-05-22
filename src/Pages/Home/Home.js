import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import FlashSales from './FlashSales';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <FlashSales></FlashSales>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;