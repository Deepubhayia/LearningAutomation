package NewLook.NewLook;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class ActionsClass {
	public static void main(String[] args) throws InterruptedException {

		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();


		driver.manage().window().maximize();

		driver.get("https://www.newlook.com/uk");

		WebElement mouseHover = driver.findElement(By.xpath("(//div[@class='masthead-account__wrapper'])/a"));

		Actions CreateAccount = new Actions(driver);
		CreateAccount.moveToElement(mouseHover).build().perform();
		mouseHover.click();

		Thread.sleep(5000);

		driver.close();
	}

}
