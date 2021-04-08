import React, {useState} from "react";
import {Card, Col, Offcanvas, Row} from "react-bootstrap";
import payCardImg from "../../_themes/assets/img/icons/pay_card.svg";

export const ShowPay = () => {
    const [show, setShow] = useState(false);

    return (
        <>
        <div onClick={() => setShow(true)}>
            <Card className="services py-2 mb-3" border="dark"
                  style={{cursor: 'pointer'}}>

                    <Row noGutters className="align-items-center">
                        <Col xs="4">
                            <img src={payCardImg} alt="Оплата поїздок Галкою" style={{maxHeight: '80px'}}/>
                        </Col>
                        <Col xs="8">
                            <Card.Body>
                                <Card.Title>Поповнити картку <span
                                    style={{color: '#f25d23', fontWeight: '700'}}>«Галка»</span></Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
            <Offcanvas
                placement="bottom"
                show={show}
                onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}
