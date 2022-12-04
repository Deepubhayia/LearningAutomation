package com.pageObjects.com;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import com.BaseClass.com.BaseClass;

public class HomePage extends BaseClass {

	public By AllowCookies = By.xpath("//button[@id='onetrust-accept-btn-handler']");
	public By AllowAge = By.xpath("//button[@id='btn-entry-age-allow']");
	public By accoutnLink = By.xpath("//span[@class='icon-account']");
	public By signInLink = By.cssSelector("div.userLoggout>div > div > div > ul > li:nth-child(1) > a");
	public By searchProduct = By.xpath("//input[@id='search']");

	public void selectAllCookiesAndAcceptAge() {
		waitForExpectedElement(AllowCookies, 10).click();
		waitForExpectedElement(AllowAge, 10).click();

	}

	public void userClickOnSignInLink() throws InterruptedException {

		waitForExpectedElement(accoutnLink, 10).click();
		waitForExpectedElement(signInLink, 10).click();

	}

	public void searchTheProduct() {

		waitForExpectedElement(searchProduct, 20).sendKeys("vuse");
		waitForExpectedElement(searchProduct, 10).sendKeys(Keys.ENTER);
	}

	public void clickShopDevicesLink() {
		WebElement shopDevice = driver.findElement(By.xpath("//li[@class='level0 category-item icon-devices first']"));
		shopDevice.click();
	}

	public void clickExploreVuseGo() {

	}
}