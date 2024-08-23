/*
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.price');
  const cartItemCount = document.querySelector('.cart-icon span');
  const cartItemsList = document.querySelector('.cart-item');
  const cartTotal = document.querySelector('.cart-total');
  const cartIcon = document.querySelector('.cart-icon');
  const sidebar = document.getElementById('sidebar');

  let cartItems = [];
  let totalAmount = 0;

  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const item = {
        name: document.querySelectorAll('jersey-description')[index].textContent,
        price: parseFloat(
          document.querySelectorAll('.price')[index].textContent.slice(1),
        ),
        quantity: 1,
      };

      const existingItem = cartItems.find(
        (cartItems) => cartItems.name === item.name,
      );
      if (existingItem) {
        existingItem.quantity++;
      }
      else {
        cartItems.push(item);
      }

      totalAmount += item.price;

      updateCartUI();
    });

    function updateCartUI() {
      updateCartItemCount(cartItems.length);
      updateCartItemsList();
      updateCartTotal();
    }

    function updateCartItemCount(count) {
      cartItemCount.textContent = count;
    }

    function updateCartItemsList() {
      cartItemsList.innerHTML = '';
      cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'individual-cart-item');
        cartItems.innerHTML = `
        <span>(${item.quantity}x)${item.name}</span>
        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(
          2,
        )}
        <button class="remove-btn" data-index="${index}"><b>X</b></button>
        </span>
        `;

        cartItemsList.append(cartItem);
      });

      const removeButtons = document.querySelectorAll('.remove-item');
      removeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const index = event.target.dataset.index;
          removeItemFromCart(index);
        });
      });
    }

    function removeItemFromCart(index) {
      const removeItem = cartItems.splice(index, 1)[0];
      totalAmount -= removeItem.price * removeItem.quantity;
      updateCartUI();
    }

    function updateCartTotal() {
      cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
    }

    cartIcon.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    const closeButton = document.querySelector('.sidebar-close');
    closeButton.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  });
});
*/

//DROPDOWN JERSEY & SHOP BY TEAM

document.querySelector('.link-list a:nth-child(2)').addEventListener('mouseover', function () {
  document.querySelector('.mega-box').style.opacity = '1';
  document.querySelector('.mega-box').style.visibility = 'visible';
});

document.querySelector('.link-list a:nth-child(2)').addEventListener('mouseout', function () {
  document.querySelector('.mega-box').style.opacity = '0';
  document.querySelector('.mega-box').style.visibility = 'hidden';
});

//PARA SA JERSEY HOVER

document.querySelector('.link-list a:nth-child(3)').addEventListener('mouseover', function () {
  document.querySelector('.mega-box').style.opacity = '1';
  document.querySelector('.mega-box').style.visibility = 'visible';
});

document.querySelector('.link-list a:nth-child(3)').addEventListener('mouseout', function () {
  document.querySelector('.mega-box').style.opacity = '0';
  document.querySelector('.mega-box').style.visibility = 'hidden';
});

//PARA TUMAGAL YUNG PAG HOVER AT MA-STAY YUNG DROP DOWN

document.addEventListener('DOMContentLoaded', function () {
  const hasMegaBoxItems = document.querySelectorAll('.has-mega-box');
  const megaBox = document.querySelector('.mega-box');
  let hoverTimeout;

  hasMegaBoxItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      clearTimeout(hoverTimeout);
      megaBox.style.opacity = '1';
      megaBox.style.visibility = 'visible';
    });

    item.addEventListener('mouseout', () => {
      hoverTimeout = setTimeout(() => {
        megaBox.style.opacity = '0';
        megaBox.style.visibility = 'hidden';
      }, 300);
    });
  });

  megaBox.addEventListener('mouseover', () => {
    clearTimeout(hoverTimeout);
    megaBox.style.opacity = '1';
    megaBox.style.visibility = 'visible';
  });

  megaBox.addEventListener('mouseout', () => {
    hoverTimeout = setTimeout(() => {
      megaBox.style.opacity = '0';
      megaBox.style.visibility = 'hidden';
    }, 300);
  });
});

//SEARCH BAR FUNCTION
/* hindi napagana may function pa na iba at kulang at sa design and style.
const search = () => {
  const searchbox = document.getElementsByClassName("search-icon").value.toUpperCase;
  const storeitems = document.getElementById("product-container");
  const product = document.querySelectorAll(".jersey");
  const pname = storeitems.getElementById("jersey-description");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementById("jersey-description")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
}*/
