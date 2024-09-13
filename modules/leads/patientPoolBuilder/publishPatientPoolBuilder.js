const poolBuilderSelectors = require("../../../selectors/poolBuilderSelectors");
const poolBuilderData = require("../../../fixtures/poolBuilderData");
const { test, expect } = require("@playwright/test");

test.use({ storageState: "auth-session.json" });

const reviewPatientPoolBuilder =
  test("TC-03 - Publish Patient Pool Builder", async ({ page }) => {
    expect(page.url()).toBe("https://comtrak.qa.dmclinical.com/homepage");

    // Publish Patient Pool Builder recently created

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

    await page.click(poolBuilderSelectors.BTN_CreatePool);

    await page.waitForSelector(
      `//td//div[text()="${poolBuilderData.Pool_Name}"]`,
      { state: "visible" }
    );
  });

module.exports = reviewPatientPoolBuilder;
