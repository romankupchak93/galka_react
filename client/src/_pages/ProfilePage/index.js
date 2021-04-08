import React, {Component} from "react";
import {connect} from "react-redux";
import {userActions} from "../../_actions";
import {Container, Row, Col, Card, Tab, ListGroup} from "react-bootstrap";
import './css/Profile.css';
import {Link} from "react-router-dom";
import NavigationTabPane from "../../_components/Navigation/TabPane";

class ProfilePage extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const {user, users} = this.props;
        return (
            <main id="layout-main" className="flex-shrink-0">
            <section className="profile">
                <div className="logo-galka-bottom">
                    <div className="paper-ligh">
                        <Container fluid="md">
                            <h1>Вітаємо, {user.name + ' ' + user.surName} </h1>
                        </Container>
                    </div>
                </div>
                <Container fluid="md">
                    <Tab.Container defaultActiveKey="first">
                        <NavigationTabPane/>
                        <Tab.Content className="multiple-content-user">
                            <Tab.Pane eventKey="first">
                                <ListGroup>
                                    <ListGroup.Item>{user.surName}</ListGroup.Item>
                                    <ListGroup.Item>{user.name}</ListGroup.Item>
                                    <ListGroup.Item>{user.middleName}</ListGroup.Item>
                                    <ListGroup.Item>{user.email}</ListGroup.Item>
                                </ListGroup>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row xs={1} md={2} className="g-4">
                                    {users.loading && <em>Loading users...</em>}
                                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                                    {users.items &&
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{user.socialCardTypeName}</Card.Title>
                                                <Card.Subtitle
                                                    className="mb-2 text-muted">{user.socialCardNumber}</Card.Subtitle>
                                                <Card.Text>
                                                    {user.validityDate.substring(0, 10).split('-').reverse().join('/')}
                                                </Card.Text>
                                                <Card.Link as={Link} to={`/card/${user.socialCardNumber}`}
                                                           key={user.id}>
                                                    Інформація
                                                </Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </section>
            </main>
        );
    }
}

function mapState(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {user, users};
}

const actionCreators = {
    getUsers: userActions.getAll,
}
const connectedProfilePage = connect(mapState, actionCreators)(ProfilePage);
export {connectedProfilePage as ProfilePage};
