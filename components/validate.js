export function validate() {
    const errorValidOld = document.querySelectorAll('.text-error');
    if (errorValidOld) {
        [...errorValidOld].map((value) => value.remove());
    }

    const nameInput = document.querySelector('input[name="name"]');
    const ageInput = document.querySelector('input[name="age"]');
    const emailInput = document.querySelector('input[name="email"]');
    const telInput = document.querySelector('input[name="tel"]');
    const bankInput = document.querySelector('input[name="bank"]');

    const inputs = [nameInput, ageInput, emailInput, telInput, bankInput];

    const FORM_VALID = {
        name: {
            reqExp: /^[А-Я A-Z]+$/i,
            input: nameInput,
            errorMessage: 'Некорректно введено имя!'
        },
        age: {
            reqExp: /^[0-9]{1,2}$/i,
            input: ageInput,
            errorMessage: 'Некорректно введен возраст!'
        },
        email: {
            reqExp: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            input: emailInput,
            errorMessage: 'Некорректно введен имейл!'
        },
        tel: {
            reqExp: /^[0-9]{10,13}$/i,
            input: telInput,
            errorMessage: 'Некорректно введен номер телефона!'
        },
        bank: {
            reqExp: /^[0-9]{16}$/i,
            input: bankInput,
            errorMessage: 'Некорректно введен номер банковской карты!'
        }
    };

    const isFormValid = formData => {

        for (let key in formData) {
            const {reqExp, input, errorMessage} = formData[key];

            const buttonSave = document.querySelector('.button_form_save')
            const errorValid = document.querySelector('.text-error');

            if (!reqExp.test(input.value)) {
                if(!errorValid) {
                    const errorValid = document.createElement('p');
                    errorValid.classList.add('text-error');
                    errorValid.innerText = errorMessage;
                    const blockName = input.closest('div');
                    blockName.append(errorValid);
                }
                buttonSave.disabled = true;
            } else {
                if(errorValid) {
                    errorValid.remove();
                }
                buttonSave.disabled = false;
            }
        }
    }
    inputs.forEach((input) => {
        input.onchange = () => {
            isFormValid(FORM_VALID);
        }
    })
}