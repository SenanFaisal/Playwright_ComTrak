const poolBuilderSelectors = require("../../../../../selectors/poolBuilderSelectors");
const poolBuilderData = require("../../../../../fixtures/poolBuilderData");
const { test, expect } = require("@playwright/test");

test.use({ storageState: "auth-session.json" });

const publishPatientPool =
  test("TC-01 - Create and Publish the Patient Pool", async ({ page }) => {
    expect(page.url()).toBe("https://comtrak.qa.dmclinical.com/homepage");
    await page.click(poolBuilderSelectors.DRP_Leads);
    await page.click(poolBuilderSelectors.DRP_PatientPoolBuilder);
    await page.click(poolBuilderSelectors.Create_New);
    await page
      .locator(poolBuilderSelectors.TXT_PoolName)
      .fill(poolBuilderData.Pool_Name);
    await page
      .locator(poolBuilderSelectors.TXT_Description)
      .fill(poolBuilderData.Description);
    await page.click(poolBuilderSelectors.BTN_Continue1);

    await page.click(poolBuilderSelectors.SELECT_State);
    await page.click(poolBuilderData.State_1);
    await page.click(poolBuilderData.State_2);
    await page.locator(poolBuilderSelectors.MIN_AgeSlider).focus();
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press("ArrowRight");
    }
    await page.locator(poolBuilderSelectors.MAX_AgeSlider).focus();
    for (let i = 0; i < 2; i++) {
      await page.keyboard.press("ArrowLeft");
    }
    await page.click(poolBuilderSelectors.SELECT_Status);
    await page.click(poolBuilderData.Status_1);

    await page.click(poolBuilderSelectors.BTN_Continue2);

    await page.click(poolBuilderSelectors.DRP_IntendedStudy);
    await page.click(poolBuilderData.IntendedStudy);

    await page.click(poolBuilderSelectors.BTN_CreatePool);

    await page.waitForSelector(
      `//td /div[text()="${poolBuilderData.Pool_Name}"]`,
      { state: "visible" }
    );
  });

module.exports = publishPatientPool;
