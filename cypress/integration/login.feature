Feature: Login form
    I want to interact with login form

    Scenario: I can login - good scenario
        Given I am on "/bp/login"
        When I provide "Username" as "Broker3@mailinator.com"
        And I provide "Password" as "Password"
        And I click "Log in"
        Then I am redirected to "/bp/dashboard"