import React, { useEffect, useState } from "react";
import gotService from "../../services/gotService";
import ErrorMessage from "../error";
import Spinner from "../spinner";
import "./charDetails.css";

const CharDetails = ({ charId }) => {
    const [char, setChar] = useState(null);

    useEffect(() => {
        const got = new gotService();
        if (!charId) {
            return;
        }
        got.getCharacter(charId).then((char) => {
            setChar(char);
        });
    }, [charId]);

    if (!char) {
        return <span>Select character</span>;
    }
    const { name, gender, born, died, culture } = char;

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </div>
    );
};

export default CharDetails;
