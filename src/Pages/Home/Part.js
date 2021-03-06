import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const navigate = useNavigate()
    const {_id,name,img,description,price,availableQuantity,minimuOrderQuantity} =part
    const purchaseBtn = (id) =>{

        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h3>Price:{price}</h3>
                <p>{description}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order Quantity: {minimuOrderQuantity}</p>
                <div className="card-actions">
                    <button className="btn btn-primary bg-gray-300" onClick={() =>purchaseBtn(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;