export function validate() {
    const errorValidOld = document.querySelectorAll('.text-error');
    if(errorValidOld) {
        [...errorValidOld].map((value) => value.remove());
    }

    const name = document.querySelector('input[name="name"]');
    const age = document.querySelector('input[name="age"]');
    const email = document.querySelector('input[name="email"]');
    const tel = document.querySelector('input[name="tel"]');
    const bank = document.querySelector('input[name="bank"]');

    const errorValidName = document.createElement('p');
    errorValidName.innerText = 'Некорректно введено имя!';
    errorValidName.classList.add('text-error');

    name.oninput = event => {
        const validName = (nameUser) => /^[А-Я A-Z]+$/i.test(nameUser);
        if(!validName(name.value)) {
            const blockName = name.closest('div');
            blockName.append(errorValidName);
        } else {
            errorValidName.remove();
        }
    }

    const errorValidAge = document.createElement('p');
    errorValidAge.innerText = 'Некорректно введен возраст!';
    errorValidAge.classList.add('text-error');

    age.oninput = event => {
        const validAge = (ageUser) =>  /^[0-9]{1,2}$/i.test(ageUser);
        if(!validAge(age.value)) {
            const blockName = age.closest('div');
            blockName.append(errorValidAge);
        } else {
            errorValidAge.remove();
        }
    }

    const errorValidEmail = document.createElement('p');
    errorValidEmail.innerText = 'Некорректно введен имейл!';
    errorValidEmail.classList.add('text-error');

    email.oninput = event => {
        const validEmail = (emailUser) =>  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(emailUser);
        if(!validEmail(email.value)) {
            const blockName = email.closest('div');
            blockName.append(errorValidEmail);
        } else {
            errorValidEmail.remove();
        }
    }

    const errorValidTel = document.createElement('p');
    errorValidTel.innerText = 'Некорректно введен номер телефона!';
    errorValidTel.classList.add('text-error');

    tel.oninput = event => {
        const validTel = (telUser) =>  /^[0-9]{10,13}$/i.test(telUser);
        if(!validTel(tel.value)) {
            const blockName = tel.closest('div');
            blockName.append(errorValidTel);
        } else {
            errorValidTel.remove();
        }
    }

    const errorValidBank = document.createElement('p');
    errorValidBank.innerText = 'Некорректно введен номер банковской карты!';
    errorValidBank.classList.add('text-error');

    bank.oninput = event => {
        const validBank = (bankUser) =>  /^[0-9]{16}$/i.test(bankUser);
        if(!validBank(bank.value)) {
            const blockName = bank.closest('div');
            blockName.append(errorValidBank);
        } else {
            errorValidBank.remove();
        }
    }
}