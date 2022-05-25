import React from 'react';
import bg1 from "../../assets/images/slide2.jpg";
import bg2 from "../../assets/images/slide1.jpg";
import bg3 from "../../assets/images/slide3.jpg";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className="carousel w-11/12">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={bg1} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={bg2} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={bg1} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={bg3} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/4'>
                        <h1 class="text-5xl font-bold font-mono">Computer Parts</h1>
                        <p class="py-6">
                            A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data.
                            10 Parts that make up a Computer
                            Memory.
                            Hard Drive or Solid State Drive.
                            Video card.
                            Motherboard.
                            Processor.
                            Power Supply.
                            Monitor.
                            Keyboard and Mouse
                        </p>
                        <button onClick={() => navigate('/myportfolio')} class="btn btn-design">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;