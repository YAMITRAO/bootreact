import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import DataContext from '../context/DataContext'

const CartData = () => {

  const ctx = useContext(DataContext);
  console.log(ctx);
  const cartDataArray = ctx.productsList;
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
        {cartDataArray.map( (val) => {
          return (
            <tr>
            <td>{val.title}</td>
            <td>{val.price}</td>
            <td>1</td>
            <td>
              <Button variant='danger' >X</Button>
            </td>
            
          </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default CartData