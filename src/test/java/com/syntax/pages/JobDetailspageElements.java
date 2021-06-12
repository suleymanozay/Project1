package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;

public class JobDetailspageElements {
	
	@FindBy(id = "btnSave")
	public WebElement saveEditBtn;
	
	@FindBy(id = "job_job_title")
	public WebElement jobTitle;
	
	@FindBy(id = "job_emp_status")
	public WebElement employmentStatus;
	
	@FindBy(id = "job_eeo_category")
	public WebElement jobCategry;
	
	@FindBy(id = "job_joined_date")
	public WebElement joinedDate;
	
	@FindBy(id = "job_sub_unit")
	public WebElement subUnit;
	
	@FindBy(id = "job_location")
	public WebElement location;
	
	@FindBy(id = "job_contract_start_date")
	public WebElement startDate;
	
	@FindBy(id = "job_contract_end_date")
	public WebElement endDate;
	
	@FindBy(id = "job_contract_file")
	public WebElement contractFile;
	
	
	
	
public JobDetailspageElements() {
	PageFactory.initElements(BaseClass.driver, this);
}
}
