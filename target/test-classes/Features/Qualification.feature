#Author: aliozkalay@com.syntax
@sprint2
Feature: Add employee's qualifications

	@qualifications
	Scenario: Adding qualifications
		Given I am logged into HRMS as an Admin
		  And I navigated to Add Employe Page
		  And I add "A", "Jr"  and "A"
		  And I click on Save
		  And I pick Employee Id
		  And I navigated Employee List
		  And I enter valid Employee Id
		  And I click search button
		  And I click on Employee from table
		  And I click Qualifications link
		 When I click on Work Experience add button
		 Then I am able to add Work Experience
			| Company | JobTitle  | From       | To         | Comment              |
			| Amazon  | QA Tester | 2015-06-02 | 2017-09-17 | Two years experience |
		  And I click on work experience save button
		  And I click on Skills add button
		  And I am able to add Skill
			| Skill    | YearOfExpr | Comment                |
			| DataBase | 3          | Three years experience |
		  And I click on skill save button
		  And I click on Languages add button
		  And I am able to add Language
			| Language | Fluency  | Competency    | Comment                |
			| Kazakh   | Speaking | Mother Tongue | He knows two languages |
		  And I click on language save button
		  And I click on Education add button
		  And I am able to add Education
			| Level | Institute | Major        | Year | GPA/Score | StartDate  | EndDate    |
			| MBA   | GA Tech   | Data Science | 2018 | 4.7       | 2017-06-02 | 2018-09-17 |
		  And I click on Education save button
