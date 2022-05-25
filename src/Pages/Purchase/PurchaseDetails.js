import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PurchaseDetails = () => {
    const { purchaseId } = useParams();
    const navigate = useNavigate();

    const [tools, setTools] = useState({});
    const { _id, name, image, price } = tools;


    const [user, loading, error] = useAuthState(auth);



    useEffect(() => {
        const url = `http://localhost:5000/product/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    })

    const handlePurchase = event => {
        event.preventDefault();
        const purchase = {
            orderId: _id,
            name: name,
            productImg: image,
            price: price,
            userName: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
        }
        console.log(purchase);
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {

                toast.success('Purchase Successfull, Yeah!!');

                event.target.reset();


            })

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h2 className='uppercase font-bold  text-4xl'>{tools.name}</h2>

                        <label className="label">
                            <p><span className='font-medium'>Available-Quantity: </span>{tools.availableQuantity}</p>
                        </label>

                        <label className="label">
                            <p><span className='text-xl font-medium'>price:</span> ${tools.price}(per unit)</p>
                        </label>
                        <img src={tools.img} className="max-w-lg rounded-xl shadow-2xl p-16 mr-20" />

                    </div>
                    <div>
                        <div className="card  w-96 flex-shrink-0  lg:max-w-lg shadow-4xl bg-base-100">
                            <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                                <div className="card-body">
                                    <h1>Please Provide necessary information to purchase</h1>

                                    <div className="form-control">
                                        <label className="label">
                                            <input type="text" name="userName" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                        </label>

                                        <label className="label">
                                            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs " />
                                        </label>

                                        <label className="label">
                                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                        </label>

                                        <label className="label">
                                            <input type="text" placeholder="address" name="address" className="input input-bordered w-full max-w-xs" />
                                        </label>

                                        <label className="label">
                                            <input type="number" placeholder="minimum order 10" name="quantity" className="input input-bordered w-full max-w-xs" />
                                        </label>

                                        <div className="form-control mt-6">
                                            <button className="btn btn-design">Place Order</button>
                                        </div>

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default PurchaseDetails;