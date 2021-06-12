package com.syntax.steps;

import java.util.List;
import java.util.Map;

import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class ModifyPDetailsSteps extends CommonMethods{
	
	@When("I click on personal details edit button")
	public void i_click_on_personal_details_edit_button() {
		 click(addEmp.edit);
	}
	
	@Then("I am able to modify personal details")
	public void i_am_able_to_modify_personal_details(DataTable dataTable)throws InterruptedException {
		
	   List<Map<String, String>> list=dataTable.asMaps();
	   for (Map<String, String> modify:list) {
		  
		   sendText(addEmp.licenNo, modify.get("DriverLicense"));
		   sendText(addEmp.expDate, modify.get("ExpirationDate"));	
		   sendText(addEmp.ssn, modify.get("SSN"));
		   sendText(addEmp.sin, modify.get("SIN"));
		   clickRadio(addEmp.gender, modify.get("Gender"));
		   
		   selectDdValue(addEmp.maritalstatus, modify.get("MaritalStatus"));
		   selectDdValue(addEmp.nationality, modify.get("Nationality"));
		   sendText(addEmp.DOB, modify.get("DOB"));
		
	   }

	}

	@Then("I click on personal detail save button")
	public void i_click_on_personal_detail_save_button() {
		 click(addEmp.edit);
	}


	
	
	
}
