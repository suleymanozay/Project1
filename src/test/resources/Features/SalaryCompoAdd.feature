#Author: hsinangh@com.syntax
@sprint2
Feature: Enter Salary Components

  Background: 
    Given I am logged into HRMS as an Admin
    And I navigated to Add Employe Page
    And I add "Adem", "Jr"  and "Buyuk"
    And I click on Save
    And I pick Employee Id
    And I navigated Employee List
    And I enter valid Employee Id
    And I click search button
    And I click on Employee from table

  @salary
  Scenario: Add Employee Salary Details
    And I click on Salary link
    When I click on  Salary Add
    Then I am able to add Employee Salary Details
      | PayGrade         | SalaryComponents | PayFrequency | Currency             | Amount | Comments |
      | batuhan sutceker | bonus            | Monthly      | United States Dollar |   9000 | cash     |
    When I click on Add Direct Deposit Details checkbox
    Then I am able to add Deposit Account Details
      | AccountNumber | AccountType | RoutingNumber | Amount |
      |         12345 | Checking    |        101112 |  11000 |
    And I click on Salary Save button
