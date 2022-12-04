// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { fakeFirstName, fakeLastName, MESSAGE_SUCCESSFULL_REGISTERED } from "../support/constant.js";

import { Locators } from "../support/locators.js";
const locators = new (Locators);

/*************************************************
 * GENERAL website commands
************************************************/
    Cypress.Commands.add('login_Default', () => {
        cy.click_SignInBtn()
        cy.fill_SignInFormAndSubmit()
    })
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
        locators.ele_General.dropdown_CustomerMenu().click()
        cy.wait(1000)
        cy.contains('Sign Out').click()
    })

/**
 * SignIn page behavior
*/
    Cypress.Commands.add('fill_SignInFormAndSubmit', () => {
        cy.type_EmailAndPassword()
        cy.click_SubmitBtn()
    })
    Cypress.Commands.add('type_EmailAndPassword', () => {
        locators.ele_SignInPage.emailField().type('kiko1@mail.bg')
        locators.ele_SignInPage.passwordField().type('Kiko123@')
    })
    Cypress.Commands.add('typeEdited_EmailAndPassword', () => {
        locators.ele_SignInPage.emailField().type('kikoTesting@mail.bg')
        locators.ele_SignInPage.passwordField().type('Kiko123@')
    })
    Cypress.Commands.add('click_SubmitBtn',()=>{
        locators.ele_SignInPage.submitButton().click()
    })

/**
 * Account page behavior
*/
    Cypress.Commands.add('validate_SuccessMessageAndBoxSection',()=>{
    // Check the welcome message for registered user
        cy.contains(MESSAGE_SUCCESSFULL_REGISTERED)
        .should('have.text',MESSAGE_SUCCESSFULL_REGISTERED)
        .and('be.visible')
    // Check headers texts for customer account
        locators.ele_AccountPage.headerAccountText()
            .should('have.text','My Account').and('be.visible')
        locators.ele_AccountPage.box_Title()
            .should('have.text','Contact Information').and('be.visible')
    })
    Cypress.Commands.add('edit_FullNameAndSave',()=>{
        // Change Firstname and Lastname 
        locators.ele_AccountPage.firstNameField().clear().type("new1")
        locators.ele_AccountPage.lastNameField().clear().type("new2")
        // Click 'Save' button 
        locators.ele_AccountPage.saveButton().click()
    })
    Cypress.Commands.add('edit_EmailAndSave',()=>{
        // Change Email on user 
        locators.ele_AccountPage.markEmailBox().click()
        locators.ele_AccountPage.changeEmailField().clear().type("kikoTesting@mail.bg")
        locators.ele_AccountPage.changePasswordField().clear().type('Kiko123@')
        // Click 'Save' button 
        locators.ele_AccountPage.saveButton().click()
    })
    Cypress.Commands.add('revert_OldEmailAndSave',()=>{
        // Change Email on user 
        locators.ele_AccountPage.markEmailBox().click()
        locators.ele_AccountPage.changeEmailField().clear().type("kiko1@mail.bg")
        locators.ele_AccountPage.changePasswordField().clear().type('Kiko123@')
        // Click 'Save' button 
        locators.ele_AccountPage.saveButton().click()
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