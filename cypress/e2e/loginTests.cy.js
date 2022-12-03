/// <reference types="cypress" />

import {SIGN_OUT_HEADER_TEXT, 
        SIGN_OUT_PARAGRAPH_TEXT,
}from "../support/constant.js";

import { beforeEach } from "mocha";

describe('Login Tests', () => {
    
    beforeEach(() => {
      //Open the website under testing
      cy.visit('https://magento.softwaretestingboard.com')
    })
  
    it('1.Login with valid Email and Password', () => {
        //Click SignIn account button
        cy.clickSignInBtn()
        // Check the URL of the SignIn page
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/login/referer/')
        // Check the Header of the SignIn page
        cy.contains('Customer Login').and('be.visible')
        // Type valid Email and Password
        cy.typeEmailAndPassword()
        // Click on submit button
        cy.clickSubmitBtn()
        // Go to Dropdown-header Menu
        cy.click_CustomerMenu()
        // Choose option My Account
        cy.click_CustomerMenu_MyAccount()
        // Check the Information for the login user
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.get('.base').should('have.text','My Account').and('be.visible')
        cy.xpath('//*[@id="maincontent"]/div[2]/div[1]/div[3]/div[2]/div[1]/strong/span').should('have.text','Contact Information').and('be.visible')
        cy.contains('Bebo Bebov').and('be.visible')
        cy.contains('bebo@mail.bg').and('be.visible')
    })
    it('2.Login with valid credentials and Logout', () => {
      //Click SignIn account button
      cy.clickSignInBtn()
      // Check the URL of the SignIn page
      cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/login/referer/')
      // Check the Header of the SignIn page
      cy.contains('Customer Login').and('be.visible')
      // Type valid Email and Password
      cy.typeEmailAndPassword()
      // Click on submit button
      cy.clickSubmitBtn()
      // Go to Dropdown-header Menu
      cy.click_CustomerMenu()
      // Choose option Sign Out
      cy.click_CustomerMenu_SignOut()
      //Check the url for Sign Out
      cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/')
      // Verify the Sign Out messages
      cy.contains(SIGN_OUT_HEADER_TEXT)
        .should('have.text',SIGN_OUT_HEADER_TEXT)
        .and('be.visible')
      cy.contains(SIGN_OUT_PARAGRAPH_TEXT)
        .should('have.text',SIGN_OUT_PARAGRAPH_TEXT)
        .and('be.visible')
    })
    



});