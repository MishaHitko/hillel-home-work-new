import {getFormInputs} from "./getFormInputs.js";

const [name, password, age, email, tel, bank] = getFormInputs();

export function setFormInfo() {
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

export function getFormFields(user) {
    name.value = user.name
    password.value = user.password
    age.value = user.age
    email.value = user.email
    tel.value = user.tel
    bank.value = user.bank
}