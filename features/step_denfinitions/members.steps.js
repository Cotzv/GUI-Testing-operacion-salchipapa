const { Given, When, Then } = require('@cucumber/cucumber');
const membersPage = require('../../pages/MembersPage');

const TIMEOUT = 50000;

Given(/^A member is in members section displayed$/, { timeout: TIMEOUT }, async () => {
    await testController.click(membersPage.MembersPage.MembersTab());
});

When('I invite a user to my workspace by username marcandea', { timeout: TIMEOUT }, async () => {
    await testController.click(membersPage.MembersPage.InviteButton());
    await testController.typeText(membersPage.MembersPage.TextBoxUser(), "marcandea");
    await testController.click(membersPage.MembersPage.UserSelected());
    await testController.click(membersPage.MembersPage.AddButton());
});

Then('I should see the member in members list', { timeout: TIMEOUT }, async () => {
    await testController.expect(membersPage.MembersPage.MemberList().innerText).contains("marcandea");
});