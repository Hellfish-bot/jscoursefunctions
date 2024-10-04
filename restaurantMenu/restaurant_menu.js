// DEFINING VARIABLES AND MAP ARRAY METHOD

// Initialise three arrays named as breakfastMenu, mainCourseMenu, and dessertMenu:

const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Use for loop and two array methods: map method and forEach method to traverse through these arrays and display the menu items on the HTML page.
// Iterate through the breakfastMenu array using map method:

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// DEFINING forEach ARRAY METHOD AND FOR LOOP ITERATION

// Traverse mainCourseMenu array using forEach array method:

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Iterate dessertMenu array using for loop iteration:

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;