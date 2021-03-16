import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {loginStart, userLogout} from '../../redux/actions/userActions';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './css/Header.css';
import './css/Offcanvas.css';
import Logo from "./Logo";

export class DefaultHeader extends Component {
    toggleClass = () => {
        const oldStyle = document.getElementById('body').className;
        const newClassName = oldStyle === 'open' ? 'h-100' : 'open'
        document.getElementById('body').className =  newClassName;
    }

    logout() {
        this.props.dispatch(userLogout())
    }

    login() {
        this.props.dispatch(loginStart())
    }

    render() {

        const authRoutes = this.props.auth.loggedIn ?
            <>
                <NavDropdown title={`${this.props.auth.user.fullName}`} id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Nav.Link eventKey="4" as={Link} to="/profile">
                            Профіль
                        </Nav.Link>
                    </NavDropdown.Item>
                    {/*<NavDropdown.Item activeClassName='active' to="/profile">Профіль</NavDropdown.Item>*/}
                    <NavDropdown.Item activeClassName='active' onClick={() => this.logout()}>Вихід</NavDropdown.Item>
                </NavDropdown>
            </> :
            <>
                <Nav.Item>
                    <Link className="btn btn-outline-dark gal-btn" activeClassName='active' to='/login'>Увійти до кабінету</Link>
                </Nav.Item>
            </>;
        return (
            <Navbar collapseOnSelect className="nav-absolute" expand="md">
                <Container fluid="md" className="container-inner justify-content-end">
                    {/*<div className="d-none d-sm-block d-md-none">*/}
                    {/*    <Logo/>*/}
                    {/*</div>*/}
                    {/*<di  v className="header_toggle d-lg-none d-md-flex">*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" onClick={this.toggleClass}>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </Navbar.Toggle>
                    {/*</div>*/}
                    <Navbar.Collapse className="" id="basic-navbar-nav">
                        <Nav className="mr-auto mob-line">
                            <Nav.Item>
                                <Nav.Link eventKey="2" as={Link} to="/news">
                                    Новини
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" as={Link} to="/faq">
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
    auth: state.auth
});
export default connect(mapStateToProps)(DefaultHeader);
