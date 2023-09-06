Feature: User Registration and login



Scenario: Successful Registration
Given User is on the registration page
When I complete the registration process
Then I should be able to create an account and log in


Scenario: User login with valid credentials
Given User is on the login page
When I log in with my valid 'Barbara_Kautzer85' and 'red123'
Then Verify title of the web page 'Your store. Home page title'


Scenario: User login with invalid credentials
Given User navigates to the login page
When I log in with invalid details 'Barbara' and 'red123'
Then Verify error message 'Your store. Home page title'
