import React from "react";
import ItemDetails from "../../itemDetails";
import gotService from "../../../services/gotService";
import { Field } from "../../itemDetails";

const BooksItem = ({ bookId }) => {
    const got = new gotService();
    return (
        <ItemDetails itemId={bookId} getData={got.getBook}>
            <Field field="numberOfPages" label="Number of pages" />
            <Field field="publisher" label="Publisher" />
            <Field field="released" label="Released" />
        </ItemDetails>
    );
};

export default BooksItem;
