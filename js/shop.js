// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'Camera Sony ILCE-7SM3',
        price: 3000,
        type: 'camera',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Camera Sony ILCE-9M2',
        price: 4000,
        type: 'camera'
    },
    {
        id: 3,
        name: 'Camera Sony ILCE-7C',
        price: 3500,
        type: 'camera',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'SELP1020G',
        price: 1300,
        type: 'Objectives'
    },
    {
        id: 5,
        name: 'SEL15F14G',
        price: 1000,
        type: 'Objectives'
    },
    {
        id: 6,
        name: 'SEL11F18',
        price: 1500,
        type: 'Objectives'
    },
    {
        id: 7,
        name: 'XLR-H1',
        price: 250,
        type: 'Accessories'
    },
    {
        id: 8,
        name: 'RMT-P1BT',
        price: 300,
        type: 'Accessories'
    },
    {
        id: 9,
        name: 'GP-VPT1',
        price: 400,
        type: 'Accessories'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    for (let i = 0; i < products.length; i++ ) {
        if (products[i].id === id) {
            cartList.push(products[i]);
            console.log(products[i]);
        }
    }
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    total = 0;
    console.log(cartList);
    console.log(total);
}

// Exercise 3
function calculateTotal() {
    total = 0;
    for (let i = 0; i < cartList.length; i++ ) {
        total += cartList[i].price;
    }
    return total;
    
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function generateCart() {
    for (let i = 0; i < cartList.length; i++) {
        let encontrado = false;
        for (let j = 0; j < cart.length; j++) {
            if (cart[j].id === cartList[i].id) {
                encontrado = true;
                cart[j].quantity++;   
            }
        }
        if (!encontrado) {
            cart.push({...cartList[i], quantity: 1});
        }
        
    }
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {

    generateCart()

    const table = document.querySelector(".table");
    const tabletext = document.querySelectorAll(".td");
    let html = "";
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      html += `
        <tr>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.quantity}</td>
          <td>${product.subtotalWithDiscount}</td>
        </tr>
      `;
    }
    let html1 = `
      <table class="tablet">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Qty.</th>
            <th scope="col">Total <small>(with discount)</small></th>
          </tr>
        </thead>
        <tbody>
          ${html}
        </tbody>
      </table>
    `;
  
    for (let i = 0; i < tabletext.length; i++) {
      tabletext[i].innerHTML = html;
    }
    table.innerHTML = html1;
  // Calcula el total solo si hay productos en el carrito
  if (cartList.length > 0) {
    document.querySelector("#total_price").textContent = calculateTotal();
  } else {
    document.querySelector("#total_price").textContent = "0";
  }
  cart.length = 0;
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}
