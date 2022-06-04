import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [parts,setParts] = useState([])
    const [deletePart,setDeletePart] = useState(null)
    useEffect(()=>{
        fetch('https://rocky-bayou-52722.herokuapp.com/parts')
        .then(res=>res.json())
        .then(data=> setParts(data))
    },[])
    // const deleteItem = (id) => {
    //     const proceed = window.confirm('are you sure?')
    //     if (proceed) {
    //         fetch(`https://rocky-bayou-52722.herokuapp.com/part/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 const remaining = parts.filter(i => i._id !== id)
    //                 setParts(remaining)
    //                 window.location.reload()
    //             })
    //     }

    // }
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
             parts.map((part,index) => <ProductRow
             part = {part}
             key= {index}
             setDeletePart= {setDeletePart}
             ></ProductRow>)
           }
           
          </tbody>
        </table>
        {deletePart && <DeleteModal
        deletePart = {deletePart}
        ></DeleteModal>}
      </div>
    );
};

export default ManageProducts;