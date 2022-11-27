export class HomePage {


    elements = {

        // Buttons
        signInBtn : () => cy.contains('li', 'Sign In'),
        createAccBtn : () => cy.contains('li', 'Create an Account'),
        showCartIconBtn : () => cy.get('.showcart'),
        subscribeBtn : () => cy.xpath('//button/span[contains(text(),"Subscribe")]'),

        // Fields
        searchInputField : () => cy.get('#search'),
        newsLetterField : () => cy.get('#newsletter'),
        
        //Links
        footerLinks : () => cy.get('#newsletter'),

        // Menus (access them via elements.menu item through the page class without method)
        menu_WhatsNew : () => cy.xpath('//*[@id="ui-id-3"]/span'),
        menu_Women : () => cy.xpath('//*[@id="ui-id-4"]/span[2]'),
        menu_Men : () => cy.xpath('//*[@id="ui-id-5"]/span[2]'),
        menu_Gear : () => cy.xpath('//*[@id="ui-id-6"]/span[2]'),
        menu_Training : () => cy.xpath('//*[@id="ui-id-7"]/span[2]'),
        menu_Sale : () => cy.xpath('//*[@id="ui-id-8"]/span'),

    }

    /** 
     * METHODS buttons
    */
    click_SignInButton(){
        this.elements.signInBtn().click()
    }
    click_CreateAccButton(){
        this.elements.createAccBtn().click()
    }
    click_showCartButton(){
        this.elements.showCartIconBtn().click()
    }
    click_subscribeButton(){
        this.elements.subscribeBtn().click()
    }

    /** 
     * METHODS fields
    */
    type_InvalidText_InSearchField(){
        this.elements.searchInputField().clear().type('drehendi' + '{enter}')
    }
    type_validText_InSearchField(){
        this.elements.searchInputField().clear().type('Pants' + '{enter}')
    }




}