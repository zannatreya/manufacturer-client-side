import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { register, formState: { errors } } = useForm();



    const [user, isLoading] = useAuthState(auth);

    const handlePurchase = event => {
        event.preventDefault();
        const info = {
            email: user.email,
            location: event.target.location.value,
            phone: event.target.phone.value,
            education: event.target.education.value,
        }
        console.log(info);
        fetch('http://localhost:5000/myprofile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {

                toast.success('update Successfull, Yeah!!');

                event.target.reset();


            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-primary'>My Profile</h1>
            <div className="card  w-96 flex-shrink-0  lg:max-w-lg shadow-4xl bg-base-100">
                <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                    <div className="card-body">
                        <h1>Please Provide necessary information</h1>

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

                            <label className="label">
                                <input type="text" placeholder="location" name="location" className="input input-bordered w-full max-w-xs" />
                            </label>

                            <label className="label">
                                <input type="text" placeholder="education" name="education" className="input input-bordered w-full max-w-xs" />
                            </label>

                            <div className="form-control mt-6">
                                <button className="btn btn-design">Update</button>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default MyProfile;