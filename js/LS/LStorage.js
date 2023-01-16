export const LStorage = {
  get(fieldName) {
    let ordersFromLS = JSON.parse(localStorage.getItem(fieldName));

    if (!ordersFromLS) {
      ordersFromLS = [];
    }

    return ordersFromLS
},
  set(fieldName, item) {
    if (Array.isArray(item)) {
      localStorage.setItem(fieldName, JSON.stringify(item));
      return;
    };

    const ordersFromLS = this.get(fieldName);
    ordersFromLS.push(item);
    localStorage.setItem(fieldName, JSON.stringify(ordersFromLS));
  }
};