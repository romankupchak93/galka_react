import React from "react";
import {Breadcrumb, Col, Row} from "react-bootstrap";

const Breadcrumbs = () => {
    return (
        <Row>
            <Col lg="12" className="pb-3">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Головна</Breadcrumb.Item>
                    <Breadcrumb.Item href="/news">Новини</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
    );
}
export default Breadcrumbs;
