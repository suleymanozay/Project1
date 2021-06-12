package com.syntax.steps;

import java.util.List;
import java.util.Map;

import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class ContacDetailsSteps extends CommonMethods {

	@Given("I click on Contact Details  link")
	public void i_click_on_Contact_Details_link() {
		click(dash.contactDetails);

	}

	@When("I click on  contact details Edit button")
	public void i_click_on_contact_details_Edit_button() {
		click(contact.saveEditBtn);
	}

	@Then("I am able to add Employee Contact Details")
	public void i_am_able_to_add_Employee_Contact_Details(DataTable contactTable) {
		List<Map<String, String>> contactList = contactTable.asMaps();
		for (Map<String, String> map : contactList) {
			sendText(contact.street1, map.get("Street1"));
			sendText(contact.street2, map.get("Street2"));
			sendText(contact.city, map.get("City"));
			sendText(contact.state, map.get("State"));
			sendText(contact.zip, map.get("Zip"));
			selectDdValue(contact.country, map.get("Country"));
			sendText(contact.homePhone, map.get("HomePhone"));
			sendText(contact.mobile, map.get("Mobile"));
			sendText(contact.workPhone, map.get("WorkPhone"));
			sendText(contact.wEmail, map.get("WorkEmail"));
			sendText(contact.otherEmail, map.get("OtherEmail"));
		}
	}

	@Then("I click on contact save button")
	public void i_click_on_contact_save_button() {
		click(contact.saveEditBtn);
		takeScreenshot("contact");

	}

}
