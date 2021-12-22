const { Given, When, Then } = require('@cucumber/cucumber');
const membersPage = require('../../pages/MembersPage');
const httpRequestManager = require('../../src/httpRequestManager');
const payloads = require('../../src/resources/payloads.json');

const TIMEOUT = 50000;

Given(/^A member is in members section displayed$/, { timeout: TIMEOUT }, async () => {
    // await httpRequestManager.HttpRequestManager.makeRequest(
    //     "POST",
    //     `/1/organizations`,
    //     payloads.createWorkspace,
    //     true
    // )
    // await testController.click(membersPage.MembersPage.DropDownWorkspace());
    await testController.click(membersPage.MembersPage.MembersTab());
});

When('I invite a user to my workspace by username marcandea', { timeout: TIMEOUT }, async () => {
    await testController.click(membersPage.MembersPage.InviteButton());
    await testController.typeText(membersPage.MembersPage.TextBoxUser(), "marcandea");
    await testController.click(membersPage.MembersPage.UserSelected());
    await testController.click(membersPage.MembersPage.AddButton());
});

Then('I should see the member in members list', { timeout: TIMEOUT }, async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});