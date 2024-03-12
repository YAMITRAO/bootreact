import React from 'react'
import { Button, Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'

const NavBarCompo = () => {
  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">

        <Container >
        <Container  fluid>
          <Row>
            <Col xs={2} ><Navbar.Brand href="/">
              BootstrapApp</Navbar.Brand></Col>

            <Col xs={{offset:'3'}} > <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="#contactus">ContactUS</Nav.Link>
            <Nav.Link href="#aboutus">AboutUs</Nav.Link>
            </Nav></Col>

            <Col xs={{offset:"2"} }> 
            <Button variant="warning" >Register / Login</Button>
           
            </Col>
          </Row>
          </Container>
        </Container>
  
    </Navbar>
    </>
  )
}

export default NavBarCompo;