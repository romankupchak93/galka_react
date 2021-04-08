import {Nav} from "react-bootstrap";
import React from "react";

const NavigationTabPane = () => {
    return (
        <div className="nav-scroller multiple-tab-user">
            <Nav variant="tabs" className="tab-user-nav">
                <Nav.Item>
                    <Nav.Link eventKey="first">Відомості про мене</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Мої картки «Галка»</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
export default NavigationTabPane;
