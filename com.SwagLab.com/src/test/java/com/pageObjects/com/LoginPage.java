package com.pageObjects.com;

import java.io.IOException;

import org.openqa.selenium.By;
import org.testng.Assert;

import com.BaseClass.com.BaseClass;

public class LoginPage extends BaseClass {

	public static By emailAddress = By.xpath("//input[@id='email']");
	public static By password = By.xpath("//input[@name='login[password]']");
	public static By singInButton = By.xpath("(//button[@id='send2'])[1]");
	public static By alertMessage = By.xpath("//div[@role='alert']");

	public void enterSignInDetails() {

		waitForExpectedElement(emailAddress, 10).sendKeys(prop.getProperty("username"));

		waitForExpectedElement(password, 10).sendKeys(prop.getProperty("password"));

		try {
			takeScreenSort();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		waitForExpectedElement(singInButton, 5).click();

	}
	public void enterInvalidSignInDetails(String UserName, String PassWord) throws Throwable {

		Thread.sleep(5000);

		waitForExpectedElement(emailAddress,10).sendKeys(UserName);
		waitForExpectedElement(password,10).sendKeys(PassWord);

	}
	public void clickOnLoginButton() {

		try {
			waitForExpectedElement(singInButton, 10).click();

		}
		catch (Exception e) {
			clickElementByJSExecutor(singInButton);
			e.printStackTrace();
		}
	}

	public void getAlertMessage() {
		String actualMessage =  waitForExpectedElement(alertMessage, 10).getText();
		System.out.println(actualMessage);
		String expectedMessage = prop.getProperty("alertMessage");
		Assert.assertEquals(expectedMessage, actualMessage);
	}
}
