<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Интернет-магазин</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
    <h1>Magazin</h1>
    <nav>
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Корзина</a></li>
        </ul>
    </nav>
</header>

<main>
    <section id="product-list">
        <h2>Список товаров</h2>
        <div class="products">
            <!-- Товары будут добавляться с помощью JavaScript -->
        </div>
    </section>

    <section id="cart">
        <h2>Корзина</h2>
        <ul class="cart-items">
            <!-- Товары в корзине будут добавляться с помощью JavaScript -->
        </ul>
        <button id="checkout-button">Оформить заказ</button>
    </section>

    <section id="checkout-form" class="hidden">
        <h2>Оформление заказа</h2>
        <form id="order-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required>

            <label for="payment">Payment method:</label>
            <select id="payment" name="payment" required>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
            </select>

            <button type="submit">Pay</button>
        </form>
    </section>
</main>


<script src="script.js"></script>
</body>
</html>