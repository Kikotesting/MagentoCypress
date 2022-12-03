
import {fakeFirstName, fakeLastName, fakePassword, fakeEmailAddress,
} from "../support/constant.js";

export class AccountBase {

    elements = {
        //Personal Information
        firstName  : () => cy.get('#firstname'),
        lastName : () => cy.get('#lastname'),

        // SignIn Information
        emailAddress : () => cy.get('#email_address'),
        accPassword : () => cy.get('#password'),
        accPasswordConfirm : () => cy.get('#password-confirmation'),
        createAccButton : () => cy.xpath('//button/span[contains(text(),"Create an Account")]'),
    }
        /**
     * METHODS fill the registration form
     */
        type_firstName(){
            this.elements.firstName().type(fakeFirstName)
        }
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
    
    fillRegistationForm(){
       this.type_firstName()
       this.type_lastName()
       this.type_emailAddress()
       this.type_accPassword()
       this.type_accPasswordConfirm()
       this.click_createAccButton()
    }



}