const { test } = require("@playwright/test");

test.use({ storageState: "auth-session.json" });

test.describe("ComTrak - Patient Pool Builder", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://comtrak.qa.dmclinical.com/homepage");
  });
  require("../modules/leads/patientPoolBuilder/createPatientPoolBuilder.js")
  require("../modules/leads/patientPoolBuilder/reviewPatientPoolBuilder.js")
  require("../modules/leads/patientPoolBuilder/publishPatientPoolBuilder.js")
  require("../modules/leads/patientPoolBuilder/deletePatientPoolBuilder.js")
});