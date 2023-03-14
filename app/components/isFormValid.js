import {FORM_VALID} from "./constants.js";
import {showError,blockButtonSave, removeError} from "./validate.js";

export const isFormValid = (name, value, input)=> {
    const {reqExp, errorMessage} = FORM_VALID[name];

    if (!reqExp.test(value)) {
        showError(errorMessage, input);
        blockButtonSave();
    } else {
        removeError(input);
        blockButtonSave();
    }
}