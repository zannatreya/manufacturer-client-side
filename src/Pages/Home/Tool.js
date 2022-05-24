import React from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import './Tool.css';

const Tool = ({ tool }) => {
    const { _id, name, img, description, price, minimumOrderQuantity, availableQuantity } = tool;
    const navigate = useNavigate();
    const navigateToPurchaseDetail = (id) => {
        navigate(`/purchase/${id}`);
    }
    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tool.img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className='uppercase font-semibold'>{tool.name}</h2>
                <p><span className='text-xl font-medium'>price:</span> ${tool.price}(per unit)</p>
                <p>{tool.description}</p>
                <p><span className='font-medium'>Min-Order: </span>{tool.minimumOrderQuantity}</p>
                <p><span className='font-medium'>Available-Quantity: </span>{tool.availableQuantity}</p>
                <button className='btn-design' onClick={() => navigateToPurchaseDetail(tool._id)}>Purchase</button>

            </div>

        </div>



    );
};

export default Tool;