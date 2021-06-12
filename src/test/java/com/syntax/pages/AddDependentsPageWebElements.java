package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.CommonMethods;

public class AddDependentsPageWebElements extends CommonMethods{
 
	@FindBy(id = "dependent_name")
	public WebElement depName;
	
	@FindBy(id="dependent_relationshipType")
	public WebElement depRelation;
	
	@FindBy(id="dependent_dateOfBirth")
	public WebElement depDOB;
	
	@FindBy(id="btnSaveDependent")
	public WebElement saveBtn;
	
	@FindBy(id="btnAddDependent")
	public WebElement addBtn;
	
	public AddDependentsPageWebElements() {
		PageFactory.initElements(driver, this);
		
	
}
}