package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.syntax.bases.BaseClass;


public class PersonalDetailsPageElements {
	@FindBy(linkText = "Job")
	public WebElement jobLink;

	@FindBy(linkText = "Emergency Contacts")
	public WebElement emergencyLink;
	

	@FindBy(linkText = "Qualifications")
	public WebElement qualificationLink;
	
	@FindBy(linkText="Salary")
	public WebElement salaryLink;
	
	@FindBy(linkText = "Dependents")
	public WebElement dependentsLink;
	
	
	
	@FindBy(id = "personal_txtEmployeeId")
	public WebElement empID;
	
	
	
	
	public PersonalDetailsPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}
}
