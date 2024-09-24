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

    await expect(page.locator(poolBuilderSelectors.h1)).toHaveText(
      " Review Patients Pool "
    );

    await expect(page.locator(poolBuilderSelectors.Verify_Name)).toHaveText(
      poolBuilderData.Pool_Name
    );

    await expect(
      page.locator(poolBuilderSelectors.Verify_Description)
    ).toHaveText(poolBuilderData.Description);

    await expect(page.locator(poolBuilderSelectors.Verify_State1)).toHaveText(
      " New Jersey "
    );

    await expect(page.locator(poolBuilderSelectors.Verify_State2)).toHaveText(
      " New York "
    );

    await expect(page.locator(poolBuilderSelectors.Verify_Status)).toHaveText(
      " Pre Booking "
    );

    await expect(page.locator(poolBuilderSelectors.Verify_Age)).toHaveText(
      "6 years - 98 years"
    );

    await expect(page.locator(poolBuilderSelectors.Verify_Study)).toHaveText(
      " Moderna 1273-p301 "
    );

    await page.click(poolBuilderSelectors.BTN_Cross);
  });

module.exports = reviewPatientPoolBuilder;
