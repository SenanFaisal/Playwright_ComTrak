const loginSelectors = require("../selectors/loginSelectors.js");
const loginData = require("../fixtures/loginData.js");
const { test, expect } = require("@playwright/test");
const fs = require("fs");

test("Google Authentication and Save Session", async ({ page }) => {
  await page.setViewportSize({ width: 1536, height: 864 });
  await page.goto("https://comtrak.qa.dmclinical.com/");

  const [googlePopup] = await Promise.all([
    page.waitForEvent('popup', { timeout: 10000 }),
    page.click(loginSelectors.BTN_SignIn),
    page.waitForTimeout(5000)
  ]);
  
  await googlePopup.fill(loginSelectors.TXT_Email, loginData.Email_Id);
  page.waitForTimeout(1000)
  await googlePopup.press(loginSelectors.TXT_Email, 'Enter')
  page.waitForTimeout(2000)
  await googlePopup.fill(loginSelectors.TXT_Password, loginData.Password_Id);
  page.waitForTimeout(1000)
  await googlePopup.press(loginSelectors.TXT_Password, 'Enter')
  page.waitForTimeout(2000)
  
  await page.waitForURL("https://comtrak.qa.dmclinical.com/homepage", { waitUntil: 'load'});
  expect(page.url()).toBe("https://comtrak.qa.dmclinical.com/homepage");

  const storageState = await page.context().storageState();
  fs.writeFileSync("auth-session.json", JSON.stringify(storageState));
});
//this is just comment