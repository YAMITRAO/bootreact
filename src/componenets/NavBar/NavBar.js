import React, { useContext} from 'react'
import { Button, Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import DataContext from '../context/DataContext'
import { Link, Outlet } from 'react-router-dom'

const NavBarCompo = () => {
  const ctx = useContext(DataContext);
  const pageVisibilityUpdate = (data) => {
    ctx.pageVisibilityHandler(data);
  }
  let totalCartItems = ctx.cartItemsList.length;
  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">
        <Container >
        <Container  fluid>
          <Row style={{textAlign:"center"}} >
            <Col xs={12} sm ={2}  ><Navbar.Brand href="/">
              BootstrapApp</Navbar.Brand></Col>
            <Col xs={12} sm={8}> <Nav className="me-auto">
           
            <Nav.Link> <Link to ="/" style={{textDecoration:"none", color:"inherit"}}> Home </Link> </Nav.Link>
            <Nav.Link> <Link to="/products" style={{textDecoration:"none", color:"inherit"}}> Products </Link></Nav.Link>
            <Nav.Link><Link to="/contact" style={{textDecoration:"none", color:"inherit"}}> Contact </Link></Nav.Link>
            <Nav.Link><Link to ="/about" style={{textDecoration:"none", color:"inherit"}}> About </Link></Nav.Link>
            </Nav></Col>
            <Col xs={12} sm={2}> 
            <Button variant="warning" onClick={( ) => {
              pageVisibilityUpdate("CART")
            }}>  $ Cart: {totalCartItems} </Button>
            </Col>
          </Row>
          </Container>
        </Container>
    </Navbar>
    <Outlet />
    </>
  )
}

export default NavBarCompo;