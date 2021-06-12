package com.syntax.steps;

import java.util.List;
import java.util.Map;
import com.syntax.utils.CommonMethods;
import com.syntax.utils.ConfigsReader;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class JobAndEmergencySteps extends CommonMethods {
	public static String emId;

	@Given("I am logged into HRMS as an Admin")
	public void i_am_logged_into_HRMS_as_an_Admin() {
		login.login(ConfigsReader.getProperties("username"), ConfigsReader.getProperties("password"));

	}

	@Given("I navigated to Add Employe Page")
	public void i_navigated_to_Add_Employe_Page() {
			dash.navigateToAddEmployee();
	}

	@Given("I add {string}, {string}  and {string}")
	public void i_add_and(String string, String string2, String string3) {
		sendText(addEmp.firstName, string);
		sendText(addEmp.middleName, string2);
		sendText(addEmp.lastName, string3);

	}

	@Given("I click on Save")
	public void i_click_on_Save() {
		click(addEmp.saveBtn);

	}

	@Given("I pick Employee Id")
	public void i_pick_Employee_Id() {
		emId = person.empID.getAttribute("value");
		

	}

	@Given("I navigated Employee List")
	public void i_navigated_Employee_List() {
		dash.navigateToEmployeList();
	}

	@Given("I enter valid Employee Id")
	public void i_enter_valid_Employee_Id() throws InterruptedException {
		String value=emId;
		Thread.sleep(1500);
		sendText(employeeList.idSrch, value);
	}

	@Given("I click search button")
	public void i_search_button() {
		click(employeeList.srcBtn);

	}

	@Given("I click on Employee from table")
	public void click_on_Employee_from_table() throws InterruptedException {
		Thread.sleep(1500);
		if (employeeList.idOntable.getAttribute("value").equals(emId)) {
			click(employeeList.empOnTable);
		} else {
			System.out.println("Id is not found");
		}
	}

	@Given("I click on job link")
	public void i_click_on_job_link() {
		click(person.jobLink);
	}

	@When("I click on  Edit")
	public void i_click_on_Edit() {
		click(job.saveEditBtn);
	}

	@Then("I am able to add Employee Job Details")
	public void then_I_am_able_to_add_Employee_Job_Details(DataTable addJobDetails) {
		List<Map<String, String>> jobList = addJobDetails.asMaps();
		for (Map<String, String> map : jobList) {
			selectDdValue(job.jobTitle, map.get("JobTitle"));
			selectDdValue(job.employmentStatus, map.get("EmploymentStatus"));
			selectDdValue(job.jobCategry, map.get("JobCategory"));
			sendText(job.joinedDate, map.get("JoinedDate"));
			
			if(job.subUnit.isSelected()) {
				selectDdValue(job.subUnit, map.get("SubUnit"));
			}else {
				System.err.println("Sub Unit drop down is empty");
			}
		
			if(job.location.isSelected()) {
			selectDdValue(job.location, map.get("Location"));
			}else {
				System.err.println(" Location drop down is empty");
			}
			sendText(job.startDate, map.get("StartDate"));
			sendText(job.endDate, map.get("EndDate"));
			sendText(job.contractFile, map.get("ContractDetails"));

		}

	}

	@Then("I click on save")
	public void i_click_on_save() {
		click(job.saveEditBtn);
	}

	@Given("I navigated Emergency Contacts")
	public void i_click_on_Emergency_Contacts() {
		click(person.emergencyLink);

	}

	@When("I click on  Add")
	public void i_click_on_Add() {
		click(emergency.addBtn);
	}

	@Then("I am able to add Employee Emergency Contacts")
	public void I_am_able_to_add_Employee_Emergency_Contacts(DataTable addEmergencyContct) {
		List<Map<String, String>> emergencyList = addEmergencyContct.asMaps();
		for (Map<String, String> map : emergencyList) {
			sendText(emergency.name, map.get("Name"));
			sendText(emergency.relationShip, map.get("RelationsShip"));
			sendText(emergency.homePhone, map.get("HomeTelephone"));
			sendText(emergency.mobilePhone, map.get("Mobile"));
			sendText(emergency.workPhone, map.get("WorkTelephone"));

		}
	}

	@Then("I click on emergency contact save button")
	public void IClickSaveBtn() {
		click(emergency.saveBtn);
	}

}
