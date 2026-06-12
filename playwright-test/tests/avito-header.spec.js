const { test, expect } = require('@playwright/test');

test.describe('Проверка хедера сайта Авито', () => {
  
  test.beforeEach(async ({ page }) => {
    // Переходим на страницу перед каждым тестом
    await page.goto('https://qa-internship.avito.com', { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
  });

  test('Проверка наличия логотипа Авито', async ({ page }) => {
    // Ищем логотип по атрибуту alt или data-marker
    const logo = page.locator('[data-marker="header/logo"], img[alt*="Авито"], img[alt*="Avito"]').first();
    
    await expect(logo).toBeVisible({ timeout: 10000 });
    console.log('✅ Логотип Авито отображается');
  });

  test('Проверка кнопки "Вход и регистрация"', async ({ page }) => {
    // Ищем кнопку входа по тексту или стандартным селекторам
    const loginButton = page.locator('button:has-text("Вход и регистрация"), a:has-text("Вход и регистрация"), [data-marker*="login"], [data-marker*="auth"]').first();
    
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    console.log('✅ Кнопка "Вход и регистрация" отображается');
    
    // Проверяем, что кнопка доступна для клика
    await expect(loginButton).toBeEnabled();
  });

  test('Проверка кнопки "Разместить объявление"', async ({ page }) => {
    // Ищем кнопку размещения объявления
    const postAdButton = page.locator('a:has-text("Разместить объявление"), button:has-text("Разместить объявление"), [data-marker*="post"], [data-marker="header/post-ad"]').first();
    
    await expect(postAdButton).toBeVisible({ timeout: 10000 });
    console.log('✅ Кнопка "Разместить объявление" отображается');
    
    // Проверяем, что кнопка доступна для клика
    await expect(postAdButton).toBeEnabled();
  });

  test('Комплексная проверка всех элементов хедера', async ({ page }) => {
    // Проверяем все элементы одновременно
    const logo = page.locator('[data-marker="header/logo"], img[alt*="Авито"], img[alt*="Avito"]').first();
    const loginButton = page.locator('button:has-text("Вход и регистрация"), a:has-text("Вход и регистрация"), [data-marker*="login"], [data-marker*="auth"]').first();
    const postAdButton = page.locator('a:has-text("Разместить объявление"), button:has-text("Разместить объявление"), [data-marker*="post"], [data-marker="header/post-ad"]').first();
    
    // Проверяем видимость всех элементов
    await expect(logo).toBeVisible({ timeout: 10000 });
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    await expect(postAdButton).toBeVisible({ timeout: 10000 });
    
    console.log('✅ Все элементы хедера отображаются корректно');
  });

});
