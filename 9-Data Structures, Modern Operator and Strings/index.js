'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Italy',
    categories: ['Italian ', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia ', 'Bruschetta', 'Garlic Bred', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
    }
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
const order1 = restaurant.order(2, 0);
console.log(order1);

const nested = [2, 3, [5, 6]]
// const [i, , j] = nested
const [i, , [j, k]] = nested
console.log(i, j, k);

//default values ( giá trị mặc định)

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);