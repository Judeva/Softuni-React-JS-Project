import { useState } from "react";
import './ErrorBox.css';

const ErrorBox = ({
    error
}) => {

    return (
        <div className="alert">
            <span className="closebtn" >&times;</span>
                This is error message
        </div>
    );
}

export default ErrorBox;