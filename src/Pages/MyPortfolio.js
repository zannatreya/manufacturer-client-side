import React from 'react';
import img from "../assets/images/img.jpg";

const MyPortfolio = () => {
    return (
        <div className=''>

            {/* <h1><span className='font-bold uppercase text-4xl text-center text-primary'>Zannatul Binta Bahar</span></h1>
            */}
            <div class="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="" className='rounded-full' /></figure>
                <div class="card-body items-center text-center">
                    <h1><span className='font-bold uppercase text-4xl text-center text-primary'>Zannatul Binta Bahar</span></h1>
                    <h3 className='font-bold text-2xl'>Email: <span className='font-semibold text-2xl'> zannatulbintabahar@yahoo.com</span></h3>
                    <div className='flex'>

                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class=" text-center text-2xl font-bold">Skills:</h2>
                                <p>HTML5,CSS3,Bootstrap,Tailwind</p>
                                <p>JavaScript,ReactJS,C</p>
                                <p>NodeJS,ExpressJS,MongoDB,</p>
                                <p>Firebase,Netlify,Heroku</p>
                                <p>Tools: GitHub,Figma,GitLab</p>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h1 className='font-bold text-2xl'>Education:</h1>
                            <h4>B.sc. in Computer Science & Engineering </h4>
                            <h5>International Islamic University,Chittagong</h5>
                        </div>
                    </div>

                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h1 className='font-bold text-2xl'>Projects: </h1>
                            <div>
                                <a class="link">I'm a simple link</a>
                                <br />
                                <a class="link">I'm a simple link</a>
                                <br />
                                <a class="link">I'm a simple link</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;