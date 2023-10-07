const { test, expect } = require("@playwright/test");

/*test("Server responds with the text 'Hello world!'", async ({ page }) => {
  const response = await page.goto("/");
  expect(await response.text()).toBe("Hello world!");
});*/

test("Main page has expected title, lists link.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Shared shopping lists");
  await expect(page.locator("a")).toHaveText("Lists");

});


test("Main page has statistics.", async ({ page }) => {
  await page.goto("/");

});



test("Can create a list.", async ({ page }) => {
  await page.goto("/");
  const taskName = `My task: ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName);
  await page.locator("input[type=submit]").click();
  await expect(page.locator(`a >> text='${taskName}'`)).toHaveText(taskName);
});

test("Can create an item.", async ({ page }) => {
  await page.goto("/");
  const taskName = `My task: ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName);
  await page.locator("input[type=submit]").click();
  await expect(page.locator(`a >> text='${taskName}'`)).toHaveText(taskName);
});

test("Can navigate to a list.", async ({ page }) => {
  await page.goto("/");
  const taskName = `My task: ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName);
  await page.locator("input[type=submit]").click();
  await page.locator(`a >> text='${taskName}'`).click();
  await expect(page.locator("h1")).toHaveText(taskName);
});

test("Can deactivate a list.", async ({ page }) => {
  await page.goto("/");

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

test("Can .", async ({ page }) => {
  await page.goto("/");

});

test("Can .", async ({ page }) => {
  await page.goto("/");

});