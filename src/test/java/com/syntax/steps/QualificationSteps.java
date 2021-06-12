package com.syntax.steps;

import java.util.List;
import java.util.Map;
import com.syntax.utils.CommonMethods;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class QualificationSteps extends CommonMethods {

	@Given("I click Qualifications link")
	public void i_click_Qualifications_link() {
		click(person.qualificationLink);

	}

	@When("I click on Work Experience add button")
	public void i_click_on_Work_Experience_add_button() {
		click(qualifications.addWExBtn);

	}

	@Then("I am able to add Work Experience")
	public void i_am_able_to_add_Work_Experience(DataTable workExTable) {
		List<Map<String, String>> workExpList = workExTable.asMaps();
		for (Map<String, String> map : workExpList) {
			sendText(qualifications.company, map.get("Company"));
			sendText(qualifications.jobTitle, "JobTitle");
			sendText(qualifications.from, map.get("From"));
			sendText(qualifications.to, map.get("To"));
			sendText(qualifications.comment, map.get("Comment"));
		}

	}

	@Then("I click on work experience save button")
	public void i_click_on_work_experience_save_button() {
		click(qualifications.saveWexBtn);
		takeScreenshot("work");
	}

	@Then("I click on Skills add button")
	public void i_click_on_Skills_add_button() {
		click(qualifications.addSkillBtn);
	}

	@Then("I am able to add Skill")
	public void i_am_able_to_add_Skill(DataTable skillTable) {
		List<Map<String, String>> skillList = skillTable.asMaps();
		for (Map<String, String> map : skillList) {
			selectDdValue(qualifications.skills, map.get("Skill"));
			sendText(qualifications.skillYears, map.get("YearOfExpr"));
			sendText(qualifications.skillComment, map.get("Comment"));
		}
	}

	@Then("I click on skill save button")
	public void i_click_on_skill_save_button() {
		click(qualifications.saveSkillBtn);
		takeScreenshot("skill");
	}

	@Then("I click on Languages add button")
	public void i_click_on_Languages_add_button() {
		click(qualifications.addLangBtn);
	}

	@Then("I am able to add Language")
	public void i_am_able_to_add_Language(DataTable langTable) {
		List<Map<String, String>> langList = langTable.asMaps();
		for (Map<String, String> map : langList) {
			selectDdValue(qualifications.lang, map.get("Language"));
			selectDdValue(qualifications.fluency, map.get("Fluency"));
			selectDdValue(qualifications.competency, map.get("Competency"));
			sendText(qualifications.langComment, map.get("Comment"));
		}
	}

	@Then("I click on language save button")
	public void i_click_on_language_save_button() {
		click(qualifications.saveLangBtn);
		takeScreenshot("lang");
	}

	@Then("I click on Education add button")
	public void i_click_on_Education_add_button() {
		click(qualifications.addEduBtn);
	}

	@Then("I am able to add Education")
	public void i_am_able_to_add_Education(DataTable eduTable) {
		List<Map<String, String>> eduList = eduTable.asMaps();
		for (Map<String, String> map : eduList) {
			selectDdValue(qualifications.eduLevel, map.get("Level"));
			sendText(qualifications.eduIns, map.get("Institute"));
			sendText(qualifications.eduMajor, map.get("Major"));
			sendText(qualifications.eduYear, map.get("Year"));
			sendText(qualifications.eduGpa, map.get("GPA/Score"));
			sendText(qualifications.eduStart, map.get("StartDate"));
			sendText(qualifications.eduEnd, map.get("EndDate"));
		}
	}
		
	@Then("I click on Education save button")
		public void i_click_on_Education_save_button() {
		click(qualifications.eduSaveBtn);
		takeScreenshot("edu");
		 }


	}


