

Feature: Verify the Logo of the Pages
  
  
 Background: 
 Scenario: Login into application with valid credentials
     Given User Launch the site URL 
     And Allow cookies popup and age confirmation
     And User Enter Username and Password

  @Regression
  Scenario: Verify the Logo is displayed on Homepage
    		Then user verify the website logo is displayed
  
