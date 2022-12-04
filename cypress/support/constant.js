
import { faker } from '@faker-js/faker';
export let fakeFirstName = faker.name.firstName('male');
export let fakeLastName = faker.name.lastName('male');
//export let fakePassword = faker.random.alphaNumeric(8)
export let fakeEmailAddress = faker.internet.email()
export let fakePassword = faker.datatype.string(10);


/**
 * SignIn/SignOut elements
 * ===========================================
 */
 export let SIGN_IN_URL_TEXT = 'https://magento.softwaretestingboard.com/customer/account/login/referer/';
 export let SIGN_IN_LOGIN_USER_TEXT = 'https://magento.softwaretestingboard.com/customer/account/';
 
 export let SIGN_OUT_HEADER_TEXT = 'You are signed out';
 export let SIGN_OUT_PARAGRAPH_TEXT = 'You have signed out and will go to our homepage in 5 seconds.';
 export let SIGN_OUT_AFTER_URL = 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/';


/**
 * Create Account elements
 * ===========================================
 */
 export let ACCOUNT_URL_TEXT = 'https://magento.softwaretestingboard.com/customer/account/create/';
 export let CREATE_ACCOUNT_HEADER_TEXT = 'Create New Customer Account';
 export let EDIT_ACCOUNT_HEADER_TEXT = 'Edit Account Information';
 export let MESSAGE_SUCCESSFULL_REGISTERED = 'Thank you for registering with Fake Online Clothing Store.';
 export let MESSAGE_SAVED_ACCOUNT_INFORMATION = 'You saved the account information.';
 
