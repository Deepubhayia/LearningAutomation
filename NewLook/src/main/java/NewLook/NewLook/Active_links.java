package NewLook.NewLook;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

import org.openqa.selenium.By;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Active_links {
	
	public static void main(String[] args) {
		
		String HomePage = "https://test-sc10.aspendental.com/";
		String url ="";
		HttpsURLConnection huc = null;
		int respCode= 200;
		
		
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.get(HomePage);
		
		List<WebElement>links= driver.findElements(By.tagName("a"));
		System.out.println(links.size());
				
		Iterator<WebElement> it = links.iterator();
		while(it.hasNext()) {
			url = it.next().getAttribute("href");
			System.out.println(url);
			if(url == null || url.isEmpty()) {
				System.out.println(url + "url is null");
				
				continue;
			}
			if (!url.startsWith(HomePage)) {
				continue;
			}
			 try {
			huc =(HttpsURLConnection)(new URL(url).openConnection());
			
			huc.setRequestMethod("GET");
			huc.connect();
			respCode = huc.getResponseCode();
			if(respCode>=400) {
				System.out.println(url+"is broken");
						}
			 } catch (IOException e) {
				  // TODO Auto-generated catch block
				  e.printStackTrace();
				  }	
		}
	driver.quit();
	}

}
