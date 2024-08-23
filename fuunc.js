const product = [
    {
        id: 0,
        image: 'Images/jersey/ATLANTA%20HAWKS/CLINT%20CAPELA/capela-red.png',
        title: 'Capela Red',
        price: 1200,
    },
    {
        id: 1,
        image: 'Images/jersey/ATLANTA%20HAWKS/DEJOUNTE%20MURRAY/murray-black.png',
        title: 'Murray Black',
        price: 6000,
    },
    {
        id: 2,
        image: 'Images/jersey/DALLAS MAVERICKS/LUKA DONCIC/icon.png',
        title: 'Luka Icon',
        price: 230,
    },
    {
        id: 3,
        image: 'Images/jersey/LOS ANGELES LAKERS/LEBRON JAMES/associatioon.png',
        title: 'Lebon Association',
        price: 10000,
    },
    {
        id: 4,
        image: 'Images/jersey/LOS ANGELES LAKERS/LEBRON JAMES/classic.png',
        title: 'Lebron classic ',
        price: 11000,
    }
];


const jerseyProducts = [
    {
        id: 0,
        image: 'Images/jersey/BOSTON CELTICS/AHL HORFORD/horford-green.png',
        title: 'Capela Red',
        price: 1200,
    },
    {
        id: 1,
        image: 'Images/jersey/BROOKLYN NETS/BEN SIMMONS/black-white-ben-simmons.png',
        title: 'Murray Black',
        price: 6000,
    },
    {
        id: 2,
        image: 'Images/jersey/CHARLOTTE HORNETS/BRANDON MILLER/miller-blue.png',
        title: 'Luka Icon',
        price: 230,
    },
    {
        id: 3,
        image: 'Images/jersey/LOS ANGELES LAKERS/LEBRON JAMES/associatioon.png',
        title: 'Lebon Association',
        price: 10000,
    },
    {
        id: 4,
        image: 'Images/jersey/LOS ANGELES LAKERS/LEBRON JAMES/classic.png',
        title: 'Lebron classic ',
        price: 11000,
    }
];

const shoesProducts = [
    {
        id: 0,
        image: 'Images/assets/pink-all-star-kd16-basketball-shoe_ss5_p-200325297+pv-1+u-e7mvttiri2i50vulsgyg+v-ni38urgg0gembj0d3jn1-removebg-preview.png',
        title: 'KD 16',
        price: 11200,
    },
    {
        id: 1,
        image: 'Images/assets/Adizero_Bounce_Select_2.0_Low_Basketball_Shoes_Orange_IF9354_01_standard-removebg-preview.png',
        title: 'Adizero Bounce',
        price: 9000,
    },
    {
        id: 2,
        image: 'Images/assets/BYW_Select_Low_Shoes_Yellow_ID6097_01_standard-removebg-preview.png',
        title: 'BYW Select',
        price: 11230,
    },
    {
        id: 3,
        image: 'Images/assets/mens-nike-lebron-xxi-devotion-basketball-shoes_ss5_p-200683104+pv-1+u-klhhfandrdfpt4leo0f3+v-ipcmpulmzlc9yz8aew2v-removebg-preview.png',
        title: 'Lebron XXI',
        price: 10000,
    },
    {
        id: 4,
        image: 'Images/assets/Crazy_1_Shoes_Beige-removebg-preview.png',
        title: 'Crazy Shoes ',
        price: 11000,
    }
];

const categories = [...new Set(product.map(item => item.title))];

let i = 0;

document.getElementById('root').innerHTML = categories.map(title => {
    const item = product.find(product => product.title === title);
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${item.image}' alt='${item.title}'></img>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$ ${item.price}.00</h2>
                <button onclick='addtocart("${item.title}")'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');


document.getElementById('rootJersey').innerHTML = jerseyProducts.map(item => {
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${item.image}' alt='${item.title}'></img>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$ ${item.price}.00</h2>
                <button onclick='addtoCartJersey("${item.title}")'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

document.getElementById('rootShoes').innerHTML = shoesProducts.map(item => {
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${item.image}' alt='${item.title}'></img>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$ ${item.price}.00</h2>
                <button onclick='addtoCartShoes("${item.title}")'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');


let cart = [];

function addtocart(title) {
    const item = product.find(product => product.title === title);
    cart.push({...item});
    displaycart();
}

function addtoCartJersey(title) {
    const item = jerseyProducts.find(product => product.title === title);
    cart.push({...item});
    displaycart();
}

function addtoCartShoes(title) {
    const item = shoesProducts.find(product => product.title === title);
    cart.push({...item});
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    const cartItems = document.getElementById("cartItem");
    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        cartItems.innerHTML = cart.map((item, index) => {
            total += item.price;
            document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${item.image}' alt='${item.title}'>
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
    }
}

// Function to toggle cart visibility
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

// Function to handle checkout
function checkout() {
    // Here you can add your checkout logic, such as redirecting to a checkout page or processing the order.
    alert("Checkout functionality will be implemented soon!");
}
