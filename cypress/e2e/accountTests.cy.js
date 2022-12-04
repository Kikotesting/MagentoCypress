/// <reference types="cypress" />

import {fakeFirstName,fakeLastName,fakeEmailAddress,
        CREATE_ACCOUNT_HEADER_TEXT,
        ACCOUNT_URL_TEXT,
        EDIT_ACCOUNT_HEADER_TEXT,
}from "../support/constant.js";

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

  it('2.Edit firstName and LastName on Created Account', () => {
    //Click create account button
    cy.click_CreateAccountBtn()
    // Populating all fields for registration
    accountBase.fillRegistationForm()
    // Check box content for customer name and email
    locators.ele_AccountPage.box_Content()
    .should('have.text',"\n"+fakeFirstName +" "+ fakeLastName+"\n"+fakeEmailAddress+"\n")
    .and('be.visible')
    // ==============================================================
    // Click edit button link
    locators.ele_AccountPage.editButton().click()
    // Check the header section
    locators.ele_AccountPage.editAccountHeaderText()
      .should('have.text',EDIT_ACCOUNT_HEADER_TEXT)
      .and('be.visible')
    // Update the customer name info
    cy.edit_FullNameAndSave()
    // Check box content after update customer name and email, the email is the same
    locators.ele_AccountPage.box_Content()
    .should('have.text',"\n" + "new1" +" "+ "new2" + "\n"+fakeEmailAddress+"\n")
    .and('be.visible')
  });

})