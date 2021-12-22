const { Given, When, Then } = require('@cucumber/cucumber');
const loginpage = require('../../pages/LoginPage');

const URL = 'https://trello.com/login';

Given(/^I open the login page$/, async () => {
  await testController.navigateTo(URL);
});

When(/^I enter the email (.*)$/, async (email) => {
  await testController
    .typeText(loginpage.LoginPage.EmailInput(), email);
});

When(/^I click the atlassian login button$/, async () => {
  await testController.wait(2000).click(loginpage.LoginPage.AtlassianLoginButton());
});

When(/^I enter the password (.*)$/, async (password) => {
  await testController.typeText(loginpage.LoginPage.PasswordInput(), password);
});

When(/^I click on the login button$/, async () => {
  await testController.click(loginpage.LoginPage.LoginButton());
});