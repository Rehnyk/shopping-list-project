const { test, expect } = require("@playwright/test");

test("Main page has expected title, lists link.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Shared shopping list");
  await expect(page.locator("a")).toHaveText("Lists");
});

test('Clicking the lists link on main page navigates to /lists', async ({ page }) => {
  await page.goto('/');
  await page.click('a[href="/lists"]');
  const currentURL = page.url();
  const urlObj = new URL(currentURL);
  await expect(urlObj.pathname).toBe('/lists');
});

test("Can create a list.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `List ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.click('input[type="submit"]:has-text("Create List!")');
  await expect(page.locator(`a >> text='${listName}'`)).toHaveText(listName);
});

test("Can create an item.", async ({ page }) => {
  // Create a list first
  await page.goto("/lists");
  const listName = `List ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.click('input[type="submit"]:has-text("Create List!")');

  // Create an item
  await page.goto(`/lists/1`);
  const itemName = `Item ${Math.random()}`;
  await page.locator("input[type=text]").type(itemName);
  await page.click('input[type="submit"]:has-text("Add")');
  await expect(page.locator(`span:has-text('${itemName}')`)).toHaveText(itemName);
});

test('Can navigate to main page from lists page', async ({ page }) => {
  await page.goto('/lists');
  await page.click('a:has-text("Main page")');
  const currentURL = page.url();
  const urlObj = new URL(currentURL);
  await expect(urlObj.pathname).toBe('/');
});

test('Can navigate to lists page from /lists', async ({ page }) => {
  await page.goto('/lists/1');
  await page.click('a[href="/lists"]');
  const currentURL = page.url();
  const urlObj = new URL(currentURL);
  await expect(urlObj.pathname).toBe('/lists');
});

test("Handles error for invalid URL.", async ({ page }) => {
  await page.goto("/foo");
  const errorMessage = await page.innerText('body');
  await expect(errorMessage).toContain("Invalid URL.");
});

test("Handles error for invalid list ID.", async ({ page }) => {
  await page.goto("/lists/foo");
  const errorMessage = await page.innerText('body');
  await expect(errorMessage).toContain("Invalid list ID.");
});
