import React, { useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../error";

const App = () => {

    const [isRandomCharShow, setShow] = useState(true);
    const [error, setError] = useState(false);
    
    const randomChar = isRandomCharShow ? <RandomChar /> : null

    return (
        <>
            {error ? <ErrorMessage /> : (
                <>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        {randomChar}
                        <Button color="primary" size="lg" className="mb-5" onClick={() => setShow(!isRandomCharShow)} >Toggle</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <ItemList />
                    </Col>
                    <Col md="6">
                        <CharDetails />
                    </Col>
                </Row>
                </Container>
                </>
            )}
            
        </>
    );
};

export default App;
