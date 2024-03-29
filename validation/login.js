const Validator = require('validator');
const _ = require('lodash');

module.exports = data => {
    let errors = {};

    data.email = !_.isEmpty(data.email) ? data.email : '';
    data.password = !_.isEmpty(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}