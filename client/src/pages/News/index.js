import React, {Component} from "react";
import {connect} from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {getNews, getNewsById} from '../../redux/actions/newsActions';
import Loader from '../../components/Loader/';
import {Link} from "react-router-dom";
import './News.css'
class News extends Component {

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

                <section className="allNews pt-7">
                    <Container fluid="md">
                        <Row>
                            <Col md="12" className="pb-3">
                                <h1 className="">Новини</h1>
                            </Col>
                        </Row>
                        <Row>
                            {loading && <Loader/>}
                             {data.map(post => (
                                <Col sm="6" lg="4" className="">
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
                                                          ,height: '160px'
                                                          ,marginBottom: '20px'
                                                          ,display: 'block'
                                                      }}/>
                                        }
                                            <Card.Body className="px-0">
                                            <Link to={`/news/${post.id}`}>
                                                <Card.Title className="news-text-title">{post.title}</Card.Title>
                                            </Link>
                                            <Card.Text>
                                                <small className="text-muted">{post.date}</small>
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

export default connect(mapStateToProps)(News);