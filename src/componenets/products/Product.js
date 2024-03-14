
import React, { useContext } from 'react'
import {  Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import DataContext from '../context/DataContext'

const Product = () => {
    const ctx = useContext(DataContext);
    console.log(ctx.productsList);
    const productsArr = ctx.productsList;
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