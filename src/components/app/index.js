import React from "react";
import { Container } from "reactstrap";
import Header from "../header";
import CharacterPage from "../pages/characterPage";
import HousesPage from "../pages/housesPage";
import BooksPage from "../pages/booksPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BooksItem from "../pages/booksItemPage";
import "./app.css";
import ErrorMessage from "../error";
import RandomCharWidget from "../home";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Switch>
                        <Route path="/" component={RandomCharWidget} exact />
                        <Route
                            path="/characters"
                            exact
                            component={CharacterPage}
                        />
                        <Route path="/houses" exact component={HousesPage} />
                        <Route path="/books" exact component={BooksPage} />
                        <Route
                            path="/books/:id"
                            render={({ match }) => {
                                const { id } = match.params;
                                return <BooksItem bookId={id} />;
                            }}
                        />
                        <Route component={ErrorMessage} path="*" />
                    </Switch>
                </Container>
            </div>
        </Router>
    );
};

export default App;
