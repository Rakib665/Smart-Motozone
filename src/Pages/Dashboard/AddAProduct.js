import React from 'react';
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
            <h2 className='text-secondary'>ADD NEW ITEM</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 w-100' placeholder='Name'   {...register("name")} />
                <br />
                <input className='mb-3 w-50' placeholder='Supplier Name'   {...register("supplier_name")} />
                <br />
                <input className='mb-3 w-50' placeholder='Description' {...register("description")} />
                <br />
                <input className='mb-3 w-50' placeholder='Price' type="number" {...register("price")} />
                <br />
                <input className='mb-3 w-50' placeholder='Photo Url' type="text" {...register("img")} />
                <br />
                <input className='mb-3 w-50' placeholder='Available Quantity' type="text" {...register("availableQuantity")} />
                <br />
                <input className='mb-3 w-50'  placeholder='Minimum Quantity' type="text" {...register("minimuOrderQuantity")}  />
                <br />
                
                <input className='mb-3' type="submit" value='Add Service' />

                </form>
            </div>
        </div>
        </div>
    );
};

export default AddAProduct;