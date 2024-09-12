const { test } = require("@playwright/test");

test.use({ storageState: "auth-session.json" });

test.describe("ComTrak - Patient Pool Builder Test Cases", () => {
  // test.beforeEach(async ({ page }) => {
  //   const sessionFile = "auth-session.json";

  //   if (fs.existsSync(sessionFile)) {
  //     await page
  //       .context()
  //       .addCookies(JSON.parse(fs.readFileSync(sessionFile, "utf8")).cookies);
  //   }

  //   await page.goto("https://comtrak.qa.dmclinical.com/homepage");

  //   if (page.url().includes("https://comtrak.qa.dmclinical.com/login")) {
  //     execSync("npx playwright test googleAuthentication.spec.js", {
  //       stdio: "inherit",
  //     });

  //     if (fs.existsSync(sessionFile)) {
  //       const storageState = JSON.parse(fs.readFileSync(sessionFile, "utf8"));
  //       await page.context().clearCookies();
  //       await page.context().addCookies(storageState.cookies);
  //       await page.reload();
  //     }
  //   }
  // });
  test.beforeEach(async ({ page }) => {
    // const sessionFile = "auth-session.json";
        await page.goto('https://comtrak.qa.dmclinical.com/homepage');

    });
  require("../modules/leads/patientPoolBuilder/published/publishedPools/publishPatientPool.js");
  // require("../modules/leads/patientPoolBuilder/published/publishedPools/activatePatientPool.js");
  // require("../modules/leads/patientPoolBuilder/published/publishedPools/deactivatePatientPool.js");
  // require("../modules/leads/patientPoolBuilder/published/publishedPools/duplicatePublishedPatientPool.js");
  // require("../modules/leads/patientPoolBuilder/published/recruiterAssignmentUtility/addRecruiter.js");
  // require("../modules/leads/patientPoolBuilder/published/recruiterAssignmentUtility/assignToRecruiter.js");
  // require("../modules/leads/patientPoolBuilder/published/recruiterAssignmentUtility/releaseAllPatients.js");
  // require("../modules/leads/patientPoolBuilder/createNew/dataValidation.js");
  // require("../modules/leads/patientPoolBuilder/createNew/discardPatientPool.js");
  // require("../modules/leads/patientPoolBuilder/createNew/existingNameCheck.js");
  // require("../modules/leads/patientPoolBuilder/drafts/deletePoolFromDrafts.js");
  // require("../modules/leads/patientPoolBuilder/drafts/duplicatePoolFromDrafts.js");
  // require("../modules/leads/patientPoolBuilder/drafts/editPoolFromDrafts.js");
  // require("../modules/leads/patientPoolBuilder/drafts/reviewPoolFromDrafts.js");
  // require("../modules/leads/patientPoolBuilder/drafts/savePoolToDrafts.js");
});
