const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (values.firstName && values.firstName.length < 2) {
        errors.firstName = 'Less than 2 characters';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.telephoneNumber) {
        errors.telephoneNumber = 'Required';
    }

    let strippedPhone = values.telephoneNumber ? values.telephoneNumber
        .replace(/-/g, '')
        .replace(' ', '')
        .replace('.', '') : '';

    if (values.telephoneNumber 
        && (isNaN(strippedPhone) === true 
        || strippedPhone.length !== 10)) {
            errors.telephoneNumber = 'Not a valid telephone number'
    }

    if (!values.npiNumber) {
        errors.npiNumber = 'Required';
    }

    if (values.npiNumber && isNaN(values.npiNumber)) {
        errors.npiNumber = 'Not a valid npi number'
    }


    return errors;
}

export default validate;