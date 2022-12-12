import validator from 'validator';
const velidateRegisterInput = (data) => {
    let errors = {};
    const { name, email, password, c_password } = data;

    if(validator.isEmpty(name)){
        errors.name = 'Name field is required.';
    }
    if(validator.isEmpty(email)){
        errors.email = 'Email field is required.';
    }
    if(validator.isEmpty(password)){
        errors.password = 'Password field is required.';
    }
    if(validator.isEmpty(c_password)){
        errors.c_password = 'c_password field is required.';
    }
    return {
        isInvalid: Object.keys(errors).length > 0 ,
        errors:errors,
    };
};

export default velidateRegisterInput;