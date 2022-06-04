import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = (part,setDeletePart) => {
   
    return (
        <div>
            <tr >
                    <td>{part.name}</td>
                    <td>{part.availableQuantity}</td>
                    <td>
                    <label onClick={()=> setDeletePart(part._id)} for="my-modal" class="btn btn-error">Delete</label>

                      </td>
                  </tr>
        </div>
    );
};

export default ProductRow;