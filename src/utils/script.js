let cartItems = [];

function toggleCart() {
    const cartContent = document.getElementById("cartContent");
    cartContent.classList.toggle("show");
}

function goToCheckout() {
    window.location.href = "checkout.html";
}

function addToCart(product) {
    const productName = product.querySelector('h2').innerText;
    const productPrice = product.querySelector('p').innerText;
    const productImage = product.querySelector('img').src;

    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            name: productName,
            price: productPrice,
            quantity: 1,
            image: productImage
        });
    }

    updateCart();
}

function removeFromCart(productName) {
    const index = cartItems.findIndex(item => item.name === productName);
    if (index !== -1) {
        const item = cartItems[index];
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            cartItems.splice(index, 1);
        }
        updateCart();
    }
}

function updateCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCartItems();
}

function displayCartItems() {
    const cartContent = document.getElementById("cartContent");
    cartContent.innerHTML = '';

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('checkout-item');
        itemElement.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" style="max-width: 100px; height: auto;">
                <span>${item.name} - ${item.price} x ${item.quantity}</span>
            </div>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartContent.appendChild(itemElement);
    });

    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = "Proceed to Checkout";
    checkoutButton.onclick = goToCheckout;
    cartContent.appendChild(checkoutButton);
}

window.onload = function() {
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    displayCartItems();

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            addToCart(button.closest('.product'));
        });
    });
};
function showAnswer(questionNumber) {
    const answer = document.getElementById(`answer${questionNumber}`);
    answer.classList.toggle("show");
}
