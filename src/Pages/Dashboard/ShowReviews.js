import React from 'react';
import { useQuery } from 'react-query';
import Review from '../Home/Review';
import Loading from '../Shared/Loading';

const ShowReviews = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/review', {
        method: 'GET',

        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    <div>
                        {
                            products.map(review => <Review
                                key={review._id}
                                review={review}
                                refetch={refetch}

                            ></Review>)
                        }
                    </div>
                </h2>
                {/* <div className="flex">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ShowReviews;