package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;

public class EmployeListPageElements {
	
	@FindBy(id ="empsearch_id")
	public WebElement idSrch;
	
	@FindBy(id = "searchBtn")
	public WebElement srcBtn;
	
	@FindBy(xpath = "//input[contains(@id,'ohrmList_chkSelectRecord')]")
	public WebElement idOntable;
	
	@FindBy(xpath = "//table[@id='resultTable']/tbody/tr/td[2]/a")
	public WebElement empOnTable;
	
	
	
	
	public EmployeListPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}

}
