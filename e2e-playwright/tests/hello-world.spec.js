const { test, expect } = require("@playwright/test");

test("Main page has expected title, lists link.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Shared Shopping List!");
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
  await page.click('a:has-text("Main Page")');
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

test("Handles invalid URL with 404 response", async ({ page }) => {
  await page.goto("/lists/foo");

  // Wait for the page to load and check for the response status
  await page.waitForLoadState("domcontentloaded");

  // Check if the page contains the expected error message
  const errorMessage = await page.innerText('body');
  await expect(errorMessage).toContain("Invalid URL.");

  // Check for the expected status code
  const response = page.response();
  await expect(response).toHaveProperty('status', 404);
});

/*

test("Can navigate to a list.", async ({ page }) => {
  await page.goto("/");
  const taskName = `My task: ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName);
  await page.locator("input[type=submit]").click();
  await page.locator(`a >> text='${taskName}'`).click();
  await expect(page.locator("h1")).toHaveText(taskName);
});



test("Can can collect an item.", async ({ page }) => {
  await page.goto("/");

});

test("Can .", async ({ page }) => {
  await page.goto("/");

});

test("Can .", async ({ page }) => {
  await page.goto("/");

});

*/
