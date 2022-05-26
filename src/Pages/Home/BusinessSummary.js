import React from 'react';
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FiFlag } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FcViewDetails } from "react-icons/fc";
import PrimaryButton from '../Shared/PrimaryButton';
import img from '../../assets/images/footer.png';
import { navigate, useNavigate } from 'react-router-dom';




const BusinessSummary = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            background: `url(${img})`,
            backgroundSize: 'cover'
        }} className='border py-12 mt-4 shadow-xl'>
            <h1 className='text-primary text-center font-bold text-4xl py-12 uppercase'>Millions Business Trust Us</h1>
            <h3 className='text-info-content text-center font-bold text-xl  uppercase'>Try To understand users expectation</h3>
            <p className='divider w-1/4 mx-auto bg-primary h-0.5'></p>

            <div>
                <div className='flex flex-row gap-4 mt-8'>

                    <div className="card w-12 bg-base-100 shadow-xl basis-1/4">
                        <div className="card-body text-center">
                            <FiFlag className='mx-auto text-primary text-6xl'></FiFlag>
                            <h1 className='text-4xl text-info-content font-bold '>72</h1>
                            <p className='text-primary'>Countries</p>

                        </div>
                    </div>
                    <div className="card w-12 bg-base-100 shadow-xl basis-1/4">
                        <div className="card-body text-center">
                            <FcViewDetails className='mx-auto text-primary text-6xl'></FcViewDetails>
                            <h1 className='text-4xl text-info-content font-bold '>535+</h1>
                            <p className='text-primary'>Complete Projects</p>

                        </div>
                    </div>
                    <div className="card w-12 bg-base-100 shadow-xl basis-1/4">
                        <div className="card-body text-center">
                            <FaUsers className='mx-auto text-primary text-6xl'></FaUsers>
                            <h1 className='text-4xl text-info-content font-bold '>273+</h1>
                            <p className='text-primary'>Happy Clients</p>

                        </div>
                    </div>
                    <div className="card w-12 bg-base-100 shadow-xl basis-1/4">
                        <div className="card-body text-center">
                            <FiThumbsUp className='mx-auto text-primary text-6xl'></FiThumbsUp>
                            <h1 className='text-4xl text-info-content font-bold '>432+</h1>
                            <p className='text-primary'>Feedbacks</p>

                        </div>
                    </div>


                </div>
                <div className="card w-10/12 mx-auto mt-8 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div>
                            <h2 className='text-primary font-bold text-3xl' >Have any question about us or get a product request?</h2>
                            <p className='text-xl font-semibold'>Don't hesitate to contact us</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-design">Request for queto</button>
                            <button onClick={() => navigate('/contact')} className="btn btn-info-content">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BusinessSummary;