
import { faker } from '@faker-js/faker';


export let fakeFirstName = faker.name.firstName('male');
export let fakeLastName = faker.name.lastName('male');

export let fakeEmailAddress = faker.internet.email()
export let fakePassword = faker.datatype.string(10);
//export let fakePassword = faker.random.alphaNumeric(8)






/**
 * Create Account Page
 * ===========================================
 */
 export let CREATE_ACCOUNT_HEADER_TEXT = 'Create New Customer Account';
 export let MESSAGE_SUCCESSFULL_REGISTERED = 'Thank you for registering with Fake Online Clothing Store.';
 
