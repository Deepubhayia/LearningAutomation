
Feature: Check the login functionality
  	@test1
     Scenario: Login into application with valid credentials
     Given User Launch the site URL 
     And Allow cookies popup and age confirmation
     And User hover mouse to account and click on Sign in Link 
     And User Enter Username and Password
     
     @test1
     Scenario Outline: Login into application with invalid credentials
     Given User Launch the site URL 
     And Allow cookies popup and age confirmation
     And User hover mouse to account and click on Sign in Link 
     And User Enter invalid details "<UserName>" and "<Password>"
     Then Click on Login Button
     
     Examples:
     |UserName								|Password|
     |Deepak									|Test@12345|
     |test19@mailinator.com		|Test@1234|
     |test19@gmail.com				|Test@123456|
     
     @test1
     Scenario: Verify the invalid message in login Page
     Given User Launch the site URL 
     And Allow cookies popup and age confirmation
     And User hover mouse to account and click on Sign in Link 
     And User Enter inavlid "deepakchauhan@gmail.com" and "Deepak1122"
     Then Click on Login Button
     Then User verify the error message