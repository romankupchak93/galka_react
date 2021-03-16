import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";


export default () => (
    <Navbar bg="light" expand="lg">
           <Container>
           <Navbar.Brand href="/">
               <div className="site-logo">
                   {/*<img src={logo} alt=""/>*/}
                   <div className="logo-text visible-xs visible-md visible-lg">
                       <div className="logo-title">Галка</div>
                       <div className="logo-sub-title">розумна картка</div>
                   </div>
               </div>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                   <Nav.Item>
                       <NavLink exact className="nav-link" activeClassName='active' to='/'>Головна</NavLink>
                   </Nav.Item>
                   <Nav.Item>
                       <NavLink className="nav-link" activeClassName='active' to='/users'>Користувачі</NavLink>
                   </Nav.Item>
                   <Nav.Item>
                       <NavLink className="nav-link" activeClassName='active' to='/faq'>Часті запитання</NavLink>
                   </Nav.Item>
               </Nav>
               <Nav className="d-flex justify-content-end align-items-center">
                   <Nav.Item>
                       <NavLink className="btn btn-outline-secondary"  to='/login'>Вхід</NavLink>
                       {/*{loggedin && (<NavLink to='/logout'>Вийти</NavLink>)}*/}
                       {/*{!loggedin && (<NavLink to='/'>Вхід</NavLink>)}*/}
                   </Nav.Item>
               </Nav>
           </Navbar.Collapse>
           </Container>
       </Navbar>
)
