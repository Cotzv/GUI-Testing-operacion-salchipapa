const { Given, When, Then } = require('@cucumber/cucumber');
const loginpage = require('../../pages/LoginPage');

const URL = 'https://trello.com/login';

Given(/^A member is in members section displayed$/, async () => {
  await testController.navigateTo(URL);
});
