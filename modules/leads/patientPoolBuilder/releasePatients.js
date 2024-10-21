const poolBuilderSelectors = require("../../../selectors/poolBuilderSelectors");
const poolBuilderData = require("../../../fixtures/poolBuilderData");
const { test, expect } = require("@playwright/test");

test.use({ storageState: "auth-session.json" });

const reviewPatientPoolBuilder = test("TC-02 - Release Patients", async ({
  page,
}) => {
  expect(page.url()).toBe("https://comtrak.qa.dmclinical.com/homepage");

  // Review Patient Pool Builder in Drafts

  await page.click(poolBuilderSelectors.DRP_Leads);
  await page.click(poolBuilderSelectors.DRP_PatientPoolBuilder);
  await page.click(poolBuilderSelectors.BTN_Drafts);

  await page.waitForSelector(
    `//td//div[text()="${poolBuilderData.Pool_Name}"]`,
    { state: "visible" }
  );

  await page.click(
    `//td//div[text()="${poolBuilderData.Pool_Name}"]//parent::td//following-sibling::td//button[@title="Edit"]`
  );

  await page.click(poolBuilderSelectors.BTN_Continue1);

  await page.click(poolBuilderSelectors.BTN_Continue2);

  await page.waitForTimeout(5000);

  let storedValue;
  storedValue = await page
    .locator('//h5[text()="Adjusted Count"]//following-sibling::div//h2')
    .textContent();
  console.log(storedValue);

  await page.click('//button[@id="popover-15"]');

  await page.locator('//input[@placeholder="Enter count"]').fill("1");

  await page.click('//button[text()=" Release "]');

  const expectedValue = (parseInt(storedValue.trim()) + 1).toString();

  await expect
    .soft(
      page.locator('//h5[text()="Adjusted Count"]//following-sibling::div//h2')
    )
    .toHaveText(expectedValue);
  console.log(expectedValue);

  await page.click(poolBuilderSelectors.BTN_SaveDraft);
});

module.exports = reviewPatientPoolBuilder;
