import React from "react";
import MainStopwatch from "./MainStopwatch";
import MainStyle from "../styles/main.module.css";
import { Col, Row } from "antd";

const Main = () => {
    return (
        <Row
            align="middle"
            justify="center"
            style={{
                height: "100vh",
            }}
        >
            <Col>
                <MainStopwatch />
            </Col>
        </Row>
    );
};

export default Main;
