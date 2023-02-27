export function setFormInfo(user) {
    if(user) {
        getFormFields(user)
    }
    return {
        name: name.value,
        password: password.value,
        age: age.value,
        email: email.value,
        tel: tel.value,
        bank: bank.value,
        dateSave: new Date().toLocaleString(),
        id: +Math.random().toString().slice(-10)
    }
}

const name = document.querySelector('input[name="name"]');
const password = document.querySelector('input[name="password"]');
const age = document.querySelector('input[name="age"]');
const email = document.querySelector('input[name="email"]');
const tel = document.querySelector('input[name="tel"]');
const bank = document.querySelector('input[name="bank"]');

function getFormFields(user) {
    name.value = user.name
    password.value = user.password
    age.value = user.age
    email.value = user.email
    tel.value = user.tel
    bank.value = user.bank
}