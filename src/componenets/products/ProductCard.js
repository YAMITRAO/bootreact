import React from 'react'
import { Card,Button } from 'react-bootstrap'


const ProductCard = (props) => {
  return (
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.imageUrl}  />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>Price :  
          ${props.data.price}
        </Card.Text>
        <Button variant="primary" style={{marginRight:"5px"}}>Buy Now</Button>
        <Button variant="warning">Add Cart</Button>
      </Card.Body>

    </Card>

  )
}

export default ProductCard