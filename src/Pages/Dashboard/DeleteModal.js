import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deletePart}) => {
    const deleteItem = (id) => {
            fetch(`https://rocky-bayou-52722.herokuapp.com/part/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        toast.success(`deleted ${deletePart.name}`)
                    }
                })
        }


    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                    <button onClick={()=>deleteItem(deletePart._id)} class="btn btn-secondary text-white">Delete</button>
                        <label for="my-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;