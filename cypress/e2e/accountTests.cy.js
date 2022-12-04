/// <reference types="cypress" />

import {CREATE_ACCOUNT_HEADER_TEXT,
        ACCOUNT_URL_TEXT, 
        MESSAGE_SUCCESSFULL_REGISTERED,
        fakeFirstName,fakeLastName,fakeEmailAddress,
}
 from "../support/constant.js";

import { beforeEach } from "mocha";

import { AccountBase } from "../utilities/accountBase.js";
const accountBase = new (AccountBase);
import { Locators } from "../support/locators.js";
const locators = new (Locators);

describe('Creating Account Positive Tests', () => {
  
  beforeEach(() => {
    //Open the website under testing
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it('1.Create New Account', () => {
    //Click create account button
    cy.click_CreateAccountBtn()
    // Check the URL of the Account page
    cy.url().should('include', ACCOUNT_URL_TEXT)
    // Check the Header of the Account page
    cy.contains(CREATE_ACCOUNT_HEADER_TEXT).and('be.visible')
    // Populating all fields for registration
    accountBase.fillRegistationForm()
    // Check welcome messages and box section headers
    cy.validate_SuccessMessageAndBoxSection()
    // Check box content for customer name and email
    locators.ele_AccountPage.box_Content()
        .should('have.text',"\n"+fakeFirstName +" "+ fakeLastName+"\n"+fakeEmailAddress+"\n")
        .and('be.visible')
    // Check the Information for the created user on panel header
    cy.contains('Welcome,' + " " + fakeFirstName + " " + fakeLastName + '!').and('be.visible')
  });

  it.skip('1.Edit Created Account', () => {
    //Click create account button
    cy.click_CreateAccountBtn()
    // Populating all fields for registration
    accountBase.fillRegistationForm()
    // Check the welcome message for registered user
     // to doo....
    // ==============================================================

  });




})