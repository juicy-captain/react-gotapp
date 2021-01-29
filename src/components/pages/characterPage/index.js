import React, { useState } from "react";
import ItemList from "../../itemList";
import ItemDetails from "../../itemDetails";
import gotService from "../../../services/gotService";
import RowBlock from "../../rowBlock";
import { Field } from "../../itemDetails";

const CharacterPage = () => {
    const [selectedChar, setSelectedChar] = useState(null);
    function onItemSelected(id) {
        setSelectedChar(id);
    }
    const got = new gotService();

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={got.getAllCharacters}
            renderItem={({ name, gender }) => `${name} (${gender})`}
        />
    );

    const itemDetails = (
        <ItemDetails itemId={selectedChar} getData={got.getCharacter}>
            <Field field="gender" label="Gender" />
            <Field field="born" label="Born" />
            <Field field="died" label="Died" />
            <Field field="culture" label="Culture" />
        </ItemDetails>
    );

    return (
        <>
            <RowBlock left={itemList} right={itemDetails} />
        </>
    );
};

export default CharacterPage;
