import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HomeFooter = () => {
  return (
    <Container fluid style={{backgroundColor:"grey", position:"fixed", bottom:"0px", height:"60px"}}>
        <Row>
            <Col style={{textAlign:"center", color:"white"}} className='mt-2'>
            &#169; All Rights Reserved
            </Col>
        </Row>
    </Container>
  )
}

export default HomeFooter