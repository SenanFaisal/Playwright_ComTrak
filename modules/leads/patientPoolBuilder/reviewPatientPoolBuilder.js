const poolBuilderSelectors = require("../../../selectors/poolBuilderSelectors");
const poolBuilderData = require("../../../fixtures/poolBuilderData");
const { test, expect } = require("@playwright/test");

test.use({ storageState: "auth-session.json" });

const reviewPatientPoolBuilder =
  test("TC-02 - Review Patient Pool Builder", async ({ page }) => {
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
      `//td//div[text()="${poolBuilderData.Pool_Name}"]//parent::td//following-sibling::td//button[@title="View Details"]`
    );

    await page.click(poolBuilderSelectors.BTN_Cross);

    // Will be updated once the review screen get fixed
  });

module.exports = reviewPatientPoolBuilder;
