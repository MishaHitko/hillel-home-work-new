export function formSaveInfo () {
    const nameLastname = document.querySelector('.nameLastname');
    const city = document.querySelector('select');
    const addr = document.querySelector('.newPost');
    const payment = [...document.querySelectorAll('.payment')];
    const amount = document.querySelector('.amount');
    const commentary = document.querySelector('textarea');

    function finishPayment() {
        let paymentValue = '';
        payment.forEach((radio) => {
            if (radio.checked) {
                paymentValue = radio.value;
            }
            return paymentValue;
        });

        if (paymentValue === 'cash') {
            return 'Оплата наличкой';
        } else if (paymentValue === 'card'){
            return 'Оплата картой';
        } else {
            return 'Вы не выбрали спозоб оплаты';
        }
    }

    return {
        name: nameLastname.value,
        city: city.value ,
        post: addr.value,
        payMethod: finishPayment(),
        amount: amount.value,
        comment: commentary.value
        };
}
export function displayFormInfo ({name, city, post, payMethod, amount, comment}, good) {
    const formInfo = document.createElement('div');
    const finishNameLastName = document.createElement('p');
    const finalCity = document.createElement('p');
    const finishNovaPost = document.createElement('p');
    const finishAmount = document.createElement('p');
    const finishCommentary = document.createElement('p');
    const finalPay = document.createElement('p');
    const productInfo = document.createElement('div');

    formInfo.classList.add('form-info');

    productInfo.innerHTML = `
        <p>Brand: ${good.brand}</p>
        <p>Price: ${good.price}</p>
    `
    finishNameLastName.innerText = `Фамилия,Имя и Отчество: ${name}`;
    finalCity.innerText = `Ваш город: ${city}`;
    finishNovaPost.innerText = `Отделение Новой Почты: ${post}`;
    finishAmount.innerText = `Кол-во: ${amount} единиц`;
    finishCommentary.innerText = `Коментарий к заказу: ${comment}`;
    finalPay.innerText = payMethod

    formInfo.append(productInfo);
    formInfo.append(finishNameLastName);
    formInfo.append(finalCity);
    formInfo.append(finishNovaPost);
    formInfo.append(finishAmount);
    formInfo.append(finishCommentary);
    formInfo.append(finalPay);

    return formInfo
}
