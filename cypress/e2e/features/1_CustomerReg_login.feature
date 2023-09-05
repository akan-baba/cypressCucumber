Feature: User Registration and login


Scenario: Successful Registration
Given I am a new customer
When I complete the registration process
Then I should be able to create an account and log in

Scenario: User login with valid credentials
Given I am a registered user
When I log in with my credentials
Then I should be able to access my account and view order history
