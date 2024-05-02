let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Blueberry Cheesecake',
        image: 'new10.jpg',
        price: 1500
    },

    {
        id: 2,
        name: 'Black Forest Cake',
        image: 'new6.jpg',
        price: 1250        
    },

    {
        id: 3,
        name: 'Red Velvet Cake',
        image: 'new7.jpg',
        price: 1500
    },

    {
        id: 4,
        name: 'Classic Vanilla',
        image: 'new8.jpg',
        price: 1150
    },

    {
        id: 5,
        name: 'Triple Choco Cake',
        image: 'new9.jpg',
        price: 1450
    },

    {
        id: 6,
        name: 'Spiderman Fondant Cake',
        image: 'new1.jpg',
        price: 1999
    },

    {
        id: 7,
        name: 'Candy Pop Ice Cream Cake',
        image: 'new2.jpg',
        price: 1999
    },

    {
        id: 8,
        name: 'Chocolate Lava Cake',
        image: 'new3.jpg',
        price: 1850
    },

    {
        id: 9,
        name: 'Bad Teacher Cake',
        image: 'new4.jpg',
        price: 2500
    },

    {
        id: 10,
        name: 'Unicorn Magic Cake',
        image: 'new5.jpg',
        price: 2500
    },

    {
        id: 11,
        name: 'Special Cinnamon Rolls',
        image: 'cinnamonRolls.png',
        price: 1000
    },

    {
        id: 12,
        name: 'Sweeter Baguette',
        image: 'new11.jpg',
        price: 999
    },

    {
        id: 13,
        name: 'Sweeter Donuts',
        image: 'new12.jpg',
        price: 2000
    },

    {
        id: 14,
        name: 'Unicorn Cupcake',
        image: 'new13.jpg',
        price: 999
    },

    {
        id: 15,
        name: 'Carrot Cupcake',
        image: 'new14.jpg',
        price: 999
    },

    {
        id: 16,
        name: 'Tiramisu Cake',
        image: 'new15.jpg',
        price: 2000
    },

    {
        id: 17,
        name: 'Mango Graham Cake',
        image: 'new16.jpg',
        price: 1950
    },

    {
        id: 18,
        name: 'Pistachio & Cashew Cake',
        image: 'new17.jpg',
        price: 2500
    },

    {
        id: 19,
        name: 'Pineapple U-D Cake',
        image: 'new18.jpg',
        price: 1650
    },

    {
        id: 20,
        name: 'Choco-chip Banana Cake',
        image: 'new19.jpg',
        price: 1999
    },
];

let listCarts = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCart(key) {
    if (listCarts[key] == null) {
        listCarts[key] = { ...products[key], quantity: 1 }; // Add product with quantity
    } else {
        listCarts[key].quantity++; // Increment quantity if product already exists
    }
    reloadCart();
    displayNotification("Item added to cart");
}


function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCart.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
    listCarts[key].quantity = newQuantity;
    reloadCart();
}

function redirectToCheckout() {
    window.location.href = 'index1.html'; 
}

function redirectToMain() {
    window.location.href = 'index.html'; 
}

function displayNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove the notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}