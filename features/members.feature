Feature: Members

    Background: A user can log in
        Given I open the login page
        When I enter the email testappsa2@gmail.com
        And I click the atlassian login button
        And I enter the password test12345
        And I click on the login button

    @members
    Scenario: A member can add another member in his workspace
        Given A member is in members section displayed
        When I invite a user to my workspace by username marcandea
        Then I should see the member in members list
