import {LStorage} from "../LS/LStorage.js";

export function renderListOrders () {
    const ordersFromLS = LStorage.get('order');
    const listOrders = document.querySelector('.order-list');

    ordersFromLS.map((order) => {
        const orderElem = document.createElement('li');
        const orderElemInfo = document.createElement('div');
        const deleteOrder = document.createElement('span');

        deleteOrder.innerText = ' Удалить';
        orderElem.innerText = `Бренд:${order.brand}. Цена:${order.price}. Дата и время заказа:${order.dateNow}`;
        orderElem.addEventListener('click', () => {
            orderElemInfo.innerHTML = `
            <p>Категория: ${order.category}</p>
            <p>Цвет:${order.color}</p>
            <p>Имя и Фамилия покупателя:${order.name}</p>
            <p>Количество единиц:${order.amount}</p>
            <p>Город:${order.city}</p>
            <p>Новая почта:${order.post}</p>
            <p>Метод оплаты:${order.payMethod}</p>
            <p>Коментарии с заказу:${order.comment}</p>`
           orderElemInfo.classList.toggle('form-none');
        });
        deleteOrder.addEventListener('click', () => {
            const oldOrders = LStorage.get('order');
            const newOrders = oldOrders.filter(oldOrder => oldOrder.id !== order.id);
            localStorage.removeItem('order');
            LStorage.set('order', newOrders);
            orderElem.remove();
            if (newOrders.length === 0) {
                const blockMessage = document.querySelector('.basket-message');
                blockMessage.classList.remove('form-none');
            }
        });

        deleteOrder.style.cursor = 'pointer';
        deleteOrder.style.color = 'red';
        orderElem.style.cursor = 'pointer';
        orderElemInfo.classList.add('form-none');
        orderElem.append(orderElemInfo);
        orderElem.append(deleteOrder);
        listOrders.append(orderElem);

    })
}
