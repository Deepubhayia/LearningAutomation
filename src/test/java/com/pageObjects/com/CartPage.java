package com.pageObjects.com;

import org.testng.Assert;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;

import com.BaseClass.com.BaseClass;

public class CartPage extends BaseClass {

	public By basketTitle = By.xpath("//strong[@class='text']//span");
	public By itemInBasket = By.xpath("//span[@class='counter-number']");
	public By clickOnCartButton = By.xpath("//a[@class='action showcart']");
	public By deleteCartItems = By.xpath("//i[@class='material-icons']");
	public By confirmDeleteCartItem = By.xpath("//button[@class='action-primary action-accept']");
	public By closeMiniBasket = By.xpath("//button[@id='btn-minicart-close']");
	public By cartAmount = By.xpath("//span[@class='price']");
	public By viewBasketbtn = By.xpath("//a[@class='action viewcart primary']");
	public By emptyCartText = By.xpath("//strong[@class='subtitle empty']");

	public void verifyMiniCartTitle() {

		String originalTitle = waitForExpectedElement(basketTitle, 5).getText();
		String expectedTitle = "YOUR BASKET";
		Assert.assertEquals(originalTitle,expectedTitle);

	}

	public void countItemInBasket() {
		String basketCounter = waitForExpectedElement(itemInBasket, 10).getText(); // getText will return string value in basket
		Assert.assertEquals(basketCounter, "0");
	}

	public boolean checkTheCartIsEmpty() {

		waitForExpectedElement(cartAmount, 10);
		return waitForExpectedElement(cartAmount, 10).getText().contains("0.00");
	}

	public boolean emptyCart() {
		if (!checkTheCartIsEmpty()) { // if basket is not empty

			if (!waitForExpectedElement(cartAmount, 10).getText().contains("£0.00")) {
				waitForExpectedElement(clickOnCartButton, 10).click();

				while (driver.findElements(deleteCartItems).size() != 0) {
					waitForExpectedElement(deleteCartItems, 10).click();
					waitForExpectedElement(confirmDeleteCartItem, 10).click();

					clickElementByJSExecutor(closeMiniBasket);
				}
			}
		}
		return true;
	}

	public void openBasketClickOnViewBasketButton() {
		waitForExpectedElement(clickOnCartButton, 10).click();
		waitForExpectedElement(viewBasketbtn,10).click();

	}
	
	public void emptyCartTextVerify() {
		
		waitForExpectedElement(clickOnCartButton, 10).click();
		String actualEmptyCartMsg = waitForExpectedElement(emptyCartText,10).getText();
		assertEquals(actualEmptyCartMsg.contains("You have no items in your basket."), true);
	}
}