package com.syntax.steps;

import java.util.List;
import java.util.Map;

import com.syntax.utils.CommonMethods;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddDependentsSteps extends CommonMethods {

	
	@Given("I click on Dependents link")
	public void i_click_on_Dependents_link() {
		click(person.dependentsLink);
	}
	@When("I click on depents Add")
	public void i_click_on_Add() {
		click(addDep.addBtn);
	}

	@Then("I am able to add Employee Dependents")
	public void i_am_able_to_add_Employee_Dependents(DataTable addDependentsDetails) {
		List<Map<String, String>>depList = addDependentsDetails.asMaps();
		for (Map<String, String> map : depList) {
			
			sendText(addDep.depName, map.get("Name"));
			selectDdValue(addDep.depRelation, map.get("Relationship"));
			sendText(addDep.depDOB, map.get("Date of Birth"));
		}
	}
			
			@Then("I click on  depents save")
			public void i_click_on_save() {
				click(addDep.saveBtn);
		}
	}

	


