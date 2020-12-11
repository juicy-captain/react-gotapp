import React, { useState } from "react";
import ItemList from "../../itemList";
import ItemDetails from "../../itemDetails";
import gotService from "../../../services/gotService";
import RowBlock from "../../rowBlock";
import { Field } from "../../itemDetails";

const BooksPage = () => {
    const [selectedBook, setSelectedBook] = useState(null);
    function onItemSelected(id) {
        setSelectedBook(id);
    }
    const got = new gotService();

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={got.getAllBooks}
            renderItem={({ name }) => name}
        />
    );

    const itemDetails = (
        <ItemDetails itemId={selectedBook} getData={got.getBook}>
            <Field field="numberOfPages" label="Number of pages" />
            <Field field="publisher" label="Publisher" />
            <Field field="released" label="Released" />
        </ItemDetails>
    );

    return (
        <>
            <RowBlock left={itemList} right={itemDetails} />
        </>
    );
};

export default BooksPage;
