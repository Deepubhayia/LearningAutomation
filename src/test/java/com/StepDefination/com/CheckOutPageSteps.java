package com.StepDefination.com;

import org.junit.Assert;

import com.BaseClass.com.BaseClass;

import io.cucumber.java.en.Then;


public class CheckOutPageSteps extends BaseClass {

	@Then("verify user move to login page {string} displayed")
	public void signInAndCheckOutMessage(String signInText){

		boolean expectedLoginText = driver.getPageSource().toLowerCase().contains(prop.getProperty(signInText).toLowerCase());
		Assert.assertEquals(expectedLoginText, true);	
	}
}
