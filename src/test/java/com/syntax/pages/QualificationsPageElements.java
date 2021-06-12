package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;

public class QualificationsPageElements {
	
	@FindBy(id ="addWorkExperience")
	public WebElement addWExBtn;
	
	@FindBy(id ="experience_employer")
	public WebElement company;
	
	@FindBy(id ="experience_jobtitle")
	public WebElement jobTitle;
	
	@FindBy(id ="experience_from_date")
	public WebElement from;
	
	@FindBy(id ="experience_to_date")
	public WebElement to;
	
	@FindBy(id ="experience_comments")
	public WebElement comment;
	
	@FindBy(id ="btnWorkExpSave")
	public WebElement saveWexBtn;
	
	@FindBy(id ="addSkill")
	public WebElement addSkillBtn;
	
	@FindBy(id ="skill_code")
	public WebElement skills;
	
	@FindBy(id ="skill_years_of_exp")
	public WebElement skillYears;
	
	@FindBy(id ="skill_comments")
	public WebElement skillComment;
	
	@FindBy(id ="btnSkillSave")
	public WebElement saveSkillBtn;
	
	@FindBy(id ="addLanguage")
	public WebElement addLangBtn;
	
	@FindBy(id ="language_code")
	public WebElement lang;
	
	@FindBy(id ="language_lang_type")
	public WebElement fluency;
	
	@FindBy(id ="language_competency")
	public WebElement competency;
	
	@FindBy(id ="language_comments")
	public WebElement langComment;
	
	@FindBy(id ="btnLanguageSave")
	public WebElement saveLangBtn;
	
	@FindBy(id ="addEducation")
	public WebElement addEduBtn;
	
	@FindBy(id ="education_code")
	public WebElement eduLevel;
	
	@FindBy(id ="education_institute")
	public WebElement eduIns;
	
	@FindBy(id ="education_major")
	public WebElement eduMajor;
	
	@FindBy(id ="education_year")
	public WebElement eduYear;
	
	@FindBy(id ="education_gpa")
	public WebElement eduGpa;
	
	@FindBy(id ="education_start_date")
	public WebElement eduStart;
	
	@FindBy(id ="education_end_date")
	public WebElement eduEnd;
	
	@FindBy(id ="btnEducationSave")
	public WebElement eduSaveBtn;
	
	
	
	
	

	public QualificationsPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}
}
