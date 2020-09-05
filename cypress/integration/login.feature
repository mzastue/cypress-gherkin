Feature: Login form
    I want to interact with login form

    Background:
        Given I am on "/bp/login"

    @good @single
    Scenario: I can login - good scenario
        When I provide "Username" as "Broker3@mailinator.com"
        And I provide "Password" as "Password"
        And I click "Log in"
        Then I am redirected to "/bp/dashboard"

    @good @outline
    Scenario Outline:  Login for differend kind of users
        When I provide "Username" as "<user>"
        And I provide "Password" as "Password"
        And I click "Log in"
        Then I am redirected to "/bp/dashboard"

        Examples:
        |   user                        |
        |   Broker3@mailinator.com      |
        |   user_lmc1@mailinator.com    |

    Scenario Outline: Wrong password notification
        When I provide "Username" as "<user>"
        And I provide "Password" as "Wrong Password"
        And I click "Log in"
        Then I receive error message below form

        Examples:
        |   user                        |
        |   Broker3@mailinator.com      |
        |   user_lmc1@mailinator.com    |