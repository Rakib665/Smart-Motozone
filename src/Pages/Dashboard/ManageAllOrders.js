import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([])
    useEffect(() => {
        fetch('https://rocky-bayou-52722.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Order Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrder.map(order => <tr>
                            <th>{order.userEmail}</th>
                            <td>{order.partName}</td>
                            <td>{order.quantity}</td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;