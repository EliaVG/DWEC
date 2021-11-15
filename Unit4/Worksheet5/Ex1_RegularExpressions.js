/* 
    Author: Elia Vacas García
    - CLIENT ENVIRONMENT WEB DEVELOPMENT -
    Unit 4: Worksheet 5 - Exercise 1

    Making use of regular expressions make functions in orther to validate the 
    following fields. The function will recieve a string param with a value to
    validate and will return true or false as the validation requirements are 
    met.
 */

// capitalLetterValidation -> Param will contain at least one capital letter
function capitalLetterValidation(param){
    let regexMayus = /[A-Z]/;
    return regexMayus.test(param);
}

// specialCharValidation -> Param will contain at least one of !@#$%^&
function specialCharValidation(param){
    let regexSpChar = /[!@#$%^&]/;
    return regexSpChar.test(param);
}

// emailValidation -> Param has to be an email
function emailValidation(param){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    return regexEmail.test(param);
}

// creditCardValidation -> Param has to be a credit card
function creditCardValidation(param){
    // For Visa, Mastercard and Discover
    let regexCreditCard = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;
    return regexCreditCard.test(param);
}

// lengthValidation -> Param will have at least 8 characters
function lengthValidation(param){
    let regexLength = /^.{8,}$/;
    return regexLength.test(param);
}

// numValidation -> Param will contain al least one digit
function numValidation(param){
    let regexNum = /\d/;
    return regexNum.test(param);
}