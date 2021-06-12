package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.bases.BaseClass;
import com.syntax.utils.CommonMethods;


public class LoginPageElements extends CommonMethods{
	
	
	@FindBy(name = "txtUsername")
	public WebElement userName;
	
	@FindBy(css = "input#txtPassword")
	public WebElement password;
	
	@FindBy(css="input[name='Submit']")
	public WebElement loginBtn;
	
	
	public LoginPageElements() {
	PageFactory.initElements(BaseClass.driver, this);
	}
	
	public void login(String uid, String pwd) {
		sendText(userName, uid);
		sendText(password, pwd);
		click(loginBtn);
	}
	

}
