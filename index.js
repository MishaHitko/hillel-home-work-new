class Hamburger {
    static SIZE_SMALL = {
            price: 50,
            calories: 20
        };
    static SIZE_BIG = {
            price: 100,
            calories: 50
        };
    static STUFFING_CHEESE = {
            price: 10,
            calories: 20
        };
    static STUFFING_POTATO = {
            price: 15,
            calories: 10
        };
    static STUFFING_SALAD = {
            price: 20,
            calories: 5
        };
    static TOPPING_MAYO = {
            price: 20,
            calories: 5
        };
    static TOPPING_SAUCE = {
            price: 15,
            calories: 0
        };

    constructor(size, stuffing) {
        this.size = size;
        this.toppings = [stuffing];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        const toppingsPrice = this.toppings.reduce((acc, {price}) => acc + price,0);
        return this.size.price + toppingsPrice;
    }
    calculate() {
        const toppingsCalories = this.toppings.reduce((acc, {calories}) => acc + calories,0);
        return this.size.calories + toppingsCalories;
    }
}