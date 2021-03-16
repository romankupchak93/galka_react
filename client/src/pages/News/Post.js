import React, {Component} from "react";
import {connect} from 'react-redux';
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap';
import Loader from '../../components/Loader/';
import './Post.css'
import {Link} from "react-router-dom";
import {getNews} from "../../redux/actions/newsActions";
class Post extends Component {
    constructor() {
        super();
        this.state = {
            postDetails: {
                id: 1,
                date: '19.01.2021',
                image: 'https://ekvytoknews.tis.if.ua/images/55mar-bogdan.jpg',
                title: 'КП "Електроавтотранс" ІФ уже налагодив системний контроль за наявністю проїзних квитків',
                text: 'Також пасажирів детально інформують про особливості пільгового перевезення. З 1 березня проїзд пільгових категорій в Івано-Франківську буде можливий лише за обов’язкової реєстрації карткою «Галка».',
            },postDetails1: {
                id: 2,
                date: '21.01.2019',
                image: 'https://ekvytoknews.tis.if.ua/images/galka-telephone2.jpg',
                title: '«Галка» обов’язкова: з березня пільговий проїзд – лише з карткою',
                text: 'Вже з 1 березня у комунальному транспорті Івано-Франківська завершиться перехід до автоматизованої системи обліку оплати проїзду. Це означає, що всі пасажири повинні будуть обов’язково валідувати картку «Галка» після посадки у громадський транспорт. І пільговий проїзд буде можливим лише після реєстрації «Галки».\n' +
                    '\n' +
                    'Понад 80 тисяч різних видів карток «Галка» уже побачили світ: пільгова, учнівська, студентська, загальна та персоніфікована. Багато карток залишаються у Департаменті соціальної політики, оскільки власники не поспішають їх забрати.\n' +
                    '\n' +
                    'Не поспішають забирати свої картки і студенти. На сьогодні видачі очікують всі студентські картки, які були замовлені до грудня 2020 року. Щоб забрати студентську картку необхідно прийти у ЦНАП за адресою: вул.Незалежності 9, захопивши український паспорт та студентський квиток. Також тут на видачі є пенсійні картки. Для їх отримання треба мати паспорт та пенсійне посвідчення.\n' +
                    '\n' +
                    'З  01 березня КП «Електроавтотранс» посилює роботу контролерів.\n' +
                    '\n' +
                    ' Кожного дня на лінії працює 6-7 груп контролю. Ми привчаємо пасажирів до користування транспортними картками «Галка», в тому числі пільговими картками. Всі мешканці Івано-Франківської ОТГ, які мають пільговий проїзд, обов’язково повинні при кожній посадці реєструвати поїздку в  транспорті, незалежно від того чи  це платна, пільгова, учнівська або студентська картка. У випадку, коли один із валідаторів не працює, потрібно зробити це на іншому валідаторі або на терміналі у водія.\n' +
                    '\n' +
                    'Контролери мають спеціальне обладнання, яке здатне перевірити чи була ця картка зареєстрована у цьому транспортному засобі.Якщо під час контролю поїздка буде незареєстрована чи неоплачена, контролери мають право на продаж свого квитка, який суттєво дорожчий і прирівнюється до штрафу.\n' +
                    '\n' +
                    'Повний перехід на систему електронного квитка дозволить не лише покращити культуру платежів у транспорті, але й чітко облікувати проїзд пільговиків.\n' +
                    '\n' +
                    'Для учасників бойових дій, осіб з інвалідністю, які не проживають на території міської громади, пільговий проїзд залишиться по звичайних посвідчення до моменту вирішення цього питання на рівні Кабінету Міністрів України.',
            }
        };
    }
    componentDidMount() {
        this.loadNews();
    }

    loadNews() {
        this.props.dispatch(getNews());
    }

    render() {
        const {data, loading} = this.props.news;
        const lastItem = 1;
        const {id, title, image, date, text} = this.state.postDetails;
        return (
            <>
                <section className="allNews pt-7">
                    <Container fluid="md">
                        <Row>
                            <Col md="12" className="pb-3">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Головна</Breadcrumb.Item>
                                    <Breadcrumb.Item href="/news">Новини</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                            {loading && <Loader/>}
                            <Col md="12" className="pb-3" key={id}>
                                <div className="page-title-text">
                                    <h3 className="">{title}</h3>
                                </div>
                                <div className="page-title-date">
                                    <p className="">{date}</p>
                                </div>
                                <div className="row justify-content-lg-between">
                                    <div className="col-lg-8">
                                        <div className="post-content">
                                            <img
                                                src={image}
                                                alt={title}
                                                title="" className="img-fluid post-img"
                                            />
                                            <p dir="ltr">{text}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
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
                                            <Link to={`/news/${post.id}`}>
                                                <Card.Title className="news-text-title">{post.title}</Card.Title>
                                            </Link>
                                        </Card.Body>
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
        );
    }
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps)(Post);