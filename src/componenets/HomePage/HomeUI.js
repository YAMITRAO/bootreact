import React from 'react'
import { Button, Table } from 'react-bootstrap'

const HomeUI = () => {
  return (
    <Table striped >
    <tbody>
      <tr>
        <td>10-Jul</td>
        <td>Mumbai</td>
        <td>India Gate</td>
        <td>Click for Trailer <Button variant='warning'>&#127925;</Button></td>
        <td><Button variant='info'>Book the ticket</Button></td>
      </tr>
      <tr>
        <td>15-Jul</td>
        <td>Pune</td>
        <td>City Hall</td>
        <td>Click for Trailer <Button variant='warning'>&#127925;</Button></td>
        <td><Button variant='info'>Book the ticket</Button></td>
      </tr>
      <tr>
        <td>18-Jul</td>
        <td>Rajasthan</td>
        <td>Patrika Gate</td>
        <td> Click for Trailer <Button variant='warning'>&#127925;</Button> </td>
        <td><Button variant='info'>Book the ticket</Button></td>
      </tr>
    </tbody>
  </Table>
  )
}

export default HomeUI