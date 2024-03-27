import React from 'react'
import { Form, Button } from 'react-bootstrap'


const ContactForm = () => {
  return (
    <div style={{width:"80%" ,margin:" 0px auto"}}>
    <Form className='mt-5'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact No</Form.Label>
        <Form.Control type="number" placeholder="contact no" />
        <Form.Text className="text-muted">
          We'll never share your contact no with anyone else.
        </Form.Text>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm