import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from "./Test.module.css"

const Test = () => {
  return (
    <Container >
        <Row xl={2} md={4}>
            <Col xs={{order:"last"}} md={{order:"first", offset:'4', span:"4"}}className={style.divGrid} bg="primary" > 1 of 4 </Col>
            <Col  className={style.divGrid1} bg="primary" > 2 of 4 </Col>
            <Col  className={style.divGrid2} bg="primary" > 3 of 4 </Col>
            <Col  className={style.divGrid3} bg="primary" > 4 of 4 </Col>
        </Row>
        <Row>
            <Col xs={{order:"last"}} md={{order:"first",}}className={style.divGrid} bg="primary" > 1 of 4 </Col>
            <Col  className={style.divGrid1} bg="primary" > 2 of 4 </Col>
            <Col  className={style.divGrid2} bg="primary" > 3 of 4 </Col>
            <Col  className={style.divGrid3} bg="primary" > 4 of 4 </Col>
        </Row>
    </Container>
  )
}

export default Test