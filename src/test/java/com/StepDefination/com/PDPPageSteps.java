package com.StepDefination.com;

import com.BaseClass.com.BaseClass;
import com.pageObjects.com.CartPage;
import com.pageObjects.com.PDPPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class PDPPageSteps extends BaseClass{
	PDPPage pdpPage = new PDPPage();	//object of pdp page
	CartPage cartPage = new CartPage();
	
	
	@Given("User Navigate to PDP Page")
	public void userNavigateToPDPPage() {
		pdpPage.userNavigateToPDPPage();
	}
	
	@Given("Click on add to basket button")
	public void clickOnAddToCartButton() {
		pdpPage.productAddToBasketButton();
	}
	
	@Then("User click on view basket button")
	public void clickOnViewBasketButtonOnPDPPage() {
	    cartPage.openBasketClickOnViewBasketButton();
	}
	@Then("User click on Proceed to checkout")
	public void clickOnProceedToCheckoutButton() {
		
	}
}

