import React from "react";
import "./FormField.css";
function FormField({ formdata, id, change }) {
    //decompose formdata ... from props
    const showError = () => {
        let errorMessage = (
            <div className="error_label">
                {formdata.validation && !formdata.valid
                    ? formdata.validationMessage
                    : null}
            </div>
        );
        return errorMessage;
    };

    const renderTemplate = () => {
        let formTemplate = null;
        switch (formdata.element) {
            case "input":
                formTemplate = (
                    <div>
                        <input
                            className="enroll_input"
                            {...formdata.config}
                            value={formdata.value}
                            onChange={event => change({ event, id })}
                        //id is from props and its pass back to parent's change function
                        />
                        {showError()}
                    </div>
                );
                break;
            default:
                formTemplate = null;
        }
        return formTemplate;
    };
    return <div>{renderTemplate()}</div>;
}
export default FormField;