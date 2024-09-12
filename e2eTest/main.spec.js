const { test } = require("@playwright/test");

test.use({ storageState: "auth-session.json" });

test.describe("ComTrak - Patient Pool Builder", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://comtrak.qa.dmclinical.com/homepage");
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
