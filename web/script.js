document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Товар 1', price: 100, image: 'images/product1.jpg' },
        { id: 2, name: 'Товар 2', price: 200, image: 'images/product2.jpg' },
        { id: 3, name: 'Товар 3', price: 300, image: 'images/product3.jpg' }
    ];

    const cart = [];
    const productList = document.querySelector('.products');
    const cartItems = document.querySelector('.cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutForm = document.getElementById('checkout-form');
    const orderForm = document.getElementById('order-form');

    // Отображение товаров
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} руб.</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productList.appendChild(productElement);
    });

    // Добавление товара в корзину
    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    };

    // Обновление корзины
    const updateCart = () => {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - ${item.price} руб.`;
            cartItems.appendChild(cartItem);
        });
    };

    // Оформление заказа
    checkoutButton.addEventListener('click', () => {
        checkoutForm.classList.remove('hidden');
    });

    // Отправка формы заказа
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const payment = document.getElementById('payment').value;

        // Здесь можно добавить логику для обработки оплаты

        let data = {name: 'Example'};

        let response = fetch('http://localhost:8080/payment/pay?key=SHARED_KEY', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'name': name})
        });
        alert(`Заказ оформлен! Спасибо, ${name}!`);
        cart.length = 0;
        updateCart();
        checkoutForm.classList.add('hidden');
        orderForm.reset();
    });
});