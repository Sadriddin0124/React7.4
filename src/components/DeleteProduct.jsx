import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'
import axiosClient from '../plugins/axiosClient';

const DeleteProduct = ({toggle, open, deleteItem}) => {
    const removeItem =()=> {
        console.log(deleteItem._id);
        axiosClient.delete(`/products/${deleteItem._id}`).then((res)=> {
            if(res?.status === 202) {
                window.location.reload()
            };
        })
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
            <h1>Are you sure you want to delete?</h1>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-info" onClick={toggle}>cancel</button>
            <button className="btn btn-danger" onClick={removeItem}>delete</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default DeleteProduct
