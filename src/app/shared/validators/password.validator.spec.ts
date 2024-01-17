import { FormControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { ValidationResult, numberIsMissing, specialCharacterIsMissing, uppercaseIsMissing } from './validation-errors';

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
            const error: ValidationResult = { [uppercaseIsMissing]: true };

            returnedResult = PasswordValidator.hasUpper(formControl);

            expect(returnedResult).toEqual(error);
        })
    })

    describe('METHOD: hasNumber', () =>
    {
        it('Should raise an error when input value don\'t include a number', () =>
        {
            const formControl = new FormControl();
            formControl.setValue('I dont include any number !');
            const error: ValidationResult = { [numberIsMissing]: true };

            returnedResult = PasswordValidator.hasNumber(formControl);

            expect(returnedResult).toEqual(error);
        })
    })

    describe('METHOD: hasSpecialCharacter', () =>
    {
        it('Should raise an error when input value don\'t include a Special Character', () =>
        {
            const formControl = new FormControl();
            formControl.setValue('I dont include any special character');
            const error: ValidationResult = { [specialCharacterIsMissing]: true };

            returnedResult = PasswordValidator.hasSpecialCharacter(formControl);

            expect(returnedResult).toEqual(error);
        })
    })
})