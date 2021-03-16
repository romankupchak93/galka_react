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
        const settings = {
            dots: true,
            infinite: false,
            // fade: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };
        const firstItem = 1;
        const count = 4;
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
                            <Col>
                                <div className="main-item_news-section">
                                    <div className="row">
                                        <div className="col-6">
                                            <h1 className="article-level-1 text-white">Новини</h1>
                                        </div>
                                        <div className="col-6">
                                            <div className="wrap-all-link">
                                                <a href="/news" className="wrap-all-link_link-white">
                                                    <span>Всі новини</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {loading && <Loader />}
                                        {data.slice(0, firstItem).map(post => (
                                            <div className="col-lg-6">
                                                <Card key={post.id} border="0" className="card-news bg-transparent mb-4 bottom-border-dark rounded-0">
                                                    {!post.image ?
                                                        <>
                                                        </> :
                                                        <Card.Img className="news-img rounded-0" variant="top"
                                                                  alt=""
                                                                  style={{backgroundImage: `url(${post.image})`
                                                                      ,backgroundRepeat: 'no-repeat'
                                                                      ,backgroundSize: 'cover'
                                                                      ,backgroundPosition: 'center'
                                                                      ,maxWidth: '350px'
                                                                      ,height: '280px'
                                                                      ,marginBottom: '20px'
                                                                      ,display: 'block'
                                                                  }}/>
                                                    }
                                                    <Card.Body className="px-0">
                                                        <Link to={`/post/${post.id}`}>
                                                            <Card.Title className="news-text-title">{post.title}</Card.Title>
                                                        </Link>
                                                        <Card.Text>
                                                            <small className="text-muted">{post.date}</small>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                {/*<div className="main-item_news-top">*/}
                                                {/*    <div className="main-item_news-preview"*/}
                                                {/*         style={{ backgroundImage: `url(${post.image})`}}>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*    <div className="main-item_news-content">*/}
                                                {/*        <div className="main-item_news-content-date">*/}
                                                {/*            {post.date}*/}
                                                {/*        </div>*/}
                                                {/*        <Link to={`/post/${post.id}`} className="main-item_news-content-title">*/}
                                                {/*            {post.title}*/}
                                                {/*        </Link>*/}
                                                {/*    </div>*/}
                                            </div>
                                        ))}
                                        <div className="col-lg-6">
                                            <div className="row">
                                                {loading && <Loader />}
                                                {data.slice(1, 5).map(post => (
                                                    <div className="col-6">
                                                        <div className="main-item">
                                                            <div className="main-item_content">
                                                                <div className="main-item_content-date">
                                                                    {post.date}
                                                                </div>
                                                                <Link to={`/post/${post.id}`} className="main-item_content-title">
                                                                    {post.title}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/*<Slider {...settings}>*/}
                                {/*    {loading && <Loader />}*/}
                                {/*    {data.slice(0, count).map(post => (*/}
                                {/*        <Card key={post.id} border="0" className="card-news h-100 bg-transparent rounded-0">*/}
                                {/*            {!post.image ?*/}
                                {/*                <>*/}
                                {/*                </> :*/}
                                {/*                <Card.Img className="news-img rounded-0" variant="top"*/}
                                {/*                          alt=""*/}
                                {/*                          style={{backgroundImage: `url(${post.image})`*/}
                                {/*                              ,backgroundRepeat: 'no-repeat'*/}
                                {/*                              ,backgroundSize: 'cover'*/}
                                {/*                              ,backgroundPosition: 'center'*/}
                                {/*                              ,maxWidth: '350px'*/}
                                {/*                              ,height: '160px'*/}
                                {/*                              ,marginBottom: '20px'*/}
                                {/*                              ,display: 'block'*/}
                                {/*                          }}/>*/}
                                {/*            }*/}
                                {/*            <Card.Body className="px-0 mb-4 bottom-border-dark ">*/}
                                {/*                <Link to={`/post/${post.id}`}>*/}
                                {/*                    <Card.Title className="news-text-title">{post.title}</Card.Title>*/}
                                {/*                </Link>*/}
                                {/*                <Card.Text>*/}
                                {/*                    <small className="text-muted">{post.date}</small>*/}
                                {/*                </Card.Text>*/}
                                {/*            </Card.Body>*/}
                                {/*        </Card>*/}
                                {/*    ))}*/}
                                {/*</Slider>*/}
                            </Col>
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
