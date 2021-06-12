@sprint2
Feature: Add Employee Dependents

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

  @dependents
  Scenario: Add Employee Dependents
    And I click on Dependents link
   When I click on depents Add
    Then I am able to add Employee Dependents
      | Name             | Relationship | Date of Birth |
      | Dolores Umbridge | Child        | 1989-02-13    |
     	And I click on  depents save

     	
     	