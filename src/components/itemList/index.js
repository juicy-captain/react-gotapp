import React, { useEffect, useState } from "react";
import ErrorMessage from "../error";
import Spinner from "../spinner";
import "./itemList.css";

const ItemList = ({ onItemSelected, getData, renderItem }) => {
    const state = {
        itemList: null,
        error: false,
    };

    const [data, setData] = useState(state);
    let { itemList: charList, error } = data;

    useEffect(() => {
        getData().then((charList) => {
            setData({ itemList: charList, error: false });
        });
    }, [getData]);

    if (!charList) {
        return <Spinner />;
    }
    const items = renderItems(charList);

    function renderItems(arr) {
        return arr.map((item) => {
            const label = renderItem(item);
            return (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => onItemSelected(item.id)}
                >
                    {label}
                </li>
            );
        });
    }

    return <ul className="item-list list-group"> {items} </ul>;
};

export default ItemList;
