import {setFormInfo} from "./saveInfoUsers.js";
import {LStorage} from "../LS/LStorage.js";
import {validate} from "./validate.js";

export function formAddEdit(user,isEditForm) {
    validate();
    const modalAdd = document.querySelector('.modal-form');
    const form = modalAdd.querySelector('.modal__form');
    const buttonFormClose = document.querySelector('.button_form_close');
    modalAdd.classList.remove('modal-form_none');
    if (!isEditForm) {
        form.reset();
    }

    buttonFormClose.addEventListener('click', () => {
        modalAdd.classList.add('modal-form_none');
    });
    form.onsubmit = () => {
        const newUser = setFormInfo();
        modalAdd.classList.add('modal-form_none');

        const oldUsers = LStorage.get('users');
        const nextUsers = isEditForm ?
            oldUsers.map(oldUsers => oldUsers.id === user.id ? newUser : oldUsers) :
            [...oldUsers, newUser];

        LStorage.set('users', nextUsers);

    }
}
