/// <reference types="cypress" />
import { beforeEach } from "mocha";
import { HomePage } from "../pages/homePage.js"

describe('Home Page Tests', () => {
  const homePage = new (HomePage);
  
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it.skip('1.Verify Header ', () => {
    // Check the correct url
    cy.url().should('include', 'https://magento.softwaretestingboard.com')
  })

})