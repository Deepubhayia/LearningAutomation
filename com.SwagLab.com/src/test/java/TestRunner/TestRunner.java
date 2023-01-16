package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
	
	@CucumberOptions(features="src/test/java/com/Feature/com",
	
	monochrome= true,
	tags="@Regression",
	plugin= {"pretty", 
			"html: targer/cucumber-reports",
			"json:target/cucumber-report/cucumber.json" },
	glue="com.StepDefination.com")

public class TestRunner {
		

}