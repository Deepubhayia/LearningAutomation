package com.TestRunner.com;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import io.cucumber.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(features={"src/test/java/com/FeatureFiles/com"}, 
glue= {"com/StepDefination/com"}, 
monochrome= true,
tags= {"@Regression"},
plugin= {"pretty", 
		" html:target/cucumber-reports", 
		/*"junit:target/cucumber-report-report/cucumber.xml",*/
		"json:target/cucumber-report/cucumber.json",
			})

public class TestRunner{
	
}

