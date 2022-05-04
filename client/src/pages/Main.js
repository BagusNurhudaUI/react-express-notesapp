import React from 'react'
import { Container, Row,  Button } from 'react-bootstrap'
import './Main.css'

function Main() {
  return (
    <div className='main'>
      <Container>
        <Row>
          
          <div className='intro-text'> 
            <h1>Welcome to BNotes</h1>   
            <p>You can Freely save your all note here</p>  
            <div>
              <div className='buttonContainer'>
                <a href='/login' > <Button variant="primary">Login</Button></a>
                <a href='/register' className='register' ><Button variant="outline-dark">Register</Button></a>
            </div>     
          </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Main