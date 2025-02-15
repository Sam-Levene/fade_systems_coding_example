Feature: Automate the Registration Form

    @Automate @HappyPathScenarios
    Scenario: A user navigates to the registration form
        Given a user is on their browser
        When the user navigates to the website
        Then the registration form is displayed

    @Automate @HappyPathScenarios
    Scenario Outline: A user fills in the form correctly with email "<PresenceOfEmail>"
        Given a user is on their browser
        When the user navigates to the website
        And the user fills in the form correctly with email "<PresenceOfEmail>"
        Then the table is updated with email "<PresenceOfEmail>" in the information
        Examples:
        | PresenceOfEmail |
        | present         |
        | absent          |

    @Defect @FadeSystems-Ticket-1 @HappyPathScenarios
    Scenario: A user is able to delete a form entry they previously made on the table
        Given a user is on their browser
        When the user navigates to the website
        And the user fills in the form correctly with email "present"
        When the user deletes their data from the table
        Then the data is removed from the table

    @Automate @NegativeTestingScenarios
    Scenario Outline: A user fills in the form incorrectly, leaving out the "<FormSkip>"
        Given a user is on their browser
        When the user navigates to the website
        And the user fills in the form incorrectly, leaving out the "<FormSkip>"
        Then the error for "<FormSkip>" is shown
        Examples: 
        | FormSkip |
        | Name     |
        | Country  |

    @Automate @NegativeTestingScenarios
    Scenario: A user fills in the form incorrectly, entering an invalid email address
        Given a user is on their browser
        When the user navigates to the website
        And the user fills in the form incorrectly, entering an invalid email address
        Then the error for the Email field is shown

    @Automate @NegativeScenarios
    Scenario: A user fills in the form incorrectly, trying a country that doesn't exist
        Given a user is on their browser
        When the user navigates to the website
        And the user fills in the form incorrectly, trying to submit a country that doesn't exist
        Then the field informs the user that no options are available

    @Automate @PenetrationTesting
    Scenario: A user fills in the form maliciously, entering a username that tries to "<PenTest>"
        Given a user is on their browser
        When the user navigates to the website
        And the user fills in the form maliciously, entering a username that tries to "<PenTest>"
        Then the table is updated with the username being "<PenTest>"
        Examples:
        | PenTest    |
        | inject SQL |
        | use XSS    |