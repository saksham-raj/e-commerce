
function toggleDropdown(id) {
    // Hide all dropdowns
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        if (dropdown.id !== id) {
            dropdown.style.display = 'none';
        }
    });

    // Toggle the clicked dropdown
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.closest('.category-item')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
}


let totalAmount = 0; // Track total amount
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartButton = document.getElementById('close-cart');

// Function to add item to the cart
let cart = []; 

function addToCart(productName, productPrice) {
addItemToCart({ productName , productPrice  });
console.log(productName);


// Update total amount
totalAmount += parseFloat(productPrice);

totalPriceElement.textContent = `$${totalAmount.toFixed(2)}`;
document.querySelector('.item-number').textContent = cart.length; // Update item count
document.querySelector('.cart-total').textContent = `$${totalAmount.toFixed(2)}`; // Update cart total

if(cart.length>=1){
  
    document.querySelector('.fly-item').style.display = "inline";
}


}

// Event listeners for add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
button.addEventListener('click', () => {
    const productElement = button.parentElement;
    const productName = productElement.querySelector('h3').textContent;
    const productPrice = productElement.querySelector('p').textContent.replace('$', ''); // Get price without $
    addToCart(productName, productPrice);
});
});

// Open cart sidebar on cart icon click
cartIcon.addEventListener('click', () => {
cartSidebar.classList.toggle('active');
});

// Close cart sidebar
closeCartButton.addEventListener('click', () => {
cartSidebar.classList.remove('active');
});


// Assuming `cart` is an array of items in the cart.


// Function to render cart items
function renderCartItems() {
const cartItemsContainer = document.getElementById('cart-items');
cartItemsContainer.innerHTML = ''; // Clear the container first

cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
        <span>${item.productName}</span>
        <span>${item.productPrice}</span>
        <button class="remove-item" data-index="${index}">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
});

updateCartTotal();
addRemoveEventListeners();
}

// Function to update the total price in the cart
function updateCartTotal() {
let totalPrice = 0;
cart.forEach((item, index) => {
 totalPrice+= parseFloat(item.productPrice);
});
console.log(totalPrice)
document.getElementById('total-price').textContent = `${totalPrice.toFixed(2)}`;
}

// Function to add event listeners to each "Remove" button
function addRemoveEventListeners() {
const removeButtons = document.querySelectorAll('.remove-item');
removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        removeItemFromCart(index);
    });
});
}

// Function to remove item from cart based on index
function removeItemFromCart(index) {
cart.splice(index, 1); // Remove item at the specif

renderCartItems(); // Re-render the cart items
}

// Example function to add items to the cart
function addItemToCart(item) {
console.log(item);
cart.push(item);

renderCartItems();
}

// Close cart sidebar
document.getElementById('close-cart').addEventListener('click', function() {
document.getElementById('cart-sidebar').classList.remove('active');
});



// Function to remove item from cart based on index
function removeItemFromCart(index) {
// Subtract the item’s price from the total amount
const itemPrice = parseFloat(cart[index].productPrice); 
totalAmount -= itemPrice;


// Update the total price on the home page
totalPriceElement.textContent = `$${totalAmount.toFixed(2)}`;
document.querySelector('.item-number').textContent = cart.length - 1; // Update item count
document.querySelector('.cart-total').textContent = `$${Math.abs(totalAmount.toFixed(2))}`; // Update cart total

// Remove item from cart array
cart.splice(index, 1);
if(cart.length<=0){
    // document.querySelector('.fly-item').classList.toggle("red-icon");
    document.querySelector('.fly-item').style.display = "none";
}
// Re-render the cart items

renderCartItems();
}




