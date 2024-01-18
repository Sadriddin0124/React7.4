import React, { useEffect, useState } from 'react'
import axiosClient from '../plugins/axiosClient'
import ProductsModal from './ProductsModal'
import DeleteProduct from './DeleteProduct'

const Products = () => {
  const [products, setProducts] =  useState([])
  const [modal, setModal] = useState(false)
  const [deleteItem, setDeleteItem] = useState('')
  const [deleteModal, setDeleteModal] = useState(false)
  const [editItem, setEditItem] = useState('')
  useEffect(()=>{
    axiosClient.get('/products').then((res)=> {
      console.log(res.data.products);
      setProducts(res.data.products);
    }).catch((err)=> {
      console.log(err);
    })
  },[])
  const removeProduct =(item)=> {
    setDeleteItem(item)
    setDeleteModal(true)
  }
  const editProduct =(id)=> {
    axiosClient.get(`/products/${id}`).then((res)=> {
      setEditItem(res.data.product);
    })
    setModal(true)
  }
  return (
    <div>
      <DeleteProduct open={deleteModal} toggle={()=>setDeleteModal(false)} deleteItem={deleteItem}/>
      <ProductsModal open={modal} toggle={()=>setModal(false)} editProduct={editItem} setEditProduct={setEditItem}/>
      <div className="row">
        <div className="col-4 offset-1 mt-5">
          <button className="btn btn-warning my-2" onClick={()=>setModal(true)}>Add Product</button>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Group</th>
                  <th>Price</th>
                  <th>Arrival Price</th>
                  <th>Selling Price</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((item,index)=> {
                    return <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.brand}</td>
                      <td>{item.group}</td>
                      <td>{item.price}</td>
                      <td>{item.arrival_price}</td>
                      <td>{item.selling_price}</td>
                      <td>{item.description}</td>
                      <td>
                        <button className="btn btn-outline-info mx-2" onClick={()=>editProduct(item._id)}>Edit</button>
                        <button className="btn btn-outline-danger" onClick={()=>removeProduct(item)}>Delete</button>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
