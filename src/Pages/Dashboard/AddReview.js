import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: reviews, isLoading } = useQuery('products', () => fetch('http://localhost:5000/product').then(res => res.json()))


    const onSubmit = async data => {
        console.log('data', data)


        const product = {
            //             name: data.name,
            //             email: data.email,
            //             productsName: data.productsName,
            review: data.review

        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the review');
                }
            })

        // }

        // })
    }


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Add Review</h2>

            <form className='' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Comment"
                        className="input input-bordered w-full max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Comment is required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.name.message}</span>
                        }


                    </label>
                    <label className="label">

                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </label>

                </div>

                <label className="label">


                    <input className='btn w-full max-w-xs' type="submit" value="Add" />
                </label>
            </form>
        </div>
    );
};

export default AddReview;