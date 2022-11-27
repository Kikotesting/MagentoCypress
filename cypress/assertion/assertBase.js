export class AssertBase {
    

    elments = {
        // Account page
        createAccountHeaderText : () => cy.xpath('//span[contains(text(),"Create New Customer Account")]'),
        // Dashboard page
        registeredCustomerMessage : () => cy.xpath('//*[@id="maincontent"]/div[1]/div[2]/div/div/div'),
        myAccountTextHeader : () => cy.xpath('//h1/span[contains(text(),"My Account")]'),
    }






}