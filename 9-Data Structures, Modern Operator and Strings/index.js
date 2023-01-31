'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Italy',
    categories: ['Italian ', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia ', 'Bruschetta', 'Garlic Bred', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}

// Destructuring Arrays

const Arr = [2, 3, 4];

// Destructuring Arr (Tái cấu trúc mảng)
const [x, y, z] = Arr
console.log(Arr);
console.log(x, y, z);

const [first, second] = restaurant.categories;
let [a, , b] = restaurant.startMenu; // bỏ qua phần tử thứ 2
console.log(first, second);
console.log(a, b);

// Switching Variables (chuyển đổi các biến);
[a, b] = [b, a]
console.log(a, b);