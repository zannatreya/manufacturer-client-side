import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { productsName, email } = deletingProduct;
    const handleDelete = () => {
        fetch(`http://localhost:5000/tools/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${productsName} is deleted.`)
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  {productsName}!</h3>
                    <p class="py-4"></p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;