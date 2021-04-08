import React, {Component} from "react";
import {connect} from 'react-redux';
import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap';
import {getNews} from '../../_actions';
import Loader from '../../_components/Loader/';
import {Link} from "react-router-dom";
import './css/News.css'

class NewsPage extends Component {

    componentDidMount() {
        this.loadNews();
    }

    loadNews() {
        this.props.dispatch(getNews());
    }

    render() {
        const {data, loading} = this.props.news;

        return (
            <>
                <section className="news">
                    <Container fluid="md">
                        <Row>
                            <Col lg="12" className="pt-4">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Головна</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                            </Row>
                        </Container>
                    <Container fluid="md">
                        <Row>
                            <Col md="12" className="pb-3">
                                <h1 className="">Новини</h1>
                            </Col>
                        </Row>
                        <Row>
                            {loading && <Loader/>}
                            {data.map((post =>
                                <Col key={post.id} sm="6" lg="4" className="">
                                        <Card border="0" className="card h-100 bg-transparent rounded-0">
                                            <Link key={post.id} to={`/news/${post.id}`}>
                                                <Card.Img className="news-img rounded-0" variant="top"
                                                      alt=""
                                                      style={{
                                                          backgroundImage: `url(${post.image})`
                                                          , backgroundRepeat: 'no-repeat'
                                                          , backgroundSize: 'cover'
                                                          , backgroundPosition: 'center'
                                                          , maxWidth: '100%'
                                                          , height: '250px'
                                                          , marginBottom: '20px'
                                                          , display: 'block'
                                                      }}/>
                                            </Link>
                                            <Card.Body className="px-0 py-0 border-bottom-dark mb-4">
                                                <Link key={post.id} to={`/news/${post.id}`}>
                                                    <Card.Title className="post-title mb-4">
                                                        {post.title}
                                                    </Card.Title>
                                                </Link>
                                                <Card.Text className="text-muted small">
                                                    {post.date.substring(0, 10).split('-').reverse().join('/')}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                            ))}
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

export default connect(mapStateToProps)(NewsPage);
