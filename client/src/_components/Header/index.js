import React, {Component} from 'react';
import {withRouter, NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {userActions} from '../../_actions';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Logo from './Logo/Logo';
import './css/Header.css';
import './css/Offcanvas.css';

export class Header extends Component {
    overflowBody = () => {
        const oldStyle = document.getElementById('body').className;
        document.getElementById('body').className = oldStyle === 'open' ? ' ' : 'open';
    }
    logout() {
        this.overflowBody();
        this.props.dispatch(userActions.logout());
    }

    login() {
        this.props.dispatch(userActions.login());
    }

    render() {
        const authRoutes = this.props.authentication.loggedIn ?
            <>
                <NavDropdown title={`${this.props.authentication.user.name + ' ' + this.props.authentication.user.surName}`} id="userInfo">
                    <NavDropdown.Item eventKey="4" as={NavLink} to="/profile"
                                      onClick={() => this.overflowBody()}>Профіль</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.logout()}>Вихід</NavDropdown.Item>
                </NavDropdown>

            </> :
            <>
                <Nav.Item>
                    <NavLink className="btn btn-outline-dark gal-btn" activeClassName='active' to='/login'
                          onClick={() => this.overflowBody()}>Увійти до кабінету
                    </NavLink>
                </Nav.Item>
            </>;
        const pathName = window.location.pathname;
        // const pathName = this.props.location.pathname
        const HomePath = pathName === "/" || pathName === "/home";
        console.log(pathName);
        return (
            <Navbar collapseOnSelect className="bg-transparent overlay-nav fixed-sm" expand="md">
                <Container fluid="md" className="container-inner">
                    {
                        HomePath ?
                        null
                        :
                        <Navbar.Brand href="/">
                            <Logo/>
                        </Navbar.Brand>
                    }
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 ms-auto"
                                   onClick={() => this.overflowBody()}>
                                   <span> </span>
                                   <span> </span>
                                   <span> </span>
                    </Navbar.Toggle>
                    <Navbar.Collapse className="" id="basic-navbar-nav">
                        <Nav className="me-auto mob-line">
                            <Nav.Item>
                                <Nav.Link eventKey="2" as={NavLink} to="/news" onClick={() => this.overflowBody()}>
                                    Новини
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" as={NavLink} to="/faq" onClick={() => this.overflowBody()}>
                                    Запитання
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="d-flex justify-content-end">
                            {authRoutes}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
}
const mapStateToProps = (state) => ({
    authentication: state.authentication
});
export default connect(mapStateToProps)(withRouter(Header));
