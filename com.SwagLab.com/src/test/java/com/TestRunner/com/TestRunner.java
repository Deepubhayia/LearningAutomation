package com.TestRunner.com;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(features= "src/test/java/com.Feature.com" , glue= "com.StepDefination.com", monochrome= true, 
dryRun=false,
tags= {"@test1"},
plugin= {"pretty", "html:tagret/HTMLReports", 
		"junit:target/cucumber-report-report/cucumber.xml",
		"json:tagret/cucumber-report/cucumber.json",
		"rerun:target/rerun.txt"})

public class TestRunner {

}
