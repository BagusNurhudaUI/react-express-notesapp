import React from 'react'
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Header ()  {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand >
            <Link to='/'className='navbrand' >BNotes
            </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {(
              <Form >
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  
                />
              </Form>
            )}
          </Nav>
          <Nav>
           
              <>
                <Nav.Link >
                    <Link to='/mynotes'>My Notes</Link>
                </Nav.Link>
                <NavDropdown
                  
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            
              <Nav.Link href="/login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </div>
  )
}

export default Header;
