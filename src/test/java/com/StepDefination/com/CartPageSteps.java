
package com.StepDefination.com;

import static org.testng.Assert.assertEquals;

import org.junit.Assert;

import com.BaseClass.com.BaseClass;
import com.pageObjects.com.CartPage;
import com.pageObjects.com.PDPPage;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class CartPageSteps extends BaseClass {
	CartPage cartPage = new CartPage();
	PDPPage pdpPage = new PDPPage();
	
	@Then("User verify the Mini Cart Page Title")
	public void verifyMiniCartTitle() {
		cartPage.verifyMiniCartTitle();
	}
	
	@Then("Verify mini basket count {string}")
	public void verifyMiniBasketCount(String basketItem) {
		cartPage.countItemInBasket(basketItem);
	}
	
	@And("Check the cart is empty")
	public void checkTheCartIsEmpty() {
		cartPage.checkTheCartIsEmpty();
		cartPage.emptyCart();
	}
	
	
	@Then("User open basket click on view basket button")
	public void openBasketClickOnViewBasketButton() {
		cartPage.clickOnMiniCartButton();
		cartPage.openBasketClickOnViewBasketButton();	
	}
	
	@Then("If cart is then user verify the empty cart message is displayed or not")
	public void verifyEmptyCartTMessage() {
		cartPage.emptyCartTextVerify();
	}
	
	@Then("User verify product is in stock {string} is displayed")
	public void verifyInStockMessageIsDisplayed(String inStock) {
	   
		boolean inStockExpectedText= driver.getPageSource().toLowerCase().contains(prop.getProperty(inStock).toLowerCase());
		assertEquals(inStockExpectedText, true);
	}
}
