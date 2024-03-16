import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

const HomeUI = () => {
    
  const [movieData, setMovieData] = useState([]);
      
  useEffect(()=>{
    fetch("https://dummyapi.online/api/movies").then(
      (response) => {
        return response.json()
      }
    ).then( (data) => {
      console.log(data);
      setMovieData(data);
      
    })

  }, []);

  return (
    <Table striped >
     
      <thead>
        <tr>
          <th>Movie Name</th>
          <th>IMBD Rating</th>
          <th>Trailer</th>
          <th>Book It</th>
        </tr>
      </thead>
    <tbody>
      {movieData.map( (val) => {
        return <tr>
          <td>{val.movie}</td>
          <td>{val.rating}</td>
          <td>
          
          <Button variant='warning'> 
          <a href={val.imdb_url} target="_blank" style={{textDecoration:"none", color:"inherit"}}>Play Trailer</a></Button>
          </td>
          <td><Button variant='info' >Book ticket</Button></td>
        </tr>
      })}
    </tbody>
  </Table>
  )
}

export default HomeUI