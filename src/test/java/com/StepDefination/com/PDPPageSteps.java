package com.StepDefination.com;

import com.BaseClass.com.BaseClass;
import com.pageObjects.com.PDPPage;

import io.cucumber.java.en.Given;

public class PDPPageSteps extends BaseClass{
	PDPPage pdpPage = new PDPPage();	//object of pdp page
	
	@Given("User Navigate to PDP Page")
	public void userNavigateToPDPPage() {
		pdpPage.userNavigateToPDPPage();
	}
	
	@Given("Click on add to cart button")
	public void clickOnAddToCartButton() {
		pdpPage.productAddToCartButton();
	}
}
