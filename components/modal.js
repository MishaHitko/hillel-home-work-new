import {LStorage} from "../LS/LStorage.js";

export function modal(modalBody) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    document.body.append(modal);
    modal.append(modalBody);
}
export function showUserForm(user) {
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal__body');

    const modalCloseView = document.createElement('p');

    modalCloseView.classList.add('modal__close');

    modalBody.innerHTML = `
            <p>Имя: ${user.name}</p>
            <p>Пароль: ${user.password}</p>
            <p>Возраст:${user.age}</p>
            <p>Имейл:${user.email}</p>
            <p>Телефон:${user.tel}</p>
            <p>Банковская карта:${user.bank}</p>
            <p>Время: ${user.dateSave}</p>
             `;

    modalCloseView.innerText = 'x';
    modalCloseView.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.remove();
    })
    modalBody.append(modalCloseView);
    return modalBody;
}
export function showRemoveForm(user, userBlock) {
    const modalBody = document.createElement('div');
    const modalButtonRemove = document.createElement('button');
    const modalButtonNoRemove = document.createElement('button');

    modalButtonRemove.classList.add('modal__button', 'modal__button_remove');
    modalButtonNoRemove.classList.add('modal__button', 'modal__button_noRemove');
    modalBody.classList.add('modal__body');

    modalBody.innerHTML = `<p>Вы уверены что хотите удалить данного юзера?</p> `;
    modalButtonRemove.innerText = 'Да';
    modalButtonNoRemove.innerText = 'Нет';

    modalButtonRemove.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        const oldUsers = LStorage.get('users');
        const newUsers = oldUsers.filter(oldOrder => oldOrder.id !== user.id);
        localStorage.removeItem('users');
        LStorage.set('users', newUsers);
        userBlock.remove();
        modal.remove();
    });
    modalButtonNoRemove.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.remove();
    })

    modalBody.append(modalButtonRemove);
    modalBody.append(modalButtonNoRemove);
    return modalBody;
}