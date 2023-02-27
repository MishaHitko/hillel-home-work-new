import {setFormInfo} from "./saveInfoUsers.js";
import {LStorage} from "../LS/LStorage.js";
import {validate} from "./validate.js";

export function formAddEdit(user,isEditForm) {
    validate();
    const modalAdd = document.querySelector('.modal-form');
    const form = modalAdd.querySelector('.modal__form');
    const buttonFormClose = document.querySelector('.button_form_close');
    modalAdd.classList.remove('modal_none');
    if (!isEditForm) {
        form.reset();
    }

    buttonFormClose.addEventListener('click', () => {
        modalAdd.classList.add('modal_none');
    });
    form.onsubmit = () => {
        const newUser = setFormInfo();
        modalAdd.classList.add('modal_none');

        if(isEditForm) {
            const oldUsers = LStorage.get('users');
            const indexOldUser = oldUsers.findIndex(oldUser => oldUser.id === user.id);
            oldUsers.splice(indexOldUser, 1, newUser);
            LStorage.set('users', oldUsers)
        } else {
                LStorage.set('users', newUser);
        }
    }
}
