import React from "react";
import ItemList from "../../itemList";
import gotService from "../../../services/gotService";
import { withRouter } from "react-router-dom";

const BooksPage = (props) => {
    const got = new gotService();

    return (
        <ItemList
            onItemSelected={(itemId) => {
                props.history.push(itemId);
            }}
            getData={got.getAllBooks}
            renderItem={({ name }) => name}
        />
    );
};

export default withRouter(BooksPage);
