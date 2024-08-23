document.addEventListener('DOMContentLoaded', () => {
  const overlayLinks = document.querySelectorAll('.overlay a');

  overlayLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });

  // Update cart notification count
  updateCartCount();
});

// Quantity functions
function decrementQuantity() {
  const inputField = document.querySelector('.quantity-container input[type="number"]');
  let currentValue = parseInt(inputField.value, 10);
  if (currentValue > 1) {
    currentValue -= 1;
    inputField.value = currentValue;
  } else {
    alert("Quantity cannot be less than 1");
  }
}

function incrementQuantity() {
  const inputField = document.querySelector('.quantity-container input[type="number"]');
  let currentValue = parseInt(inputField.value, 10);
  currentValue += 1;
  inputField.value = currentValue;
}

// Add to cart and buy now functions
let cartCount = 0;

function addToCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const item = {
    name: document.querySelector('.details h1').innerText,
    price: document.querySelector('.details p').innerText,
    size: document.querySelector('.dropdown select').value,
    quantity: document.querySelector('.quantity-container input').value
  };
  cartItems.push(item);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  updateCartCount();
  alert("Added to cart!");
}

function buyNow() {
  alert("Redirecting to checkout...");
  // Add logic to redirect to checkout page here
}

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartCount = cartItems.length;
  document.getElementById("cart-notification").innerHTML = cartCount;
}

// Pop up functions
function showPopup() {
  const popupContainer = document.querySelector('.pop-up');
  popupContainer.style.display = 'block';
}

function closePopup() {
  const popupContainer = document.querySelector('.pop-up');
  popupContainer.style.display = 'none';
}
