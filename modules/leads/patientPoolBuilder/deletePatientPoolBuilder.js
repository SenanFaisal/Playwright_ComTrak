const poolBuilderSelectors = require("../../../selectors/poolBuilderSelectors");
const poolBuilderData = require("../../../fixtures/poolBuilderData");
const { test, expect } = require("@playwright/test");

test.use({ storageState: "auth-session.json" });

const reviewPatientPoolBuilder =
  test("TC-04 - Delete Patient Pool Builder", async ({ page }) => {
    expect(page.url()).toBe("https://comtrak.qa.dmclinical.com/homepage");

    // Delete the Patient Pool Builder

    await page.click(poolBuilderSelectors.DRP_Leads);
    await page.click(poolBuilderSelectors.DRP_PatientPoolBuilder);
    await page.click(poolBuilderSelectors.BTN_Published);

    await page.waitForSelector(
      `//td//div[text()="${poolBuilderData.Pool_Name}"]`,
      { state: "visible" }
    );

    await page.click(
      `//td//div[text()="${poolBuilderData.Pool_Name}"]/ancestor::tr//button[@role="switch"]`
    );

    await page.click('//button[text()=" Yes "]');

    await page.click(
      `//td//div[text()="${poolBuilderData.Pool_Name}"]/ancestor::tr//button[@role="switch"]`
    );

    await page.click('//button[text()=" Yes "]');

    await page.click(poolBuilderSelectors.BTN_Continue1);

    await page.click(poolBuilderSelectors.BTN_Continue2);

    await page.click(poolBuilderSelectors.BTN_ExitDiscard);

    await page.click(poolBuilderSelectors.BTN_Delete);

    await page.waitForSelector(
      `//td//div[text()="${poolBuilderData.Pool_Name}"]`,
      { state: "hidden" }
    );
  });

module.exports = reviewPatientPoolBuilder;
