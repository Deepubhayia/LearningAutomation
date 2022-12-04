package com.StepDefination.com;

import com.BaseClass.com.BaseClass;
import com.pageObjects.com.HomePage;
import com.pageObjects.com.LoginPage;

import io.cucumber.java.en.*;

public class LoginPageSteps extends BaseClass {

	HomePage homepage = new HomePage(); // object of HomePage
	LoginPage loginpage = new LoginPage();

	
	@And ("User hover mouse to account and click on Sign in Link")
	public void userHoverMouseToAccountClickOnSignInLink() throws InterruptedException {
		homepage.userClickOnSignInLink();
	}
	
	@Given("User Enter Username and Password")
	public void userEnterUsernameAndPassword() throws InterruptedException {
		
		loginpage.enterSignInDetails();

	}
	
	@And("User Enter invalid details {string} and {string}")
	public void userEnterInvalidUsernameAndPassword(String UserName, String PassWord) throws Throwable {
		loginpage.enterInvalidSignInDetails(UserName, PassWord);
		
	}
	
	@Then ("Click on Login Button")
	public void userClickOnLoginButton() {
		loginpage.clickOnLoginButton();
		
	}
	
	@And("User Enter inavlid {string} and {string}")
	public void enterInvalidUsernameAndPassword(String value1 , String value2) throws Throwable {
		
		loginpage.enterInvalidSignInDetails(value1, value2);
	
	}
	
	
    @Then ("User verify the error message")
    public void verifyTheErrorMessage() {
    	loginpage.getAlertMessage();
    }
	
	

}
