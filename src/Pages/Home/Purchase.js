import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) =>{
       const purchase = {
           purchaseId: id,
           userName: data.name,
           userEmail: user.email,
           partName: item.name,
           phone: data.phone,
           address: data.address,
           quantity: data.quantity
           
       }
       fetch('http://localhost:5000/purchase',{
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(purchase)
       })
       .then(res=>res.json())
       .then(data => {
           toast(`your ${item.name} purchase successfully`)
       })


    };

    return (
        <div className='grid justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <figure class="px-10 pt-10">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 className='text-2xl font-bold'>{item.name}</h2>
                    <p className='text-xl'>Available Quantity: {item.availableQuantity}</p>
                    <p>Minimum Quantity: {item.minimuOrderQuantity}</p>
                    <p><small>{item.description}</small></p>


                </div>
            </div>

            <div className='mt-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>

                    <input
                        type="text"  placeholder="quantity"
                        {...register("quantity",{
                            required: {
                                value: true,
                                message: 'quantity must be bigger than minimum quantity'
                            },
                            min: {
                                value: `${item.minimuOrderQuantity}`,
                                message: 'quantity must be bigger than minimum quantity'

                            },
                            max:{
                                value: `${item.availableQuantity}`,
                                message: 'quantity must be smaller than minimum quantity'
                            }

                        })}
                        class="input input-bordered w-full max-w-xs" />
                         <label className="label">
                                {errors.quantity?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.quantity?.message}</span>}
                                {errors.quantity?.type === 'min' && <span className="text-red-500 label-text-alt">{errors.quantity?.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="text-red-500 label-text-alt">{errors.quantity?.message}</span>}


                            </label>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input

                        type="text"readOnly defaultValue={user.displayName} placeholder="name"
                        {...register("name")}
                        class="input input-bordered w-full max-w-xs" />


                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email" readOnly defaultValue={user.email} placeholder="email"
                        {...register("email")}
                        class="input input-bordered w-full max-w-xs" />

                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="text" placeholder="address"
                        {...register("address")}
                        class="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="text" placeholder="phone"
                        {...register("phone")}
                        class="input input-bordered w-full max-w-xs" />


                    <input  type="submit" className='btn mt-2' value='Purchase' />
                </form>
            </div>
        </div>
    );
};

export default Purchase;