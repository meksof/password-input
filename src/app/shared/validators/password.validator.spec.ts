import { FormControl, ValidationErrors } from '@angular/forms';
import { hasSpecialCharacterValidator, hasNumberValidator, hasUpperValidator } from './password.validator';
import { numberIsMissing, specialCharacterIsMissing, uppercaseIsMissing } from './validation-errors';

describe('PasswordValidator', () =>
{
    let returnedResult;

    beforeEach(function ()
    {
        returnedResult = undefined;
    });

    describe('METHOD: hasUpper', () =>
    {
        it('Should raise an error when input value don\'t include an uppercase character', () =>
        {
            const formControl = new FormControl();
            formControl.setValue('i am lowercased');
            const error: ValidationErrors = { [uppercaseIsMissing]: true };

            returnedResult = hasUpperValidator(formControl);

            expect(returnedResult).toEqual(error);
        })
    })

    describe('METHOD: hasNumber', () =>
    {
        it('Should raise an error when input value don\'t include a number', () =>
        {
            const formControl = new FormControl();
            formControl.setValue('I dont include any number !');
            const error: ValidationErrors = { [numberIsMissing]: true };

            returnedResult = hasNumberValidator(formControl);

            expect(returnedResult).toEqual(error);
        })
    })

    describe('METHOD: hasSpecialCharacter', () =>
    {
        it('Should raise an error when input value don\'t include a Special Character', () =>
        {
            const formControl = new FormControl();
            formControl.setValue('I dont include any special character');
            const error: ValidationErrors = { [specialCharacterIsMissing]: true };

            returnedResult = hasSpecialCharacterValidator(formControl);

            expect(returnedResult).toEqual(error);
        })
    })
})