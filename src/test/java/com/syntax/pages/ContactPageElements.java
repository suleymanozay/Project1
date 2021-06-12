package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;
import com.syntax.utils.CommonMethods;

public class ContactPageElements extends CommonMethods {

	@FindBy(id= "contact_street1")
	public WebElement street1;
	
	@FindBy(id= "contact_street2")
	public WebElement street2;

	@FindBy(id= "contact_city")
	public WebElement city;
	
	@FindBy(id= "contact_province")
	public WebElement state;
	
	@FindBy(id= "contact_emp_zipcode")
	public WebElement zip;
	
	@FindBy(id= "contact_country")
	public WebElement country;

	@FindBy(id= "contact_emp_hm_telephone")
	public WebElement homePhone;
	
	@FindBy(id= "contact_emp_mobile")
	public WebElement mobile;
	
	@FindBy(id= "contact_emp_work_telephone")
	public WebElement workPhone;
	
	@FindBy(id= "contact_emp_work_email")
	public WebElement wEmail;
	
	@FindBy(id= "contact_emp_oth_email")
	public WebElement otherEmail;
	
	@FindBy(id = "btnSave")
	public WebElement saveEditBtn;
	
	public  ContactPageElements() {
		
		PageFactory.initElements(BaseClass.driver, this);
	}

	
}