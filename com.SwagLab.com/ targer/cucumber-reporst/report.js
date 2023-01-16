$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "Check the login functionality",
  "description": "",
  "id": "check-the-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login into application with valid credentials",
  "description": "",
  "id": "check-the-login-functionality;login-into-application-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Enter Username and Password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Check login functionality with different Usernames and Password",
  "description": "",
  "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter invalid data \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 18,
      "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;1"
    },
    {
      "cells": [
        "test19@mailinator.com",
        "Test@123"
      ],
      "line": 19,
      "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;2"
    },
    {
      "cells": [
        "test19@gmail.com",
        "Test@123456"
      ],
      "line": 20,
      "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;3"
    },
    {
      "cells": [
        "test19@gmail.com",
        ""
      ],
      "line": 21,
      "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;4"
    },
    {
      "cells": [
        "",
        "Test@123456"
      ],
      "line": 22,
      "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;5"
    },
    {
      "cells": [
        "deepak@gmail.com",
        "Test@123"
      ],
      "line": 23,
      "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Check login functionality with different Usernames and Password",
  "description": "",
  "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter invalid data \"test19@mailinator.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 20,
  "name": "Check login functionality with different Usernames and Password",
  "description": "",
  "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter invalid data \"test19@gmail.com\" and \"Test@123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "Check login functionality with different Usernames and Password",
  "description": "",
  "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter invalid data \"test19@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "Check login functionality with different Usernames and Password",
  "description": "",
  "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter invalid data \"\" and \"Test@123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 23,
  "name": "Check login functionality with different Usernames and Password",
  "description": "",
  "id": "check-the-login-functionality;check-login-functionality-with-different-usernames-and-password;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter invalid data \"deepak@gmail.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 26,
  "name": "Verify the username error message when username is blank",
  "description": "",
  "id": "check-the-login-functionality;verify-the-username-error-message-when-username-is-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Enter incorrect data of \"USERNAME_1.key\" and \"PASSWORD_1.key\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User verify the invalid message \"BLANK_EMAIL_ERROR_MESSAGE\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 34,
  "name": "Verify the password error message when password is blank",
  "description": "",
  "id": "check-the-login-functionality;verify-the-password-error-message-when-password-is-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Enter incorrect data of \"USERNAME_2.key\" and \"PASSWORD_2.key\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User verify the invalid message \"BLANK_PASSWORD_ERROR_MESSAGE\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 42,
  "name": "Verify the username error message when username is incorrect format",
  "description": "",
  "id": "check-the-login-functionality;verify-the-username-error-message-when-username-is-incorrect-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User Enter incorrect data of \"USERNAME_3.key\" and \"PASSWORD_3.key\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User verify the invalid message \"USER_NAME_INCORRECT_FORMAT_ERROR_MESSAGE\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 50,
  "name": "Verify the username error message when both username and password is incorrect format",
  "description": "",
  "id": "check-the-login-functionality;verify-the-username-error-message-when-both-username-and-password-is-incorrect-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User Enter incorrect data of \"USERNAME_4.key\" and \"PASSWORD_4.key\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User verify the invalid message \"USERNAME_AND_PASSWORD_INCORRECT_ERROR_MESSAGE\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("MyAccountPage.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the features of My Account Page",
  "description": "",
  "id": "verify-the-features-of-my-account-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "MYAC_1001 My Account - Edit Account and Verify the account items text",
  "description": "",
  "id": "verify-the-features-of-my-account-page;myac-1001-my-account---edit-account-and-verify-the-account-items-text",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Enter Username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Hover the mouse to account button and select the MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Assert that \"ACCOUNT_OVERVIEW_TEXT.key\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Assert that \"EDIT_DETAILS_BUTTON.key\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Assert that \"CHANGE_PASSWORD_BUTTON.key\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Assert that \"EDIT_ADDRESSESS_BUTTON.key\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on edit details button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Assert that \"FIRST_NAME_INPUT.key\" is present",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Assert that \"LAST_NAME_INPUT.key\" is present",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Assert that \"DOB_INPUT.key\" is present",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Assert that \"SAVE_CHANGES_BUTTON.key\" is displayed",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 33,
  "name": "MYAC_1002 My Account - Edit Account and Verify the button is enabled",
  "description": "",
  "id": "verify-the-features-of-my-account-page;myac-1002-my-account---edit-account-and-verify-the-button-is-enabled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User Launch the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Allow cookies popup and age confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Enter Username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Hover the mouse to account button and select the MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify that edit button is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Verify that change password button is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify that edit address button is enabled",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});