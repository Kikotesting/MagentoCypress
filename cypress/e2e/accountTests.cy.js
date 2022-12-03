/// <reference types="cypress" />

import {CREATE_ACCOUNT_HEADER_TEXT, 
      MESSAGE_SUCCESSFULL_REGISTERED,
      fakeFirstName,fakeLastName,fakeEmailAddress,
}
 from "../support/constant.js";

import { beforeEach } from "mocha";
import { HomePage } from "../pages/homePage.js";
import { AccountPage } from "../pages/accountPage.js";
import { AssertBase } from "../assertion/assertBase.js";

describe('Creating account tests', () => {
  const homePage = new (HomePage);
  const accountPage = new (AccountPage);
  const assertBase = new (AssertBase);
  
  beforeEach(() => {
    //Open the website under testing
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it('1.Create New Account', () => {

    //Click create account button
    homePage.click_CreateAccButton()
    // Check the URL of the Account page
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/create/')
    // Check the Header of the Account page
    cy.contains(CREATE_ACCOUNT_HEADER_TEXT).and('be.visible')
    // Populating all fields for registration
    accountPage.fillRegistationForm()
    // Check the welcome message for registered user
    cy.contains(MESSAGE_SUCCESSFULL_REGISTERED).and('be.visible')
    // Check the My Account section for new registration Name and Address
    cy.contains(fakeFirstName).and('be.visible')
    cy.contains(fakeLastName).and('be.visible')
    cy.contains(fakeEmailAddress).and('be.visible')
  });

})