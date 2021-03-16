import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { Container, Nav, Tab } from "react-bootstrap";
import './Profile.css';

class Profile extends Component {

    render() {
        const { user: currentUser } = this.props;

        if (!currentUser) {
            return <Redirect to="/login" />;
        }
        return (
            <div className="w-100">
                <div className="paper-ligh ">
                    <Container fluid="md">
                        <h1>Вітаємо, {currentUser.fullName} </h1>
                    </Container>
                </div>
                <Container fluid="md">
                    <Tab.Container defaultActiveKey="first">
                        <div className="nav-scroller multiple-tab-user">
                            <Nav variant="tabs" className="tab-user-nav">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Персональні налаштування</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Мої картки «Галка»</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content className="multiple-content-user">
                            <Tab.Pane eventKey="first">
                                {/*{currentUser.fullName}*/}
                                {/*{currentUser.birthday}*/}
                                {/*rowNumber: 1,*/}
                                {/*password: "test2",*/}
                                {/*id: 1761867,*/}
                                {/*fullName: "Амбріс Олег Олексійович",*/}
                                {/*birthday: "17.06.2000",*/}
                                {/*cardTypeName: "Загальна",*/}
                                {/*privateCardNumber: "011001213",*/}
                                {/*publicCardNumber: "01****1001213",*/}
                                {/*validityDate: "",*/}
                                {/*username: "test2"*/}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {currentUser.cardTypeName}
                                {currentUser.privateCardNumber}
                                {currentUser.validityDate}
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Profile);