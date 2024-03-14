import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import DataContext from '../context/DataContext'

const CartData = () => {

  const ctx = useContext(DataContext);
  const cartDataArray = ctx.cartItemsList;
  let totalAmount = 0;
  let renderVar = cartDataArray.map( (val) => {
    totalAmount += val.price*val.quantity;
    let data = {
      title: val.title,
      price: val.price,
      type:"REMOVE_FROM_CART"
    }
    const itmeRemoveHandler = () =>{
      ctx.cartListUpdate(data);
    }
    return (
      <tr>
      <td>{val.title}</td>
      <td>{val.price}</td>
      <td>{val.quantity}</td>
      <td>
        <Button variant='danger' onClick={ itmeRemoveHandler}>X</Button>
      </td>
      
    </tr>
    )
  })
  return (
    
    <Table striped  hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        
        </tr>
      </thead>
      <tbody>
        {renderVar}
        <tr>
        <td colSpan={4}>Total Amount :${totalAmount} </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CartData