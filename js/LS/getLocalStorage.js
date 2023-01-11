export default function getLocalStorage() {
  let ordersFromLS = JSON.parse(localStorage.getItem('order'));

  if (!ordersFromLS) {
    ordersFromLS = [];
  }

  return ordersFromLS
}
