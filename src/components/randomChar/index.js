import React, { useEffect, useState } from "react";
import gotService from "../../services/gotService";
import ErrorMessage from "../error";
import Spinner from "../spinner";
import "./randomChar.css";

const RandomChar = () => {
    let state = {
        char: {},
        loading: true,
        error: false,
    };

    const [data, setData] = useState(state);
    let { char, loading, error } = data;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    useEffect(() => {
        const got = new gotService();
        const id = Math.floor(Math.random() * 140 + 25);
        got.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }, []);

    function onCharLoaded(char) {
        setData({
            char,
            loading: false,
            error: false,
        });
        console.log(char);
    }
    function onError() {
        setData({ loading: false, error: true });
    }

    return (
        <div className="random-block rounded">
            {spinner}
            {errorMessage}
            {content}
        </div>
    );
};

const View = ({ char }) => {
    let { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
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
        </>
    );
};

export default RandomChar;
