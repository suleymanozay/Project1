@sprint2
Feature: Personal Details

  Background: 
    Given I am logged into HRMS as an Admin
      And I navigated to Add Employe Page
      And I add "A", "Jr"  and "A"
       And I click on Save
       And I pick Employee Id
      And I navigated Employee List
      And I enter valid Employee Id
      And I click search button
      And I click on Employee from table

  @PersonDetails
  Scenario: Modify personal Details
    When I click on personal details edit button
    Then I am able to modify personal details
    | DriverLicense | ExpirationDate | SSN         | SIN    | Gender | MaritalStatus | Nationality | DOB        |
    | b0345786      | 2021-02-04     | 234-57-0999 | 687430 | Male   | Married       | Panamanian  | 1960-02-04 |
    And I click on personal detail save button
