import React from 'react'
import { Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavBarCompo = () => {
  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">BootstrapApp</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <NavDropdown title="Other" >
              <NavDropdown.Item href="#">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
              About US
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Container>
   
    </Navbar>
    </>
  )
}

export default NavBarCompo;