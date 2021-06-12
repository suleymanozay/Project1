
@sprint2
Feature: Contact Details
  
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

  @contact
  Scenario: Modify Contact Details
    And I click on Contact Details  link
     When I click on  contact details Edit button
     Then  I am able to add Employee Contact Details
      | Street1   | Street2 | City   | State | Zip      | Country     | HomePhone  |  Mobile   |WorkPhone| WorkEmail   |OtherEmail|
      | 3210 Main St. | Suit 300         | Duluth | GA| 30027 | United States  | 3335555555 | 4445555555 |6665555555|aa@synta.com   |aa@gma.com|
      And I click on contact save button

  