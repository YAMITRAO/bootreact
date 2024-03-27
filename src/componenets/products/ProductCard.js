import React, { useContext } from 'react'
import { Card,Button, CardText } from 'react-bootstrap'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom'


const ProductCard = (props) => {
  const ctx = useContext(DataContext);
  const addToCart = (e) => {
    let data = {
      title:props.data.title,
      price:props.data.price,
      quantity: 1,
      imageUrl: props.data.imageUrl,
      type:"ADD_TO_CART"
    }
    ctx.cartListUpdate(data);
  }
  return (
  
        <Card style={{ width: '18rem' }}>
          <Link to={`/products/${props.data.title}`}>
          <Card.Img variant="top" src={props.data.imageUrl}  />
          </Link>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>Price :  
          ${props.data.price}
        </Card.Text>
        <Button variant="primary" style={{marginRight:"5px"}}>Buy Now</Button>
        <Button variant="warning" onClick={ addToCart}>Add Cart</Button>
      </Card.Body>

    </Card>

  )
}

export default ProductCard