import React,{useRef, useState} from 'react'
import CartData from './CartData'
import { Popover, Overlay, Button } from 'react-bootstrap'

const Cart = (props) => {
  console.log(props.cartVisibility)

  
  const ref = useRef(null);

  return (
    <>
    <div  style={{position:"fixed", top:"55px", right:"5%", maxHeight:"90vh", overflowY:"scroll", Width:"30%"}} ref={ref}>
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
            <Button variant="secondary" style={{position:"relative", left:"110px"}}>X</Button>
            </Popover.Header>
          <Popover.Body>
            <CartData/>
            <Button variant="warning">Order</Button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
   
    </>
  )
}

export default Cart