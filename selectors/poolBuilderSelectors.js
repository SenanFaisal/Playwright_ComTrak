const poolBuilderSelectors = {
    DRP_Leads: '//p[text()="Leads "]',
    DRP_PatientPoolBuilder: '//p[text()="Patient Pool Builder "]',
    Create_New: '//a[@id="subMenuItem0"]',
    TXT_PoolName: '//input[@id="poolName"]',
    TXT_Description: '//textarea[@id="poolDescription"]',
    BTN_Continue1: '//button[text()=" Continue "]',
    SELECT_State: '//span[text()="Select State"]',
    MIN_AgeSlider: '(//span[@aria-label="ngx-slider"])[1]',
    MAX_AgeSlider: '(//span[@aria-label="ngx-slider-max"])[1]',
    SELECT_Status: '//span[text()="Select Status"]',
    BTN_Continue2: '(//button[text()=" Continue "])[2]',
    DRP_IntendedStudy: '//span[text()="Select Intended Study"]',
    BTN_Review: 'div.submit-buttons > button:nth-child(3)',
    Verify_Name: 'mat-dialog-content > div > div > div:nth-child(8)',
    Verify_Description: 'div > div:nth-child(9) > div > label > span.detail',
    Verify_State1: 'div:nth-child(13) > label > span.hashtag-container.ng-star-inserted > span:nth-child(1)',
    Verify_State2: 'span.hashtag-container.ng-star-inserted > span:nth-child(2)',
    Verify_Status: 'div:nth-child(14) > label > span.hashtag-container.ng-star-inserted > span',
    Verify_Age: 'div > div > div:nth-child(16) > label > span.detail',
    Verify_Study: 'div > div > div:nth-child(135) > label > span.detail',
    BTN_Cross: 'label[class="cancle"]',
    BTN_SaveDraft: '.submit-buttons',
    BTN_Drafts: '#subMenuItem1',
    BTN_Published: '#subMenuItem2',
    BTN_CreatePool: '//button[text()=" Create Pool "]',
    EYE_ReviewPool: 'tr:nth-child(1) > td:nth-child(8) > div > button:nth-child(1)',
    BTN_ExitDiscard: '.submit-buttons > button.btn.btn-outline-danger',
    BTN_Delete: '[class="row mt-3"] > button:nth-child(2)',
};
module.exports = poolBuilderSelectors;