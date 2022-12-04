
package com.StepDefination.com;

import com.BaseClass.com.BaseClass;
import com.pageObjects.com.CartPage;

import io.cucumber.java.en.*;

public class CartPageSteps extends BaseClass {
	CartPage cartPage = new CartPage();

	
	
	@Then("User verify the Mini Cart Page Title")
	public void verifyMiniCartTitle() {
		cartPage.verifyMiniCartTitle();
	}
	
	@Then("Verify mini basket count")
	public void verifyMiniBasketCount() {
		cartPage.countItemInBasket();
	}
	
	@And ("Check the cart is empty")
	public void checkTheCartIsEmpty() {
		cartPage.emptyCart();
	
	}
	
	@Then ("User open basket click on view basket button")
	public void openBasketClickOnViewBasketButton() {
		
		cartPage.openBasketClickOnViewBasketButton();
		
	}

}
