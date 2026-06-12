# 👋 Портфолио QA-инженера

Привет! Меня зовут **Егор**, и это моё портфолио с выполненными тестовыми заданиями.

Я начинающий **QA Engineer** и изучаю ручное и автоматизированное тестирование веб-приложений.

---

## 📋 Выполненные задания

| № | Задание | Описание | Статус |
|---|---------|----------|--------|
| 1 | [Тест-кейсы: Оплата картой](./test-cases/payment-by-card.md) | Написание тест-кейсов для оплаты банковской картой: позитивные, негативные, граничные значения, валидация и интеграция | ✅ Готово |
| 2 | [Playwright: Проверка заголовка](./playwright-test/tests/header-check.spec.js) | Автотест на проверку заголовка страницы https://playwright.dev/ | ✅ Готово |
| 3 | [Playwright: Проверка хедера Авито](./playwright-test/tests/avito-header.spec.js) | Автотесты для проверки элементов хедера тестового сайта Авито | ✅ Готово |
| 4 | [Теория вероятности](./probability/coin-toss-solution.md) | Задача с подбрасыванием монеты: расчёт вероятности выпадения 2 орлов из 3 бросков | ✅ Готово |

---

## 🛠️ Технологии и инструменты

| Категория | Инструменты |
|-----------|-------------|
| **Тест-дизайн** | Тест-кейсы, чек-листы, граничные значения, классы эквивалентности |
| **Автотесты** | Playwright, JavaScript |
| **Языки** | JavaScript, SQL (базово) |
| **Инструменты** | Git, GitHub, VS Code, DevTools |
| **Документация** | Markdown, Allure (базово) |

---

## 🚀 Запуск автотестов Playwright

### 1. Перейти в папку с автотестами

```bash
cd playwright-test
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Установить браузеры Playwright

```bash
npm run install:browsers
```

Если запуск выполняется на Linux/CI и нужны системные зависимости:

```bash
npm run install:browsers:with-deps
```

### 4. Запустить все тесты

```bash
npm test
```

---

## 🧪 Полезные команды

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
npm run test:headed
npm run test:ui
npm run test:debug
npm run test:report
```

---

## 📁 Структура проекта

```text
.
├── README.md
├── playwright-test/
│   ├── package.json
│   ├── playwright.config.js
│   └── tests/
│       ├── avito-header.spec.js
│       └── header-check.spec.js
├── probability/
│   └── coin-toss-solution.md
└── test-cases/
    ├── payment-by-card.md
    └── payment-by-card-copy.md
```
