export function validate() {
    const errorValidOld = document.querySelectorAll('.text-error');
    if (errorValidOld) {
        [...errorValidOld].map((value) => value.remove());
    }

    const nameInput = document.querySelector('input[name="name"]');
    const passwordInput = document.querySelector('input[name="password"]')
    const ageInput = document.querySelector('input[name="age"]');
    const emailInput = document.querySelector('input[name="email"]');
    const telInput = document.querySelector('input[name="tel"]');
    const bankInput = document.querySelector('input[name="bank"]');

    const inputs = [nameInput, passwordInput, ageInput, emailInput, telInput, bankInput];

    const FORM_VALID = {
        name: {
            reqExp: /^[А-Я A-Z]+$/i,
            input: name,
            errorMessage: 'Некорректно введено имя!'
        },
        password: {
            reqExp: /^[a-zA-Z0-9!@#$%^&*()_+~`|}{[\]\\:';"<>,.?/]{6,20}$/,
            errorMessage: 'Некорректно введен пароль!(Пароль должен содержать от 6 до 20 символов)'
        },
        age: {
            reqExp: /^[0-9]{1,2}$/i,
            errorMessage: 'Некорректно введен возраст!'
        },
        email: {
            reqExp: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            errorMessage: 'Некорректно введен имейл!'
        },
        tel: {
            reqExp: /^[0-9]{10,13}$/i,
            errorMessage: 'Некорректно введен номер телефона!'
        },
        bank: {
            reqExp: /^[0-9]{16}$/i,
            errorMessage: 'Некорректно введен номер банковской карты!'
        }
    };
    const isFormValid = (name, value, input)=> {
        const {reqExp, errorMessage} = FORM_VALID[name];

        if (!reqExp.test(value)) {
            showError(errorMessage, input);
            blockButtonSave()
        } else {
            removeError(input);
            blockButtonSave()
        }
    }
    inputs.forEach((input) => {
        input.onchange = ({target}) => {
            isFormValid(target.name, target.value, target);
        }
    })
}

function showError(errorMessage, input) {
    const blockName = input.closest('div');
    const errorElem = blockName.querySelector('.text-error');
    if(!errorElem) {
        const errorValid = document.createElement('p');
        errorValid.classList.add('text-error');
        errorValid.innerText = errorMessage;
        blockName.append(errorValid);
    }
}
function removeError(input) {
    const blockName = input.closest('div');
    const errorValid = blockName.querySelector('.text-error');
    if(errorValid) {
        errorValid.remove();
    }
}
function blockButtonSave() {
    const errorValid = document.querySelector('.text-error');
    const buttonSave = document.querySelector('.button_form_save');
    errorValid ? buttonSave.disabled = true : buttonSave.disabled = false;
}