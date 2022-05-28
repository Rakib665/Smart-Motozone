import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        fetch(`http://localhost:5000/parts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            toast('Add Item successfully')
        })
    
    }

    return (
        <div>
            <div className='mt-5 text-center'>
            <h2 className='text-primary text-3xl font-semibold mb-2'>Add New Item</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Product Name" class="input input-bordered input-md w-full max-w-xs mb-2" {...register("name")} />
                
                {/* <input className='w-75 p-3 mb-2 border-2 ' placeholder='Name'   {...register("name")} /> */}
                <br />
                <input type="text" placeholder="Supplier Name" class="input input-bordered input-md w-full max-w-xs mb-2" {...register("supplier_name")} />

                {/* <input className='mb-3 w-50' placeholder='Supplier Name'   {...register("supplier_name")} /> */}
                <br />
                <input class="input input-bordered input-md w-full max-w-xs mb-2" placeholder='Description' {...register("description")} />
                <br />
                <input class="input input-bordered input-md w-full max-w-xs mb-2" placeholder='Price' type="number" {...register("price")} />
                <br />
                <input class="input input-bordered input-md w-full max-w-xs mb-2" placeholder='Photo Url' type="text" {...register("img")} />
                <br />
                <input class="input input-bordered input-md w-full max-w-xs mb-2" placeholder='Available Quantity' type="text" {...register("availableQuantity")} />
                <br />
                <input class="input input-bordered input-md w-full max-w-xs mb-2"  placeholder='Minimum Quantity' type="text" {...register("minimuOrderQuantity")}  />
                <br />
                
                <input className='mb-3 btn btn-primary text-white' type="submit" value='Add Service' />

                </form>
            </div>
        </div>
        </div>
    );
};

export default AddAProduct;