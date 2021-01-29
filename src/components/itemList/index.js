import React, { useEffect, useState } from "react";
import Spinner from "../spinner";
import "./itemList.css";

const ItemList = ({ onItemSelected, renderItem, content }) => {
    const items = renderItems(content);

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

const withData = (View) => {
    return (props) => {
        const state = {
            itemList: null,
        };

        const [data, setData] = useState(state);
        let { itemList: content } = data;

        useEffect(() => {
            props.getData().then((content) => {
                setData({ itemList: content, error: false });
            });
        }, [props]);

        if (!content) {
            return <Spinner />;
        }

        return <View {...props} content={content} />;
    };
};

export default withData(ItemList);
