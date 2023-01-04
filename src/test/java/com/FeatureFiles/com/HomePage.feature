
Feature: Verify the HomePage Elements 

Background: 
 Scenario: Login into application with valid credentials
     Given User Launch the site URL 
     And Allow cookies popup and age confirmation
     And User Enter Username and Password
     
 @Regression   
 Scenario: Verify homepage links
 Given User click on Shop Devices Link
 Then User click on Explore Vuse Go
 And Click on add to cart button
 Then User open basket click on view basket button
 		
 