import React, { useContext} from 'react'
import { Button, Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import DataContext from '../context/DataContext'

const NavBarCompo = (props) => {
  const ctx = useContext(DataContext);
  const pageVisibilityUpdate = (data) => {
    ctx.pageVisibilityHandler(data);
  }
  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">
        <Container >
        <Container  fluid>
          <Row style={{textAlign:"center"}} >
            <Col xs={12} sm ={2}  ><Navbar.Brand href="/">
              BootstrapApp</Navbar.Brand></Col>
            <Col xs={12} sm={8}> <Nav className="me-auto">
            <Nav.Link href="#" onClick={( ) => {
              props.onClickTab("home")
              pageVisibilityUpdate("HOME");
            }}>Home</Nav.Link>
            <Nav.Link href="#" onClick={( ) => {
              props.onClickTab("products")
              pageVisibilityUpdate("PRODUCTS")
            }}>Products</Nav.Link>
            <Nav.Link href="#" onClick={( ) => {
              props.onClickTab("contactus")
            }}>ContactUS</Nav.Link>
            <Nav.Link href="#" onClick={( ) => {
              props.onClickTab("aboutus")
            }}>AboutUs</Nav.Link>
            </Nav></Col>
            <Col xs={12} sm={2}> 
            <Button variant="warning" onClick={( ) => {
              props.onClickTab("cart")
            }}>$Cart: 3</Button>
            </Col>
          </Row>
          </Container>
        </Container>
  
    </Navbar>
    </>
  )
}

export default NavBarCompo;