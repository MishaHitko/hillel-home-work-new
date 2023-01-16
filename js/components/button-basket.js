import {LStorage} from "../LS/LStorage.js";

export function btnBasket () {
    const buttonBasket = document.querySelector('.btn-basket');
    const blockShop = document.querySelector('.blockShop');
    const blockMessage = document.querySelector('.basket-message');
    const listOrders = document.querySelector('.order-list');

    buttonBasket.addEventListener('click', () => {
        const ordersFromLS = LStorage.get('order');
        if (ordersFromLS.length === 0) {
            blockMessage.classList.toggle('form-none');
        }
        blockShop.classList.toggle('form-none');
        listOrders.classList.toggle('form-none');
    })
}
