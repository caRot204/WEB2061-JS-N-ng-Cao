const restaurant = {
    name: 'Classico Italiano',
    location: 'Italy',
    categories: ['Italian ', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia ', 'Bruschetta', 'Garlic Bred', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        mon: {
            open: 12,
            close: 22
        },
        Tus: {
            open: 11,
            close: 23
        },
        We: {
            open: 0,
            close: 24 //open 24h
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        console.log(`Order received! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`);
    }
};
restaurant.orderDelivery({
    time: '22h30',
    address: 'Via de sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})


const { name, openingHours, categories } = restaurant;
const { name: restaurantName, openingHours: hours, categories: cate } = restaurant;

console.log(name, openingHours, categories);
console.log(restaurantName, hours, cate);
// Default values (Biến mặc định)
const { menu = [], startMenu: starts = [] } = restaurant;
console.log(menu, starts);

// Mutating Variable (Biến đột biến)
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj)
console.log(a, b);

const { mon: { open: o, close: c }, } = openingHours;
console.log(o, c);