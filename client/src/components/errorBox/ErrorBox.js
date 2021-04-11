import './ErrorBox.css';

const ErrorBox = ({
    error
}) => {

    return (
        <div className="alert">
            <span className="closebtn" >&times;</span>
               {error.message}
        </div>
    );
}

export default ErrorBox;