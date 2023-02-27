import {LStorage} from "../LS/LStorage.js";
import {closeModal} from "./closeModal.js";
import {modal, showRemoveForm, showUserForm} from "./modal.js";
import {setFormInfo} from "./saveInfoUsers.js";
import {formAddEdit} from "./formAddEdit.js";
import {closeForm} from "./closeForm.js";

export function createUsers() {
    const users = LStorage.get('users')
    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('button');
    buttonAdd.innerText = 'Add';

    users.forEach((user) => {
        const userBlock = document.createElement('div');
        const buttonEdit = document.createElement('button');
        const buttonRemove = document.createElement('button');
        const buttonView = document.createElement('button');

        userBlock.classList.add('userBlock');
        buttonEdit.classList.add('button');
        buttonRemove.classList.add('button');
        buttonView.classList.add('button');

        userBlock.innerHTML = `
        <p class="userBlock__text">Имя:${user.name}</p>
        <p class="userBlock__text">Возраст:${user.age}</p>
        `
        buttonEdit.innerText = 'Edit';
        buttonRemove.innerText = 'Remove';
        buttonView.innerText = 'View';

        document.body.append(userBlock);
        userBlock.append(buttonEdit);
        userBlock.append(buttonRemove);
        userBlock.append(buttonView);


        userBlock.setAttribute('data-user-id', user.id);

        buttonView.addEventListener('click',() => clickView(user));
        buttonEdit.addEventListener('click', () => clickEdit(user));
        buttonRemove.addEventListener('click', () => clickRemove(user, userBlock));
    })
    buttonAdd.addEventListener('click', clickAdd);
    document.body.prepend(buttonAdd);
}

function clickView(user) {
    closeForm();
    closeModal();
    modal(showUserForm(user));
}

function clickEdit(user) {
    closeForm();
    closeModal();
    setFormInfo(user);
    formAddEdit(user, true);
}

function clickRemove(user, userBlock) {
    closeForm();
    closeModal();
    modal(showRemoveForm(user, userBlock));
}

function clickAdd() {
    closeForm();
    closeModal();
    formAddEdit();
}


