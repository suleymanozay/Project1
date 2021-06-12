#Author: suleymanozay@com.syntax
@sprint2
Feature: Edit Personal Details

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

	@job
	Scenario: Add Employee Job Details
	  	And I click on job link
		 When I click on  Edit
		 Then  I am able to add Employee Job Details
			| JobTitle   | EmploymentStatus | JobCategory   | JoinedDate | SubUnit      | Location     | StartDate  | EndDate    | ContractDetails|
			| IT Analyst | Employee         | Professionals | 2017-05-30 | Select | Select  | 2018-01-09 | 2019-01-02 | C:/Users/salamon/Desktop/1.jpg |
		  And I click on save

	@emergency
	Scenario: Add Employee Emergency Contact
		  And I navigated Emergency Contacts
		 When I click on  Add
		 Then  I am able to add Employee Emergency Contacts
			| Name   | RelationsShip | HomeTelephone | Mobile     | WorkTelephone |
			| Mesiah | Saver         | 4045555555    | 5555555555 | 6665555555    |
		  And I click on emergency contact save button
