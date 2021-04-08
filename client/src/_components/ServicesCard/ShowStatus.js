import React, {useState} from "react";
import {Container, Card, Col, Offcanvas, Row, Image} from "react-bootstrap";
import checkImg from "../../_themes/assets/img/icons/check.svg";
import Test from "../../_pages/Test";

export function ShowStatus() {
    const [show, setShowStatus] = useState(false);

    return (
        <>
            <div onClick={() => setShowStatus(true)}>
                <Card className="services py-2 mb-3" border="dark"
                      style={{cursor: 'pointer'}}>
                        <Row noGutters className="align-items-center">
                            <Col xs="4">
                                <Image src={checkImg} alt="Перевірка статуса Галки" style={{maxHeight: '80px'}}/>
                            </Col>
                            <Col xs="8">
                                <Card.Body>
                                    <Card.Title>Перевірити замовлення <span
                                        style={{color: '#f25d23', fontWeight: '700'}}>«Галка»</span></Card.Title>
                                </Card.Body>
                            </Col>
                        </Row>
                </Card>
            </div>
            <Offcanvas
                placement="bottom"
                show={show}
                onHide={() => setShowStatus(false)}>
                <Container>
                    <Row>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Перевірити статус замовлення
                                <span style={{color: "rgb(242, 93, 35); font-weight: 700;"}}>
                                    «Галка»
                                </span>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Test/>
                        </Offcanvas.Body>
                    </Row>
                </Container>
            </Offcanvas>
        </>
    );
}
