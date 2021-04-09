import { useState } from "react";
import './ErrorBox.css';

const ErrorBox = ({
    error
}) => {

    return (
        <div class="alert">
            <span className="closebtn" onclick='this.parentElement.remove()'>&times;</span>
                {error}
        </div>
    );
}

export default ErrorBox;