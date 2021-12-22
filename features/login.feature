Feature: Login Feature 

    As a visitor I can login into Trello

@login
Scenario: A user can log in
Given I open the login page
When I enter the email crist.v095@gmail.com
And I click the atlassian login button
And I enter the password 123456789
And I click on the login button
