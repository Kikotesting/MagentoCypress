/// <reference types="cypress" />

import {fakeFirstName,fakeLastName,fakeEmailAddress,
        CREATE_ACCOUNT_HEADER_TEXT,
        ACCOUNT_URL_TEXT,
        EDIT_ACCOUNT_HEADER_TEXT,
        MESSAGE_SAVED_ACCOUNT_INFORMATION,
}from "../support/constant.js";

import { beforeEach } from "mocha";

import { AccountBase } from "../utilities/accountBase.js";
const accountBase = new (AccountBase);
import { Locators } from "../support/locators.js";
const locators = new (Locators);

describe('Account Positive Tests', () => {
  
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

  it('2.Edit "FirstName and LastName" on New Created Account', () => {
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
    // Check the Information for the edited user on panel header
    cy.contains('Welcome,' + " " + 'new1' + " " + 'new2' + '!').and('be.visible')
  });

  it('3.Edit "Email" on Created Account', () => {
    //Login with defaultUser for editing
    cy.login_Default()
    cy.click_CustomerMenu_MyAccount()
    // Check box content for customer name and email
    locators.ele_AccountPage.box_Content()
      .should('have.text',"\n"+'kikcho'+" "+'kikchov'+"\n"+'kiko1@mail.bg'+"\n")
    // ==============================================================
    // Click edit button link
    locators.ele_AccountPage.editButton().click()
    // Check the header section
    locators.ele_AccountPage.editAccountHeaderText()
      .should('have.text',EDIT_ACCOUNT_HEADER_TEXT)
      .and('be.visible')
    // Update the customer name info (param = kikoTesting@mail.bg)
    cy.edit_EmailAndSave()
    //Check the saving information text
    locators.ele_AccountPage.messageSavingAccountInfo()
      .should('have.text',MESSAGE_SAVED_ACCOUNT_INFORMATION)
      .and('be.visible')
    /**
     * The test end here, but I prefer to revert the old data for saving purpose
     * =========================================================================
     */
    cy.clearCookies()
    cy.reload()
    cy.click_SignInBtn()
    cy.typeEdited_EmailAndPassword()
    cy.click_SubmitBtn()
    cy.click_CustomerMenu_MyAccount()
    locators.ele_AccountPage.box_Content()
      .should('have.text',"\n" + "kikcho" +" "+ "kikchov" + "\n"+'kikoTesting@mail.bg'+"\n")
      .and('be.visible')
    locators.ele_AccountPage.editButton().click()
    cy.revert_OldEmailAndSave()
    locators.ele_AccountPage.messageSavingAccountInfo()
      .should('have.text',MESSAGE_SAVED_ACCOUNT_INFORMATION)
      .and('be.visible')
  });

});