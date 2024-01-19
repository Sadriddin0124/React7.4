import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axiosClient from "../plugins/axiosClient";

const ProductsModal = ({ open, toggle, editProduct, setEditProduct }) => {
  const addUser = (e) => {
    e.preventDefault();
    let payload = {
      name: e.target[0].value,
      brand: e.target[1].value,
      group: e.target[2].value,
      price: +e.target[3].value,
      arrival_price: +e.target[4].value,
      selling_price: +e.target[5].value,
      description: e.target[6].value,
    };
    if (editProduct._id !== undefined) {
      axiosClient.patch(`/products/update/${editProduct._id}`, {...payload}).then((res)=> {
          if(res?.status == 202) {
              window.location.reload()
              console.log(payload);
              setEditProduct('')
            }
          });
        } else {
      axiosClient.post("/products/add", { ...payload }).then((res) => {
        if (res?.status === 201) {
          window.location.reload();
        }
      });
    }
  };
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
          <h1>Add User</h1>
        </ModalHeader>
        <ModalBody>
          <form id="products" onSubmit={addUser}>
            <input
              defaultValue={editProduct.name}
              type="text"
              placeholder="name"
              className="form-control my-2"
            />
            <input
              defaultValue={editProduct.brand}
              type="text"
              placeholder="brand"
              className="form-control my-2"
            />
            <select className="form-control">
              <option value="" hidden>
                Select group
              </option>
              <option value="Mobile">Mobile</option>
              <option value="PC">PC</option>
              <option value="TV">TV</option>
              <option value="Accessories">Accessories</option>
            </select>
            <input
              defaultValue={editProduct.price}
              type="number"
              placeholder="price"
              className="form-control my-2"
            />
            <input
              defaultValue={editProduct.arrival_price}
              type="number"
              placeholder="arrival price"
              className="form-control my-2"
            />
            <input
              defaultValue={editProduct.selling_price}
              type="number"
              placeholder="selling price"
              className="form-control my-2"
            />
            <textarea
              defaultValue={editProduct.description}
              rows="3"
              className="form-control"
              placeholder="Description"
            ></textarea>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-info" type="submit" form="products">
            Add User
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductsModal;
