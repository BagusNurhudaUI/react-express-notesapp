import React from 'react'
import { Link } from 'react-router-dom'
import MainScreen from '../components/MainScreen'
import {Button, Card} from 'react-bootstrap'
import notes from './notes'



function MyNotes() {
  return (
      <div> 
          <MainScreen title= "Welcome Back">
            <Link to='/createnote'>
              <Button variant='dark' style={{marginLeft:10, marginBottom :6}}  >
                Create New Note
              </Button>
              {
                notes.map(note =>(
                  <Card style={{margin: 10}}>
                <Card.Header style={{display:'flex'}}>
                  <span style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}>{note.title}</span>
                <div>
                  <Button variant="warning">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
                </Card.Header>
                
              </Card>
                ))
              }
              
            </Link>
          </MainScreen>
      </div>
      
  )
}
export default MyNotes