
import {fakeFirstName, fakeLastName, fakePassword, fakeEmailAddress,
} from "../support/constant.js";

export class CustomerAccount {

    #elements = {
        //Personal Information
        firstName  : () => cy.get('#firstname'),
        lastName : () => cy.get('#lastname'),

        // SignIn Information
        emailAddress : () => cy.get('#email_address'),
        accPassword : () => cy.get('#password'),
        accPasswordConfirm : () => cy.get('#password-confirmation'),
        createAccButton : () => cy.xpath('//button/span[contains(text(),"Create an Account")]'),
    }
    
    fillRegistationForm(){
        var type_firstName = function(){
            firstName().type(fakeFirstName)
        }
        this.type_lastName()
        this.type_emailAddress()
        this.type_accPassword()
        this.type_accPasswordConfirm()
        this.click_createAccButton()

    }

    /**
     * METHODS fill the registration form
     */

    type_lastName(){
        this.elements.lastName().type(fakeLastName)
    }
    type_emailAddress(){
        this.elements.emailAddress().type(fakeEmailAddress)
        cy.log(fakeEmailAddress)
    }
    type_accPassword(){
        this.elements.accPassword().type(fakePassword)
        cy.log(fakePassword)
    }
    type_accPasswordConfirm(){
        this.elements.accPasswordConfirm().type(fakePassword)
    }
    click_createAccButton(){
        this.elements.createAccButton().click()
    }

}