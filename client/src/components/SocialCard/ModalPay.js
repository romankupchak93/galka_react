import React, {useState} from "react";
import {Card, Col, Modal, Row} from "react-bootstrap";
import payCardImg from "../img/pay_card.svg";

export function ShowPayCard() {
    const [show, setShowPay] = useState(false);

    return (
        <>
            <Card className="services py-2 mb-3" border="dark" onClick={() => setShowPay(true)} style={{cursor: 'pointer'}}>
                <Row noGutters className="align-items-center">
                    <Col xs="4">
                        <img src={payCardImg} alt="check status" style={{maxHeight:'80px'}}/>
                    </Col>
                    <Col xs="8">
                        <Card.Body>
                            <Card.Title>Поповнити картку <span style={{color: '#f25d23', fontWeight: '700'}}>«Галка»</span></Card.Title>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Modal
                show={show}
                onHide={() => setShowPay(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal2
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Custom2
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}