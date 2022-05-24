import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PurchaseDetails = () => {
    const { purchaseId } = useParams();
    const navigate = useNavigate();

    const [tools, setTools] = useState({});

    const [user, loading] = useAuthState(auth);



    useEffect(() => {
        const url = `http://localhost:5000/product/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    })

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={tools.img} className="max-w-lg rounded-xl shadow-2xl p-16 mr-20" />
                    <div>
                        <div className="card  w-96 flex-shrink-0  lg:max-w-lg shadow-4xl bg-base-100">
                            <div className="card-body">
                                <h2 className='uppercase font-bold text-center text-4xl'>{tools.name}</h2>
                                <h1>Please Provide necessary information to purchase</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                    </label>

                                    <label className="label">
                                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs " />
                                    </label>

                                    <label className="label">
                                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                    </label>

                                </div>

                                <input type="text" placeholder="address" className="input input-bordered" />

                                <label className="label">
                                    <p><span className='font-medium'>Available-Quantity: </span>{tools.availableQuantity}</p>
                                </label>

                                <label className="label">
                                    <p><span className='text-xl font-medium'>price:</span> ${tools.price}(per unit)</p>
                                </label>

                                <label className="label">
                                    <input type="number" placeholder="minimum order 10" name="" className="input input-bordered w-full max-w-xs" />
                                </label>
                                <div className="form-control mt-6">
                                    <button className="btn btn-design">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default PurchaseDetails;