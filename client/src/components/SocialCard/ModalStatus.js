import React, {useState} from "react";
import {Card, Col, Modal, Row} from "react-bootstrap";
import checkImg from "../img/check.svg";

export function ShowStatusCard() {
    const [show, setShowStatus] = useState(false);
    return (
        <>
            <Card className="services py-2 mb-3" border="dark" onClick={() => setShowStatus(true)} style={{cursor: 'pointer'}}>
                <Row noGutters className="align-items-center">
                    <Col xs="4">
                        <img src={checkImg} style={{maxHeight:'80px'}}/>

                    </Col>
                    <Col xs="8">
                        <Card.Body>
                            <Card.Title>Перевірити статус картки</Card.Title>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Modal
                show={show}
                onHide={() => setShowStatus(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Перевірити статус картки
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group floating-label">
                        <input
                            type="email"
                            id="email-with-placeholder"
                            className="form-control"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="email-with-placeholder">Email with placeholder</label>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}