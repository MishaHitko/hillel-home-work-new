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
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let toppingsPrice = 0;

        this.toppings.reduce((acc, topping) => {
            acc += topping.price;
            toppingsPrice = acc
            return toppingsPrice;
        },0)

        return this.size.price + this.stuffing.price + toppingsPrice;
    }
    calculate() {
        let toppingsCalories = 0;

        this.toppings.reduce((acc, topping) => {
            acc += topping.calories;
            toppingsCalories = acc
            return toppingsCalories;
        },0)

        return this.size.calories + this.stuffing.calories + toppingsCalories;
    }
}
