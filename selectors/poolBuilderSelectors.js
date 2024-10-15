const poolBuilderSelectors = {
  DRP_Leads: '//p[text()="Leads "]',
  DRP_PatientPoolBuilder: '//p[text()="Patient Pool Builder "]',
  Create_New: '//a[@id="subMenuItem0"]',
  TXT_PoolName: '//input[@id="poolName"]',
  TXT_Description: '//textarea[@id="poolDescription"]',
  BTN_Continue1: '(//button[text()=" Continue "])[1]',
  SELECT_State: '//span[text()="Select State"]',
  MIN_AgeSlider: '(//span[@aria-label="ngx-slider"])[1]',
  MAX_AgeSlider: '(//span[@aria-label="ngx-slider-max"])[1]',
  SELECT_Status: '//span[text()="Select Status"]',
  BTN_Continue2: '(//button[text()=" Continue "])[2]',
  DRP_IntendedStudy: '//span[text()="Select Intended Study"]',
  BTN_Review: '//button[text()=" Review Pool "]',
  h1: '//div[@id="center"]',
  Verify_Name:
    '//div[@class="row"][1]/following-sibling::div[6]//span[@class="detail"]',
  Verify_Description:
    '//div[@class="row"][1]/following-sibling::div[7]//span[@class="detail"]',
  Verify_State1: '//span[text()="State(s):"]/following-sibling::span//span[1]',
  Verify_State2: '//span[text()="State(s):"]/following-sibling::span//span[2]',
  Verify_Status:
    '//span[text()="Status(es):"]/following-sibling::span//span[1]',
  Verify_Age:
    '(//span[text()="Age Range:"]//ancestor::label)[1]//span[@class="detail"]',
  Verify_Study:
    '//span[text()="Intended Study:"]//ancestor::label//span[@class="detail"][1]',
  BTN_Cross: '//i[text()=" clear "]',
  BTN_SaveDraft: '//button[text()=" Save as Draft "]',
  BTN_Drafts: '//a[@id="subMenuItem1"]',
  BTN_Published: '//a[@id="subMenuItem2"]',
  BTN_CreatePool: '//button[text()=" Create Pool "]',
  EYE_ReviewPool:
    "tr:nth-child(1) > td:nth-child(8) > div > button:nth-child(1)",
  BTN_ExitDiscard: '//button[text()=" Exit & Discard "]',
  BTN_Delete: '//button[text()=" Delete "]',
};
module.exports = poolBuilderSelectors;
