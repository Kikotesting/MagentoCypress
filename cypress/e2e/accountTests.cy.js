/// <reference types="cypress" />

import {CREATE_ACCOUNT_HEADER_TEXT,
        ACCOUNT_URL_TEXT, 
        MESSAGE_SUCCESSFULL_REGISTERED,
        fakeFirstName,fakeLastName,fakeEmailAddress,
}
 from "../support/constant.js";

import { beforeEach } from "mocha";
import { AccountBase } from "../utilities/accountBase.js";

describe('Creating Account Positive Tests', () => {
  const accountBase = new (AccountBase);
  
  beforeEach(() => {
    //Open the website under testing
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it('1.Create New Account', () => {
    //Click create account button
    cy.clickCreateAccountBtn()
    // Check the URL of the Account page
    cy.url().should('include', ACCOUNT_URL_TEXT)
    // Check the Header of the Account page
    cy.contains(CREATE_ACCOUNT_HEADER_TEXT).and('be.visible')
    // Populating all fields for registration
    accountBase.fillRegistationForm()
    // Check the welcome message for registered user
    cy.contains(MESSAGE_SUCCESSFULL_REGISTERED)
      .should('have.text',MESSAGE_SUCCESSFULL_REGISTERED)
      .and('be.visible')
    // Check the Information for the login user
    cy.get('.base').should('have.text','My Account').and('be.visible')
    cy.contains('Welcome,' + " " + fakeFirstName + " " + fakeLastName + '!').and('be.visible')
    // Check the My Account section for new registration Name and Address
    loca.should('have.text','Contact Information').and('be.visible')
    cy.contains(fakeFirstName + " " + fakeLastName).and('be.visible')
    cy.contains(fakeEmailAddress).and('be.visible')
  });




})