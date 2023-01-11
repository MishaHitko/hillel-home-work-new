import getLocalStorage from "./getLocalStorage.js";

export default function setLocalStorage(item) {
  if (Array.isArray(item)) {
    localStorage.setItem('order', JSON.stringify(item));
    return;
  };

  const ordersFromLS = getLocalStorage();
  ordersFromLS.push(item);
  localStorage.setItem('order', JSON.stringify(ordersFromLS));
}
