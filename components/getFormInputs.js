export function getFormInputs () {
    const name = document.querySelector('input[name="name"]');
    const password = document.querySelector('input[name="password"]');
    const age = document.querySelector('input[name="age"]');
    const email = document.querySelector('input[name="email"]');
    const tel = document.querySelector('input[name="tel"]');
    const bank = document.querySelector('input[name="bank"]');
    return [name, password, age, email, tel, bank];
}