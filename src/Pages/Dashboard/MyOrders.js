import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://rocky-bayou-52722.herokuapp.com/purchase?email=${user.email}`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/')
                
                }
                return res.json()})
            .then(data => setOrders(data))
    }, [])
    const deleteItem = (id) => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            fetch(`https://rocky-bayou-52722.herokuapp.com/purchase/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(o => o._id !== id)
                    setOrders(remaining)
                })
        }

    }
    const payment = (id) =>{
        navigate('/payment')

    }
    return (
        <div>
            <h2>My order: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                            key={index}
                            >
                                
                                <td>{order.partName}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    
                                    <button onClick={()=>deleteItem(`${order._id}`)} class="btn btn-xs">Cancel Order</button>

                                </td>
                                <td><button onClick={()=>payment(order._id)}  class="btn btn-xs">Make Payment</button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;