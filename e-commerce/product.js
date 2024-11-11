// Sample product data for each category
const productsData = {
    "graphic-card": [
        {  name: "NVIDIA GeForce RTX 3080", price: "$699", img: "img/gc1.png" },
        { name: "NVIDIA GeForce GTX 1660", price: "$579", img: "img/gc2.png"},
        { name: "AMD Radeon RX 6800", price: "$229", img: "img/gc3.png" }
       
    ],
    "ram": [
        { name: "2 GB RAM", price: "$599", img: "img/ram1.png" },
        { name: "4 GB RAM", price: "$499", img: "img/ram2.png" },
        { name: "16 GB RAM", price: "$279", img: "img/ram3.png" },
        { name: "32 GB RAM", price: "$279", img: "img/ram4.png" }
    ],
    "processor": [
        { name: "Intel i3", price: "$89",  img: "img/processor1.png" },
        { name: "Intel i5", price: "$159",  img: "img/processor2.png" },
        { name: "Intel i7", price: "$139",  img: "img/processor3.png" },
        { name: "Ryzen 7", price: "149", img: "img/processor4.png" },
        { name: "Ryzen 5", price: "169", img: "img/processor5.png" },
        { name: "Ryzen 9", price: "189",  img: "img/processor6.png" }
    ],
    "storage": [
        { name: "HDD", price: "$69", img: "img/hd1.png" },
        { name: "SDD", price: "$74", img: "img/hd2.png" },
        { name: "External Hard Disk", price: "$54", img: "img/hd3.png" },
        { name: "Floppy Disk", price: "$45", img: "img/hd4.png" }
    ],
    "motherboard": [
        { name: "ATX Motherboard", price: "$129", img: "img/mb1.png" },
        { name: "LPX Motherboard", price: "$54",  img: "img/mb2.png" },
        { name: "BTX Motherboard", price: "$99", img: "img/mb3.png" },
        { name: "AT Motherboard", price: "$99",img: "img/mb4.png" }

    ]
};


const category = window.location.pathname.split('/').pop().replace('.html', '');


function loadProducts() {
    const productList = document.getElementById('product-list');
    
   
    productList.innerHTML = '';

    
    if (productsData[category]) {
        productsData[category].forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src= "${product.img}"  alt="photo"> 
                <h3>${product.name}</h3>
                 
                <p class="price">${product.price}</p>
                

                <button>Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    } else {
        
        productList.innerHTML = '<p>No products available in this category.</p>';
    }
}


document.addEventListener('DOMContentLoaded', loadProducts);
