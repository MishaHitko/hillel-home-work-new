import {displayFormInfo, formSaveInfo} from './formSaveInfo.js'
import setLocalStorage from "../LS/setLocalStorage.js";

export function modalIcon (good) {
    const modalContainer = document.createElement('div');
    const modalBody = document.createElement('div');
    const close = document.createElement('a');
    const form = document.querySelector('form');
    const buttonBasket = document.querySelector('.btn-basket');

    modalContainer.classList.add('modal-container');
    modalBody.classList.add('modal-body');
    close.classList.add('close');
    form.classList.remove('form-none');
    form.classList.add('form-on');

    close.innerText = 'x';
    close.addEventListener('click', () => {
        location.reload();
    });

    form.onsubmit = e => {
        e.preventDefault();
        const dateNow = new Date().toLocaleString();
        const formData = formSaveInfo();
        const formInfo = displayFormInfo(formData, good);
        form.classList.remove('form-on');
        form.classList.add('form-none');
        modalBody.append(formInfo);
        setLocalStorage({dateNow, ...good, ...formData});
    }

    form.oninput = ({target: input}) => {
        const { value, required } = input;
        const validationMassage = input.nextElementSibling;
        if (required && value.length < 1) {
            input.classList.add('invalidInput');
            validationMassage.classList.add('invalidText');
            validationMassage.innerText = 'Введите данные коректно'
            return;
        }
        validationMassage.innerText = '';
        input.classList.remove('invalidInput');
        validationMassage.classList.remove('invalidText');
    }

    document.body.append(modalContainer);
    modalContainer.append(modalBody);
    modalBody.append(form);
    modalBody.append(close);

    buttonBasket.addEventListener('click', () => {
        modalContainer.classList.toggle('form-none');
    });
};

