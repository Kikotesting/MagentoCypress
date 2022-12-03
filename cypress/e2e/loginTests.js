/// <reference types="cypress" />

import {
}
from "../support/constant.js";

import { beforeEach } from "mocha";


describe('Login Tests', () => {
    
    beforeEach(() => {
      //Open the website under testing
      cy.visit('https://magento.softwaretestingboard.com')
    })
  
    it('1.LogIn with valid username and password and verifies the information for account', () => {
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
        cy.clickCustomerMenuDropdown()
        // Choose option My Account
        cy.clickMyAccountOption()
        // Check the Information for the login user
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.get('.base').should('have.text','My Account').and('be.visible')
        cy.xpath('//*[@id="maincontent"]/div[2]/div[1]/div[3]/div[2]/div[1]/strong/span').should('have.text','Contact Information').and('be.visible')
        cy.contains('Bebo Bebov').and('be.visible')
        cy.contains('bebo@mail.bg').and('be.visible')
    })
});