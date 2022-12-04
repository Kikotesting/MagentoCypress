/// <reference types="cypress" />

import {SIGN_OUT_HEADER_TEXT, 
        SIGN_OUT_PARAGRAPH_TEXT,
        SIGN_OUT_AFTER_URL,
        SIGN_IN_URL_TEXT,
        SIGN_IN_LOGIN_USER_TEXT,
}from "../support/constant.js";

import { beforeEach } from "mocha";
import { Locators } from "../support/locators.js";
const locators = new (Locators);

describe('Login/Logout Positive Tests', () => {
    
    beforeEach(() => {
      //Open the website under testing
      cy.visit('https://magento.softwaretestingboard.com')
    })
  
    it('1.Login with valid Email and Pass', () => {
        //Click SignIn account button
        cy.click_SignInBtn()
        // Check the URL of the SignIn page
        cy.url().should('include', SIGN_IN_URL_TEXT)
        // Check the Header of the SignIn page
        cy.contains('Customer Login').and('be.visible')
        // Populates the SignIn form and submit
        cy.fill_SignInForm()
        // Check header panel
        cy.contains('Welcome, Bebo Bebov!').and('be.visible')
        // Go to Dropdown-header Menu and choose option My Account
        cy.click_CustomerMenu_MyAccount()
        // Check URL for SignIn page
        cy.url().should('include', SIGN_IN_LOGIN_USER_TEXT)
        // Check the section for Logged customer
        cy.get('.base').should('have.text','My Account').and('be.visible')
        // Check the header in the box section
        locators.ele_AccountPage.box_Title()
          .should('have.text','Contact Information').and('be.visible')
        // Check box content for customer name and email
        locators.ele_AccountPage.box_Content()
          .should('have.text',"\n"+'Bebo'+" "+'Bebov'+"\n"+'bebo@mail.bg'+"\n")
    })
    it('2.Login with valid Email and Pass then Logout', () => {
      //Click SignIn account button
      cy.click_SignInBtn()
      // Check the URL of the SignIn page
      cy.url().should('include', SIGN_IN_URL_TEXT)
      // Check the Header of the SignIn page
      cy.contains('Customer Login').and('be.visible')
      // Populates the SignIn form and submit
      cy.fill_SignInForm()
      // Navigate to dropdownCustomer menu and click SignOut
      cy.click_SignOut()
      //Check the url for Sign Out
      cy.url().should('include', SIGN_OUT_AFTER_URL)
      // Verify the Sign Out messages
      cy.contains(SIGN_OUT_HEADER_TEXT)
        .should('have.text',SIGN_OUT_HEADER_TEXT)
        .and('be.visible')
      cy.contains(SIGN_OUT_PARAGRAPH_TEXT)
        .should('have.text',SIGN_OUT_PARAGRAPH_TEXT)
        .and('be.visible')
      // Wait 5 seconds message to disappear and check again
      cy.wait(5000)
      cy.contains(SIGN_OUT_PARAGRAPH_TEXT).should('not.exist')
    })
    

});