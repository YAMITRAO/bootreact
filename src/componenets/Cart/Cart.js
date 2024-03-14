import React,{useRef, useContext} from 'react'
import CartData from './CartData'
import { Popover, Overlay, Button } from 'react-bootstrap'
import DataContext from '../context/DataContext';


const Cart = (props) => {  
  const ref = useRef(null);
  
  const ctx = useContext(DataContext);

  const orderButton  = (ctx.cartItemsList.length <= 0)

  const orderItemHandler = () => {
    
    ctx.cartListUpdate({type:"ALL_ORDERED"});
    setTimeout( () => {alert("Succesfully Ordered")}, 200)
    
  }

  return (
    <>
    <div  style={{position:"fixed", top:"55px", right:"5%", maxHeight:"90vh", overflowY:"scroll"}} ref={ref}>
      <Overlay
        show={true}
        target={""}
        placement="left"
        container={ref}
        containerPadding={0}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" style={{fontSize:"22px"}} >
            Your Cart
            <Button variant="secondary" style={{position:"relative", left:"110px"}} onClick={
              ()=> ctx.pageVisibilityHandler("CART")
            }>X</Button>
            </Popover.Header>
          <Popover.Body>
            <CartData/>
            { !orderButton && <Button variant="success" onClick={ orderItemHandler} >Order</Button>}
            { orderButton && <Button variant="warning" disabled onClick={ ()=> ctx.pageVisibilityHandler("CART")}  >Add item To Order</Button>}
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
   
    </>
  )
}

export default Cart