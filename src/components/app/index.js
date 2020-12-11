import React, { useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../pages/characterPage";
import HousesPage from "../pages/housesPage";
import BooksPage from "../pages/booksPage";

const App = () => {
    const [isRandomCharShow, setShow] = useState(true);
    const randomChar = isRandomCharShow ? <RandomChar /> : null;

    return (
        <>
            <Container>
                <Header />
            </Container>
            <Container>
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
                <CharacterPage />
                <HousesPage />
                <BooksPage />
            </Container>
        </>
    );
};

export default App;
