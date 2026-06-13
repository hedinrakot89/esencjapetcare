# Esencja Pet Care — sklep internetowy (wersja robocza)

## Jak otworzyć
Otwórz `index.html` подвійним кліком — сайт повністю статичний, працює без сервера.

## Структура
- `index.html` — главная (hero, продукты, преимущества, о бренде, отзывы, newsletter)
- `sklep.html` — каталог с фильтрами по категориям
- `produkt.html?id=...` — карточка продукта (состав, применение, доставка)
- `koszyk.html` — корзина + оформление заказа (демо, оплата не подключена)
- `o-nas.html`, `kontakt.html`
- `js/products.js` — **все продукты и цены здесь** (легко редактировать)
- `css/style.css` — стили

## Как добавить реальные фото
Положи фото в `assets/img/` с именами:
- `paw-nose-balm.jpg` — Paw & Nose Natural Balm
- `dental-spray.jpg` — Dental Spray
- `anti-odour-shampoo.jpg` — Anti Odour Pet Shampoo
- `hero.jpg` — главное фото на баннере
- `about.jpg` — фото в разделе «О нас»

Пока файлов нет — показываются заглушки (SVG).

## Как добавить новый продукт
Открой `js/products.js` и добавь объект в массив `PRODUCTS` по образцу. Карточка, страница продукта и корзина подхватят его автоматически.

## Что заглушка / надо заменить
- Цены (поставлены ориентировочно)
- Телефон, e-mail, адрес
- Ссылки на соцсети
- Тексты отзывов
- Regulamin / Polityka prywatności (ссылки-пустышки)
- Оплата и доставка — демо (для реального магазина нужны Przelewy24/PayU + InPost API или перенос на Shoper/WooCommerce)
