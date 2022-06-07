import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: products, isLoading } = useQuery('products', () => fetch('https://floating-beyond-11592.herokuapp.com/product').then(res => res.json()))

    const imageStorageKey = '3f11ccaa30b2e9b97d8f1ccb0370d98f';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                console.log('imgbb', result)
                if (result.success) {
                    const image = result.data.url;
                    const product = {
                        name: data.name,
                        email: data.email,
                        productsName: data.productsName,
                        image: image
                    }
                    fetch('https://floating-beyond-11592.herokuapp.com/tools', {
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
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>Add a new Product</h2>

            <form className='' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.name.message}</span>
                        }


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.email.message}</span>
                        }
                        {errors.email?.type === 'pattern' &&
                            <span className="label-text-alt text-red-500">{errors.email.message}</span>
                        }

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Products Name</span>
                    </label>

                    <select {...register('productsName')} className="select input-bordered w-full max-w-xs">
                        {
                            products.map(product => <option
                                key={product._id}
                                value={product.name}
                            >{product.name}</option>
                            )
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Your Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.image.message}</span>
                        }


                    </label>
                </div>



                <input className='btn w-full max-w-xs' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;