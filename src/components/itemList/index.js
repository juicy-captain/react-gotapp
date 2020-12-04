import React, { useEffect, useState } from "react";
import gotService from "../../services/gotService";
import ErrorMessage from "../error";
import Spinner from "../spinner";
import "./itemList.css";

const ItemList = ({ onCharSelected }) => {
    const state = {
        charList: null,
        error: false,
    };

    const [data, setData] = useState(state);
    let { charList, error } = data;

    useEffect(() => {
        const got = new gotService();
        got.getAllCharacters().then((charList) => {
            setData({ charList, error: false });
        });
    }, []);

    if (!charList) {
        return <Spinner />;
    }
    const items = renderItems(charList);

    function renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => onCharSelected(41 + i)}
                >
                    {item.name}
                </li>
            );
        });
    }

    return <ul className="item-list list-group"> {items} </ul>;
};

export default ItemList;
