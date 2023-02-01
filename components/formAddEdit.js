import {saveInfoUsers} from "./saveInfoUsers.js";
import {LStorage} from "../LS/LStorage.js";
import {validate} from "./validate.js";

export function formAddEdit(user,str) {
    const modalAdd = document.querySelector('.modal-form');
    const form = modalAdd.querySelector('.modal__form');
    const buttonFormClose = document.querySelector('.button_form_close');

    modalAdd.classList.remove('modal_none');
    if (!str) {
        form.reset();
    }

    buttonFormClose.addEventListener('click', () => {
        modalAdd.classList.add('modal_none');
    });

    if(str === 'edit') {
        form.onsubmit = event => {
            const newUser = saveInfoUsers();
            modalAdd.classList.add('modal_none');
            const oldUsers = LStorage.get('users');
            const indexOldUser = oldUsers.findIndex(oldUser => oldUser.id === user.id);
            oldUsers.splice(indexOldUser, 1, newUser);
            LStorage.set('users', oldUsers);
        }
    } else {
            form.onsubmit = event => {
                const newUser = saveInfoUsers();
                LStorage.set('users', newUser);
                modalAdd.classList.add('modal_none');
            }
        }

    validate();

}
