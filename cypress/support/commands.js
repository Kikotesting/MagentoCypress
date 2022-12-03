// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
/**
 * General commands
 * HeaderMenuDropdown (3-options)
*/
Cypress.Commands.add('click_CustomerMenu',()=>{
    cy.wait(3000)
    cy.xpath('//div[2]/header/div[1]/div/ul/li[2]/span/button').click()
})
Cypress.Commands.add('click_CustomerMenu_MyAccount',()=>{
    cy.wait(1000)
    cy.contains('My Account').click()
})
Cypress.Commands.add('click_CustomerMenu_MyWishList',()=>{
    cy.wait(1000)
    cy.contains('My Wish List').click()
})
Cypress.Commands.add('click_CustomerMenu_SignOut',()=>{
    cy.wait(1000)
    cy.contains('Sign Out').click()
})

/**
 * SignIn page commands
*/
Cypress.Commands.add('clickSignInBtn', () => {
    cy.contains('li', 'Sign In').click()
  })
Cypress.Commands.add('typeEmailAndPassword', () => {
    cy.get('#email').type('bebo@mail.bg')
    cy.get('#pass').type('Kiko123@')
})
Cypress.Commands.add('clickSubmitBtn',()=>{
    cy.get('#send2').click()
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