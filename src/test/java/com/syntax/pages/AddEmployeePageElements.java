package com.syntax.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;
import com.syntax.utils.CommonMethods;


public class AddEmployeePageElements extends CommonMethods {

	@FindBy(id = "firstName")
	public WebElement firstName;

	@FindBy(id = "middleName")
	public WebElement middleName;
	
	@FindBy(id = "lastName")
	public WebElement lastName;
		
	@FindBy(id = "btnSave")
	public WebElement saveBtn;
	
	@FindBy(id = "employeeId")
	public WebElement empId;
	
	@FindBy(id = "personal_txtLicenNo")
	public WebElement licenNo;
	
	@FindBy (id="personal_txtLicExpDate")
	public WebElement expDate;
	
	@FindBy (id="personal_txtNICNo")
	public WebElement ssn;
	
	@FindBy (id="personal_txtSINNo")
	public WebElement sin;
	
	@FindBy (xpath="//label[contains(@for, 'personal_optGender')]")
	public List<WebElement> gender;
	
	@FindBy (id="personal_cmbMarital")
	public WebElement maritalstatus;
	
	@FindBy (id="personal_cmbNation")
	public WebElement nationality;
	
	@FindBy(id="personal_DOB")
	public WebElement DOB;
	
	@FindBy (id="empPic")
	public WebElement picture;
	
	@FindBy (id="btnSave")
	public WebElement edit;
	
	
	public AddEmployeePageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}

}