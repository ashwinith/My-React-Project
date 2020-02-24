import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

 
class Header extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/login">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                    <Nav.Link
                        as={Link}
                        to="/home">Home</Nav.Link>
            
            </Nav>
            <Nav inline="true">
                    <Nav.Link
                        as={Link}
                    to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
              <Nav.Link as={Link} to="/contactus">ContactUs</Nav.Link>
            </Nav>
          </Navbar>
        );
    }
}

export default Header;