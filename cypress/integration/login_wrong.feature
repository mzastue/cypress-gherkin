Feature: Login form
    I want to interact with login form

    Scenario: I can login - wrong scenario
        Given I am on Login page
        When I type broker login
        And I provide password for broker
        When I click login button
        Then I can see logged area