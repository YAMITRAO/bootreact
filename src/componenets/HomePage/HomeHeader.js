import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HomeUI from './HomeUI'

const HomeHeader = () => {
  return (
    <Container >
        <Row className='m-3' >
            <Col  style={{backgroundColor:"#302040", textAlign:"center", borderRadius:"18px"}}>
                <spna style={{fontSize:"90px", color:"white"}}>
                    You Like it.
                </spna>
                <span style={{fontSize:"90px", color:"white", display:"block"}}>
                &#127925;
                </span>
            </Col>
        </Row>
        <Row className='m-3'>
            <Col >
            <HomeUI />
            </Col>
        </Row>
    </Container>
  )
}

export default HomeHeader