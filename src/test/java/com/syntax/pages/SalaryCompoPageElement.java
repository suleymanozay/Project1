package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;
import com.syntax.utils.CommonMethods;



public class SalaryCompoPageElement extends CommonMethods {
	    
		
		@FindBy(id="addSalary")
		public WebElement addSalaryBtn;
		
		@FindBy(css="select#salary_sal_grd_code")
		public WebElement payGrade;
		
		@FindBy(css="input#salary_salary_component")
		public WebElement salaryCompo;
		
		@FindBy(css="select#salary_payperiod_code")
		public WebElement payFreq;
		
		@FindBy(id="salary_currency_id")
		public WebElement currency;
		
		@FindBy(css="input#salary_basic_salary")
		public WebElement salAmaount;
		
		@FindBy(css="textarea#salary_comments")
		public WebElement comments;
		
		@FindBy(xpath="//input[@type='checkbox']")
		public WebElement addDepChcBx;
		
		@FindBy(id="directdeposit_account")
		public WebElement accntNum;
		
		@FindBy(css="select#directdeposit_account_type")
		public WebElement accntType;
		
		@FindBy(id="directdeposit_routing_num")
		public WebElement routeNum;
		
		@FindBy(id="directdeposit_amount")
		public WebElement diramount;
		
		@FindBy(id="btnSalarySave")
		public WebElement btnSalSave;
		
		@FindBy(xpath="//input[@class='chkbox displayDirectDeposit']")
		public WebElement dataChckBox;
		
		@FindBy(css="table#tblSalary")
		public WebElement chckTable;
		
		
		
		
		
		
		
		
		public SalaryCompoPageElement() {
			PageFactory.initElements(BaseClass.driver, this);
		}
	

}
