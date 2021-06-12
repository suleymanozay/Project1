package com.syntax.steps;

import java.util.List;
import java.util.Map;

import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class SalarySteps extends CommonMethods {

	@Given("I click on Salary link")
	public void i_click_on_Salary_link() {
		click(person.salaryLink);

	}

	@When("I click on  Salary Add")
	public void i_click_on_Salary_Add() {
		click(salary.addSalaryBtn);
	}

	@Then("I am able to add Employee Salary Details")
	public void i_am_able_to_add_Employee_Salary_Details(DataTable salaryTable) {
		List<Map<String, String>> salaryList = salaryTable.asMaps();
		for (Map<String, String> map : salaryList) {
			selectDdValue(salary.payGrade, map.get("PayGrade"));
			sendText(salary.salaryCompo, map.get("SalaryComponents"));
			selectDdValue(salary.payFreq, map.get("PayFrequency"));
			selectDdValue(salary.currency, map.get("Currency"));
			sendText(salary.salAmaount, map.get("Amount"));
			sendText(salary.comments, map.get("Comments"));

		}
	}

	@When("I click on Add Direct Deposit Details checkbox")
	public void i_click_on_Add_Direct_Deposit_Details_checkbox() {
		click(salary.addDepChcBx);
	}

	@Then("I am able to add Deposit Account Details")
	public void i_am_able_to_add_Deposit_Account_Details(DataTable depositTable) {
		List<Map<String, String>> depositList = depositTable.asMaps();
		for (Map<String, String> map : depositList) {
			sendText(salary.accntNum, map.get("AccountNumber"));
			selectDdValue(salary.accntType, map.get("AccountType"));
			sendText(salary.routeNum, map.get("RoutingNumber"));
			sendText(salary.diramount, map.get("Amount"));
		}
	}

	@Then("I click on Salary Save button")
	public void i_click_on_Salary_Save_button() {
		click(salary.btnSalSave);
		takeScreenshot("salary");
	}

}
