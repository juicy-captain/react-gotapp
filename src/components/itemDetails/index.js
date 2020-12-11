import React, { useEffect, useState } from "react";
import "./charDetails.css";

const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

const ItemDetails = ({ itemId, children, getData }) => {
    const [item, setChar] = useState(null);

    useEffect(() => {
        if (!itemId) {
            return;
        }
        getData(itemId).then((item) => {
            setChar(item);
        });
    }, [getData, itemId]);

    if (!item) {
        return (
            <span className="select-error">Please select item in the list</span>
        );
    }
    const { name } = item;

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, { item });
                })}
            </ul>
        </div>
    );
};

export default ItemDetails;
export { Field };
