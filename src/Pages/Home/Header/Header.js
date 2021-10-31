import axios from 'axios';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    const [logos, setLogos] = useState([]);
    // const [balisUrl,setBalisUrl] = useState({});
    axios.get('https://nameless-savannah-22070.herokuapp.com/logo')
    .then(res=>{
        setLogos(res.data);
        // console.log(res.data);
    })
    
    return (
        <div>

            
            <Navbar bg="light" expand="lg" className="p-0">
                <Container>
                <Navbar.Brand href="#home">
                {
                        logos.map(logo => <img
                            key={logo._id}
                            alt=""
                            src= {logo.img}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            /> )
                            
                    }
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="fs-4" as={Link} to="/home" href="#home">Home</Nav.Link>
                        <Nav.Link className="fs-4" as={Link} to="/link" href="#link">Link</Nav.Link>
                        <Nav.Link className="fs-4" as={Link} to="/contact" href="#link">Contact Us</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;