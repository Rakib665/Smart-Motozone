import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ManageProducts = () => {
    const [parts,setParts] = useState([])
    useEffect(()=>{
        fetch('https://rocky-bayou-52722.herokuapp.com/parts')
        .then(res=>res.json())
        .then(data=> setParts(data))
    },[])
    const deleteItem = (id) => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            fetch(`https://rocky-bayou-52722.herokuapp.com/part/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = parts.filter(i => i._id !== id)
                    setParts(remaining)
                    window.location.reload()
                })
        }

    }
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Available Quantity</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {
                parts.map((p) => <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.availableQuantity}</td>
                    <td><button onClick={()=>deleteItem(p._id)} class="btn btn-secondary text-white">Delete</button></td>
                  </tr>)
            }
           
          </tbody>
        </table>
      </div>
    );
};

export default ManageProducts;