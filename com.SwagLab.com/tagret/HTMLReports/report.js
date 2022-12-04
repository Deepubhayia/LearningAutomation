$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Basket.feature");
formatter.feature({
  "name": "Verify the basket functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Login into applicatio with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.StepDefination.com.HomePageSteps.userLaunchTheSiteUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "com.StepDefination.com.HomePageSteps.allowCookiesPopupAndAgeConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enter Username and Password",
  "keyword": "And "
});
formatter.match({
  "location": "com.StepDefination.com.LoginPageSteps.userEnterUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Verify user is able to add the product into the basket from PDP page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User Search the Product",
  "keyword": "And "
});
formatter.match({
  "location": "com.StepDefination.com.HomePageSteps.searchTheProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Navigate to PDP Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.StepDefination.com.PDPPageSteps.userNavigateToPDPPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "com.StepDefination.com.PDPPageSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify the Mini Cart Page Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.StepDefination.com.CartPageSteps.verifyMiniCartTitle()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify mini basket count",
  "keyword": "Then "
});
formatter.match({
  "location": "com.StepDefination.com.CartPageSteps.verifyMiniBasketCount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User open basket click on view basket button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.StepDefination.com.CartPageSteps.openBasketClickOnViewBasketButton()"
});
formatter.result({
  "status": "skipped"
});
});