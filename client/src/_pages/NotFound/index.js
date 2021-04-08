import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

export const NotFound = () => {
    return (
        <div className="d-lg-flex half w-100">
            <Container className="h-100">
                <Row className="h-100">
                    <div className="d-flex align-items-center">
                        <Col>
                            <Image className="" src="https://galcard.if.ua/img/logo.png"
                                   style={{width: '160px', maxWidth: '100%'}}/>
                            <Image className="ml-3" src="/img/Flag-transparent.svg"
                                   style={{width: '100px', maxWidth: '100%'}}/>
                            <h1 style={{fontSize: '70px', fontWeight: '700'}}>404</h1>
                            <div className="mt-5">
                                <h3>Даної сторінки не знайдено.</h3>
                                <h4>Схоже, що переїхала на іншу адресу.</h4>
                            </div>
                            <div className="mt-5">
                                <a className="btn btn-lg gal-btn" href="/">На головну</a>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
