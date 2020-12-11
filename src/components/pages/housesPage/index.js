import React, { useState } from "react";
import ItemList from "../../itemList";
import ItemDetails from "../../itemDetails";
import gotService from "../../../services/gotService";
import RowBlock from "../../rowBlock";
import { Field } from "../../itemDetails";

const HousesPage = () => {
    const [selectedHouse, setSelectedHouse] = useState(null);
    function onItemSelected(id) {
        setSelectedHouse(id);
    }
    const got = new gotService();

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={got.getAllHouses}
            renderItem={({ name }) => name}
        />
    );

    const itemDetails = (
        <ItemDetails itemId={selectedHouse} getData={got.getHouse}>
            <Field field="region" label="Region" />
            <Field field="words" label="Words" />
            <Field field="titles" label="Titles" />
            <Field field="ancestralWeapons" label="Ancestral Weapons" />
        </ItemDetails>
    );

    return (
        <>
            <RowBlock left={itemList} right={itemDetails} />
        </>
    );
};

export default HousesPage;
