import {isFormValid} from "./isFormValid.js";
import {getFormInputs} from "./getFormInputs.js";

export function validate() {
    const errorValidOld = document.querySelectorAll('.text-error');
    if (errorValidOld) {
        [...errorValidOld].map((value) => value.remove());
    }

    const inputs = getFormInputs();

    inputs.forEach((input) => {
        input.onchange = ({target}) => {
            isFormValid(target.name, target.value, target);
        }
    })
}

export function showError(errorMessage, input) {
    const blockName = input.closest('div');
    const errorElem = blockName.querySelector('.text-error');
    if(!errorElem) {
        const errorValid = document.createElement('p');
        errorValid.classList.add('text-error');
        errorValid.innerText = errorMessage;
        blockName.append(errorValid);
    }
}
export function removeError(input) {
    const blockName = input.closest('div');
    const errorValid = blockName.querySelector('.text-error');
    if(errorValid) {
        errorValid.remove();
    }
}
export function blockButtonSave() {
    const errorValid = document.querySelector('.text-error');
    const buttonSave = document.querySelector('.button_form_save');
    buttonSave.disabled = !!errorValid;
}