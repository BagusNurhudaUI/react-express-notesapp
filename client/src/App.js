import React, {useState, useEffect}   from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MyNotes from './pages/MyNotes';
import Login from './components/Login';




function App() {

  // const [notes, getNotes] = useState([{}])

  // useEffect(() => {
  //   fetch("/api")
  //   .then(response => response.json())
  //   .then (data => {
  //     getNotes(data)
  //   })
  // }, [])

  // console.log(typeof getNotes.users);
  return (

    <BrowserRouter>
      <Header /> 
      {/* <div>
        
        {(typeof getNotes.users ==='undefined') ? (<p>Loading...</p>
        ) : (
          notes.users.map((user,i) => (
            <p key={i}>{user}</p>
          ))
        )}
    </div> */}
      <main>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/mynotes" element={<MyNotes/>}/>
        <Route exact path="/createnote" element={<Main/>}/>
      </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
