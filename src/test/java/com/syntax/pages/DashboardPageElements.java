package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;
import com.syntax.utils.CommonMethods;

public class DashboardPageElements extends CommonMethods {

	@FindBy(linkText = "PIM")
	public WebElement pim;
	
	@FindBy(linkText = "Add Employee")
	public WebElement addEmp;

	@FindBy(linkText = "Employee List")
	public WebElement employeList;
	
	@FindBy(linkText = "Contact Details")
	public WebElement contactDetails;
	
	public void navigateToEmployeList() {
		click(pim);
		waitForClickability(employeList);
		jsClick(employeList);
	}
	
	public void navigateToAddEmployee() {
		waitForClickability(pim);
		click(pim);
		waitForClickability(addEmp);
		click(addEmp);
	}
	
	public DashboardPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}

	
}