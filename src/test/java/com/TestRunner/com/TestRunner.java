package com.TestRunner.com;

import org.junit.runner.RunWith;

import com.BaseClass.com.BaseClass;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)

@io.cucumber.junit.CucumberOptions(features={"src/test/java/com/FeatureFiles/com"}, 
glue= {"com.StepDefination.com"}, 
monochrome= true,
tags= {"@Regression"},
plugin= {/*"pretty", " html:target/HTMLReports", 
		"junit:target/cucumber-report-report/cucumber.xml",*/
		"json:target/cucumber-report/cucumber.json",
			})

public class TestRunner{
	

}
