import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {ShowStatus} from "../../_components/ServicesCard/ShowStatus";
import {ShowPay} from "../../_components/ServicesCard/ShowPay";
import {getNews} from "../../_actions";
import Loader from "../../_components/Loader";
import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import {ArrowRight} from 'react-bootstrap-icons';
import './css/HomePage.css';
import City_blk from '../../_themes/assets/img/home/City_blk.svg'

class HomePage extends Component {
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
                <main className="layout-main">
                    <section className="home-header bg-light bg-img pb-0">
                        <div className="logo-galka-bottom">
                            <div className="px-md-4 py-md-5 my-md-5 text-center">
                                <Container fluid="md">
                                    <Row>
                                        <div className="header-box">
                                            <div className="align-items-center">
                                                <a href="/" className="" title="На головну сторінку">
                                                    <Image className="img-fluid" src={City_blk}
                                                           style={{width: '160px'}}
                                                    />
                                                </a>
                                            </div>
                                            <h1 className="display-5 fw-bold">Картка іванофранківця</h1>
                                            <div className="mx-auto">
                                                <p className="lead mb-4">Багатофункціональна електронна картка,
                                                    яка запроваджується в першу чергу для
                                                    оплати проїзду в громадському комунальному транспорті.</p>
                                                {/*<div className="header_content-box"/>*/}
                                            </div>
                                        </div>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </section>
                    <section className="services">
                        <Container fluid="md">
                            <Row className="mb-4">
                                <Col md="12" className="pb-3">
                                    <h1>Послуги</h1>
                                </Col>
                                <div className="col-sm-6">
                                    <ShowStatus/>
                                </div>
                                <div className="col-sm-6">
                                    <ShowPay/>
                                </div>
                            </Row>
                        </Container>
                    </section>
                    <section className="lastNews">
                        <Container fluid="md">
                            <Row>
                                <Col md="12" className="mb-5">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="responsive-title">
                                                <h1>Останні новини</h1>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex justify-content-end h-100">
                                                <button type="button"
                                                        className="btn btn-lg btn-arrow arrow-right btn-link">
                                                    <Link to="/news">
                                                        Всі новини <ArrowRight/>
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {loading && <Loader/>}
                            <Row>
                                <Col lg="6">
                                    {data.slice(0, lastItem).map(post => (
                                        <Card key={post.id} border="0" className="card mb-4 bg-transparent">
                                            <Card.Img className="news-img rounded-0" variant="top"
                                                      alt=""
                                                      style={{
                                                          backgroundImage: `url(${post.image})`
                                                          , backgroundRepeat: 'no-repeat'
                                                          , backgroundSize: 'cover'
                                                          , backgroundPosition: 'center'
                                                          , maxWidth: '100%'
                                                          , height: '280px'
                                                          , marginBottom: '20px'
                                                          , display: 'block'
                                                      }}/>
                                            <Card.Body className="px-0 py-0">
                                                <Card.Text>
                                                    <small className="text-muted">
                                                        {post.date.substring(0, 10).split('-').reverse().join('/')}
                                                    </small>
                                                </Card.Text>
                                                <Card.Title>
                                                    <Link to={`/news/${post.id}`} key={post.id}>
                                                        {post.title}
                                                    </Link>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </Col>
                                <Col lg="6">
                                    <div className="row">
                                        {data.slice(1, 5).map(post => (
                                            <div key={post.id} className="col-6">
                                                <Card border="0"
                                                      className="card mb-4 bg-transparent border-top-dark rounded-0">
                                                    <Card.Body className="px-0 py-0">
                                                        <Card.Text className="my-2">
                                                            <small className="text-muted">
                                                                {post.date.substring(0, 10).split('-').reverse().join('/')}
                                                            </small>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <Link to={`/post/${post.id}`} key={post.id}>
                                                                {post.title}
                                                            </Link>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </>
        )
    }
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps)(HomePage);
