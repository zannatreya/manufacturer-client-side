import React, { useEffect, useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import ShowReviews from '../Dashboard/ShowReviews';
import Footer from '../Shared/Footer';
import PrimaryButton from '../Shared/PrimaryButton';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import FlashSales from './FlashSales';
import Testimonials from './Testimonials';
import Tool from './Tool';

const Home = () => {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='px-12'>
            <Banner></Banner>
            <div>
                <div className='text-center py-16'>
                    <h3 className='text-primary font-bold text-xl  uppercase'>Our Services</h3>
                    <h2 className='text-4xl'>Services we provide</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        tools.slice(0, 3).map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>
                <div className='text-center py-8'>
                    <button className='btn btn-design' onClick={() => navigate("/tools")}>See All Tools</button>

                </div>

            </div>

            {/* <FlashSales></FlashSales> */}
            <BusinessSummary></BusinessSummary>
            <Testimonials></Testimonials>
            {/* <ShowReviews></ShowReviews> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;