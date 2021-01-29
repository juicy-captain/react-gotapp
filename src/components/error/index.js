import React from "react";
import img from "../../img/error.jpg";
import "./error.css";

const ErrorMessage = () => {
    return (
        <div className="error-block">
            <p>Something goes wrong :(</p>
            <img src={img} alt="error" />
        </div>
    );
};
export default ErrorMessage;
