// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { Locators } from "../support/locators.js";
const locators = new (Locators);

/*************************************************
 * GENERAL website commands
************************************************/
    Cypress.Commands.add('click_SignInBtn', () => {
        locators.ele_General.signInBtn().click()
    })
    Cypress.Commands.add('click_CreateAccountBtn', () => {
        locators.ele_General.createAccBtn().click()
    })
    Cypress.Commands.add('click_CustomerMenu_MyAccount',()=>{
        cy.wait(3000)
        locators.ele_General.dropdown_CustomerMenu().click()
        cy.wait(1000)
        cy.contains('My Account').click()
    })
    Cypress.Commands.add('click_CustomerMenu_MyWishList',()=>{
        cy.wait(3000)
        locators.ele_General.dropdown_CustomerMenu().click()
        cy.wait(1000)
        cy.contains('My Wish List').click()
    })
    Cypress.Commands.add('click_SignOut',()=>{
        cy.wait(3000)
        locators.ele_General.dropdown_CustomerMenu.click()
        cy.wait(1000)
        cy.contains('Sign Out').click()
    })

/**
 * SignIn page commands
*/
    Cypress.Commands.add('signIn_validCredentials', () => {
        cy.typeEmailAndPassword()
        cy.clickSubmitBtn()
    })
    Cypress.Commands.add('typeEmailAndPassword', () => {
        locators.ele_SignInPage.emailField().type('bebo@mail.bg')
        locators.ele_SignInPage.passwordField().type('Kiko123@')
    })
    Cypress.Commands.add('clickSubmitBtn',()=>{
        locators.ele_SignInPage.submitButton().click()
    })










// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })