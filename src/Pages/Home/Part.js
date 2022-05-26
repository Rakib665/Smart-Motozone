import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const navigate = useNavigate()
    const {_id,name,img,description,price,availableQuantity,mimimuOrderQuantity} =part
    const purchaseBtn = (id) =>{
        navigate('/purchase')
        console.log(id)

    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h3>Price:{price}</h3>
                <p>{description}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order Quantity: {mimimuOrderQuantity}</p>
                <div class="card-actions">
                    <button class="btn btn-primary" onClick={() =>purchaseBtn(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;