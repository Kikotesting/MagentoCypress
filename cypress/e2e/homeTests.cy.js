/// <reference types="cypress" />
import { beforeEach } from "mocha";

describe('Home Page Tests', () => {
  
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it('1.Verify Header ', () => {
    // Check the correct url
    cy.url().should('include', 'https://magento.softwaretestingboard.com')
  })

})