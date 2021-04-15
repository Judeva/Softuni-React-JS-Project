import './ErrorBox.css';

const ErrorBox = ({
    error
}) => {

    return (
        <div className="error-box">
            <span className="closebtn" >&times;</span>
               {error}
        </div>
    );
}

export default ErrorBox;