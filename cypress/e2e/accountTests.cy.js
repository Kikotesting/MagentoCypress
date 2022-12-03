/// <reference types="cypress" />

import {CREATE_ACCOUNT_HEADER_TEXT, 
      MESSAGE_SUCCESSFULL_REGISTERED,
      fakeFirstName,fakeLastName,fakeEmailAddress,
}
 from "../support/constant.js";

import { beforeEach } from "mocha";
import { AccountBase } from "../pages/accountBase.js";

describe('Creating account tests', () => {
  const accountBase = new (AccountBase);
  
  beforeEach(() => {
    //Open the website under testing
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it('1.Create New Account', () => {

    //Click create account button
    cy.clickCreateAccountBtn()
    // Check the URL of the Account page
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/create/')
    // Check the Header of the Account page
    cy.contains(CREATE_ACCOUNT_HEADER_TEXT).and('be.visible')

    // Populating all fields for registration
    accountBase.fillRegistationForm()
    
    // Check the welcome message for registered user
    cy.contains(MESSAGE_SUCCESSFULL_REGISTERED).should('have.text',MESSAGE_SUCCESSFULL_REGISTERED).and('be.visible')
    // Check the My Account section for new registration Name and Address
    cy.contains(fakeFirstName).should('have.text',fakeFirstName).and('be.visible')
    cy.contains(fakeLastName).should('have.text',fakeLastName).and('be.visible')
    cy.contains(fakeEmailAddress).should('have.text',fakeEmailAddress).and('be.visible')
  });

})