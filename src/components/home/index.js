import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import RandomChar from "../randomChar";

const RandomCharWidget = () => {
    const [isRandomCharShow, setShow] = useState(true);
    const randomChar = isRandomCharShow ? <RandomChar interval={4000} /> : null;

    return (
        <Row>
            <Col lg={{ size: 5, offset: 0 }}>
                {randomChar}
                <Button
                    color="primary"
                    size="lg"
                    className="mb-5"
                    onClick={() => setShow(!isRandomCharShow)}
                >
                    Toggle
                </Button>
            </Col>
        </Row>
    );
};

export default RandomCharWidget;
