import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {userActions} from "../../_actions";
import {Card, Col, Container, Row, Tab} from "react-bootstrap";
import '../../_pages/ProfilePage/css/CardInfo.css';
import NavigationTabPane from "../Navigation/TabPane";

class Index extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { user } = this.props;

        if (!user) {
            return <div>Loading...</div>;
        }

        return (
            <div className="w-100">
                <div className="paper-ligh ">
                    <Container fluid="md">
                        <h1>Вітаємо, {user.name + ' ' + user.surName} </h1>
                    </Container>
                </div>
                <Container fluid="md">
                    <Tab.Container defaultActiveKey="second">
                        <NavigationTabPane/>
                        <Tab.Content className="multiple-content-user">
                            <Tab.Pane eventKey="first">
                                <p>
                                    <Link to="/login">Logout</Link>
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row xs={1} md={2} className="g-4">
                                    <Col>
                                        <Card className="smart-card_stud">
                                            <Card.Body>
                                                <Card.Title>{user.socialCardTypeName}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{user.socialCardNumber}</Card.Subtitle>
                                                <Card.Text>
                                                    {user.validityDate.substring(0, 10).split('-').reverse().join('/')}
                                                </Card.Text>
                                                <Card.Link href="#">Card Link</Card.Link>
                                                <Card.Link href="#">Another Link</Card.Link>
                                            </Card.Body>
                                        </Card>

                                        <Link to="/profile/">
                                            Back To Index
                                        </Link>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </div>
            // <div>
            //     <br />
            //     <Link className="btn btn-info" to="/profile/">Back To Index</Link>
            //     <h3>{user.socialCardNumber}</h3>
            //     <p>{user.validityDate}</p>
            // </div>
        );
    }
}
function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
}

const connectedCardInfo = connect(mapState, actionCreators)(Index);
export { connectedCardInfo as CardInfo };
// function mapStateToProps(state) {
//     const { user } = state;
//     return {
//         user,
//     };
// }
//
// export default connect(mapStateToProps)(Index);
// function mapStateToProps({ posts }, ownProps) {
//     return { post: posts[ownProps.match.params.id] };
// }
//
// export default connect(mapStateToProps, { userActions })(Index);
