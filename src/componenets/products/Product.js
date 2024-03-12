
import React from 'react'
import {  Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

const Product = () => {

    const productsArr = [

        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]
  return (

    <Container className='mt-3'>
        <Row >
            <Col style={{textAlign:"center" ,color:"goldenrod", fontSize:"26px", fontWeight:"bold", fontFamily:"monospace"}} >Our Products</Col>
        </Row>

        <Row className='mt-2'>
            {productsArr.map( (val) => {
                return <Col className='mt-2'><ProductCard data={val}/></Col>
                
            })}
            
        </Row>

    </Container>

  )
}

export default Product