import React from 'react';
import { GrStar } from 'react-icons/gr';


const Review = ({ review }) => {
    const { img, name, location } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Their customer service is so good.Whenever I got stuck in a problem they have my back</h2>
                <div className='flex'>
                    <p><GrStar className='fullstar' /></p>
                    <p> <GrStar className='fullstar' /></p>
                    <p><GrStar className='fullstar' /></p>
                    <p><GrStar className='fullstar' /></p>
                    <p><GrStar className='fullstar' /></p>
                </div>
                <div className="flex">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;