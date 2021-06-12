package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;
import com.syntax.utils.CommonMethods;

public class EmergencyContactPageElements extends CommonMethods{
	@FindBy(id = "btnAddContact")
	public WebElement addBtn;
	
	@FindBy(id = "emgcontacts_name")
	public WebElement name;
	
	@FindBy(id = "emgcontacts_relationship")
	public WebElement relationShip;
	
	@FindBy(id = "emgcontacts_homePhone")
	public WebElement homePhone;
	
	@FindBy(id = "emgcontacts_mobilePhone")
	public WebElement mobilePhone;
	
	@FindBy(id = "emgcontacts_workPhone")
	public WebElement workPhone;
	
	@FindBy(id = "btnSaveEContact")
	public WebElement saveBtn;
	
	
	
	
	
	
	
	
	public EmergencyContactPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}
}
