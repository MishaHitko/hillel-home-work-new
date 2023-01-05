const nameLastname = document.querySelector('.nameLastname');
const city = document.querySelector('select');
const addr = document.querySelector('.nowaPohta');
const payment = [...document.querySelectorAll('.payment')];
const amount = document.querySelector('.amount');
const commentary = document.querySelector('textarea');

export function name () {
    const finishNameLastName = document.createElement('p');
    finishNameLastName.innerText = `Фамилия,Имя и Отчество: ${nameLastname.value}`;
    return finishNameLastName
};

export function finishCity() {
    const finalCity = document.createElement('p');
    finalCity.innerText = `Ваш город: ${city.value}`;
    return finalCity
};

export function nowaPohta () {
    const finishNovaPohta = document.createElement('p');
    finishNovaPohta.innerText = `Отделение Новой Почты: ${addr.value}`;
    return finishNovaPohta
};

export function finishPayment() {
    let paymentValue = '';
    payment.forEach((value) => {
        if (value.checked) {
            paymentValue = value.value;
        }
        return paymentValue;
    });
    const finalSex = document.createElement('p');
    if (paymentValue === 'cash') {
        finalSex.innerText = 'Оплата наличкой';
    } else if (paymentValue === 'card'){
        finalSex.innerText = 'Оплата картой';
    } else {
        finalSex.innerText = 'Вы не выбрали спозоб оплаты';
    }
    return finalSex
};

export function finalAmount () {
    const finishAmount = document.createElement('p');
    finishAmount.innerText = `Кол-во: ${amount.value} единиц`;
    return finishAmount
};

export function finalCommentary () {
    const finishCommentary = document.createElement('p');
    finishCommentary.innerText = `Коментарий к заказу: ${commentary.value}`;
    return finishCommentary
};

