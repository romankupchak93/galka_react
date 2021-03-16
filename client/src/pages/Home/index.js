
import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { getNews } from '../../redux/actions/newsActions';
import Loader from '../../components/Loader/';
import { Container, Row, Col, Jumbotron, Card } from 'react-bootstrap';
import { ShowStatusCard } from "./cardServices/ModalStatus";
import { ShowPayCard } from "./cardServices/ModalPay";
import Slider from "react-slick";
import './Home.css';

class Home extends Component {

    componentDidMount() {
        this.loadNews();
    }

    loadNews() {
        this.props.dispatch(getNews());
    }
    render() {
        const {data, loading} = this.props.news;
        const lastItem = 1;
        return (
            <>
                <Jumbotron fluid className="text-center bg-img mb-0 pt-8">
                    <Container>
                        <Row>
                            <Col>
                                <img className="" src="https://galcard.if.ua/img/logo.png" style={{width: '160px', maxWidth: '100%'}}/>
                                <img className="ml-3" src="/img/Flag-transparent.svg" style={{width: '100px', maxWidth: '100%'}}/>
                            </Col>

                            <Col md="12">
                                <div className="text-center">
                                    <h1>Картка іванофранківця</h1>
                                    <h5>Багатофункціональна електронна картка, яка запроваджується в першу чергу для оплати проїзду в громадському комунальному транспорті.</h5>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <section className="services">
                    <Container fluid="md">
                        <Row className="mb-4">
                            <Col md="12" className="pb-3">
                                <h1 className="bd-title">Послуги</h1>
                            </Col>
                            <div className="col-sm-6">
                                <ShowStatusCard/>
                            </div>
                            <div className="col-sm-6">
                                <ShowPayCard/>
                            </div>
                        </Row>
                    </Container>
                </section>
                <section className="lastNews">
                    <Container fluid="md">
                        <Row>
                            <Col md="12" className="pb-3">
                                <div className="responsive-title">
                                    <h1>Останні новини</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {/*<Col>*/}
                                {/*<Slider {...settings}>*/}
                                <Col lg="6">
                                    {loading && <Loader />}
                                    {data.slice(0, lastItem).map(post => (
                                        <Card key={post.id} border="0" className="card-news h-100 bg-transparent rounded-0">
                                            <Link to={`/news/${post.id}`}>
                                            {!post.image ?
                                                <>
                                                </> :
                                                <Card.Img className="news-img rounded-0" variant="top"
                                                          alt=""
                                                          style={{backgroundImage: `url(${post.image})`
                                                              ,backgroundRepeat: 'no-repeat'
                                                              ,backgroundSize: 'cover'
                                                              ,backgroundPosition: 'center'
                                                              ,maxWidth: '100%'
                                                              ,height: '280px'
                                                              ,marginBottom: '20px'
                                                              ,display: 'block'
                                                          }}/>
                                            }
                                            <Card.Text>
                                                <small className="text-muted">{post.date}</small>
                                            </Card.Text>
                                            <Card.Body className="px-0 mb-4">

                                                    <Card.Title className="news-text-title">{post.title}</Card.Title>
                                            </Card.Body>
                                            </Link>
                                        </Card>
                                    ))}
                                </Col>
                                <Col lg="6">
                                    <div className="row">
                                        {loading && <Loader />}
                                        {data.slice(1, 5).map(post => (
                                            <div className="col-6">
                                                <Card key={post.id} border="0" className="card-news top-border-dark  h-100 bg-transparent rounded-0">
                                                    <Card.Text className="mt-2 mb-1">
                                                        <small className="text-muted">{post.date}</small>
                                                    </Card.Text>
                                                    <Card.Body className="px-0 pt-2 mb-4">
                                                        <Link to={`/news/${post.id}`}>
                                                            <Card.Title className="news-text-title">{post.title}</Card.Title>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                                {/*</Slider>*/}
                            {/*</Col>*/}
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps)(Home);