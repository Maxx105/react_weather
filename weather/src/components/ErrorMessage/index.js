import React, {useEffect} from "react";
import "./style.css";

function ErrorMessage(props) {
    useEffect(() => {
        errorMessage();
    }, [props.error]);

    function errorMessage() {
        if (props.error) {
            document.getElementById('error').innerText = props.error;
            props.createErrorMsg();
        } else document.getElementById('error').innerText = ""
    }

    return (
        <p id="error"></p>
    );
}

export default ErrorMessage;