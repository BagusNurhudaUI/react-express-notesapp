import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import { Link } from 'react-router-dom'
import MainScreen from '../components/MainScreen'
import {Accordion, Button, Card,Badge} from 'react-bootstrap'

import ReactMarkdown from "react-markdown";
import axios from 'axios'
import notes from './notes'



// const fecthNotes = () => {
//   const data = await axios.get('http://localhost/api/notes');
//   console.log(data);
// }
// useEffect(() => {
//   fecthNotes()
// },[])

function MyNotes() {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // dispatch(deleteNoteAction(id));
    }
  };
  return (
      <div> 
        <MainScreen>
          {notes &&
          notes
            // .filter((filteredNote) =>
            //   filteredNote.title.toLowerCase().includes(search.toLowerCase())
            // )
            .reverse()
            .map((note) => (
              <Accordion>
                <Card style={{ margin: 10 }} key={note._id}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      // onClick={() => ModelShow(note)}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <Accordion.Toggle
                        as={Card.Text}
                        variant="link"
                        eventKey="0"
                      >
                        {note.title}
                      </Accordion.Toggle>
                    </span>

                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <h4>
                        <Badge variant="success">
                          Category - {note.category}
                        </Badge>
                      </h4>
                      <blockquote className="blockquote mb-0">
                        <ReactMarkdown>{note.content}</ReactMarkdown>
                        <footer className="blockquote-footer">
                          Created on{" "}
                          <cite title="Source Title">
                            {note.createdAt.substring(0, 10)}
                          </cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
      </MainScreen>
    </div>
  )
          {/* <MainScreen title= "Welcome Back">
            <Link to='/createnote'>
              <Button variant='dark' style={{marginLeft:10, marginBottom :6}}  >
                Create New Note
              </Button>
              
              {
                notes.map(note =>(
                  
                  <Accordion>
                    <Card style={{margin: 10}}>
                     <Card.Header style={{display:'flex'}}>
                       <span style={{
                          color: "black",
                          textDecoration: "none",
                          flex: 1,
                          cursor: "pointer",
                          alignSelf: "center",
                          fontSize: 18,
                        }}>{note.title}
                      </span>
                      <div>
                        <Button variant="warning">Edit</Button>
                        <Button variant="danger">Delete</Button>
                      </div>
                      </Card.Header>
                    </Card>
                  </Accordion>
                  
                ))
              }
              
            </Link>
          </MainScreen> */}
      
      
  
}
export default MyNotes