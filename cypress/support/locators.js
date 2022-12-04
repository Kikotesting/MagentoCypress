export class Locators {

    ele_General = {
        dropdown_CustomerMenu : () => cy.xpath('//div[2]/header/div[1]/div/ul/li[2]/span/button'),

        // Main Menus
        menu_WhatsNew : () => cy.xpath('//*[@id="ui-id-3"]/span'),
        menu_Women : () => cy.xpath('//*[@id="ui-id-4"]/span[2]'),
        menu_Men : () => cy.xpath('//*[@id="ui-id-5"]/span[2]'),
        menu_Gear : () => cy.xpath('//*[@id="ui-id-6"]/span[2]'),
        menu_Training : () => cy.xpath('//*[@id="ui-id-7"]/span[2]'),
        menu_Sale : () => cy.xpath('//*[@id="ui-id-8"]/span'),

        // Fields
        searchInputField : () => cy.get('#search'),
        newsLetterField : () => cy.get('#newsletter'),

        // Buttons
        signInBtn : () => cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/a'),
        createAccBtn : () => cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[3]/a'),
        showCartIconBtn : () => cy.get('.showcart'),
        footer_SubscribeBtn : () => cy.xpath('//button/span[contains(text(),"Subscribe")]'),
    }
    
    ele_SignInPage = {
        emailField : () => cy.get('#email'),
        passwordField : () => cy.get('#pass'),
        
        submitButton : () =>cy.get('#send2'),
    }
    ele_AccountPage = {
        //Messages
        messageSavingAccountInfo : () => cy.xpath('//*[@id="maincontent"]/div[2]/div[2]/div/div/div'),
        //Headers
        headerAccountText : () => cy.get('.base'),
        editAccountHeaderText : () => cy.get('[data-ui-id="page-title-wrapper"]'),
        //Edit Account Fields
        firstNameField : () => cy.get('#firstname'),
        lastNameField : () => cy.get('#lastname'),
        changeEmailField: () => cy.get('[data-input="change-email"]'),
        changePasswordField : () => cy.get('[data-input="current-password"]'),

        //Checkbox
        markEmailBox : () => cy.get('#change-email'),
        markPasswordBox : () => cy.get('#change-password'),

        //Buttons
        editButton : () => cy.get('.box-information > .box-actions > .edit > span'),
        saveButton : () => cy.get('#form-validate > .actions-toolbar > div.primary > .action > span'),
        //Box content sections
        box_Title : () => cy.xpath('//*[@class="box-title"]/span[contains(text(),"Contact Information")]'),
        box_Content : () => cy.xpath('//*[@id="maincontent"]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/p'),
    }
}
