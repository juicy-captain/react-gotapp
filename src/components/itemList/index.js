import React from "react";
import "./itemList.css";

const ItemList = () => {
    return (
        <ul className="item-list list-group">
            <li className="list-group-item">John Snow</li>
            <li className="list-group-item">Brandon Stark</li>
            <li className="list-group-item">Geremy</li>
        </ul>
    );
};

export default ItemList;
