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
        it('Should validate if an input include an uppercase character', () =>
        {
            const formControl = new FormControl({});
            formControl.setValue('i am lowercased');
            const error: ValidationResult = { [uppercaseIsMissing]: true };

            returnedResult = PasswordValidator.hasUpper(formControl);

            expect(returnedResult).toEqual(error);
        })
    })

    describe('METHOD: hasNumber', () =>
    {
        it('Should validate if an input include a Number', () =>
        {
            const formControl = new FormControl({});
            formControl.setValue('i dont include any number !');
            const error: ValidationResult = { [numberIsMissing]: true };

            returnedResult = PasswordValidator.hasNumber(formControl);

            expect(returnedResult).toEqual(error);
        })
    })

    describe('METHOD: hasSpecialCharacter', () =>
    {
        it('Should validate if an input dont include a Special Character', () =>
        {
            const formControl = new FormControl({});
            formControl.setValue('I dont include any special character');
            const error: ValidationResult = { [specialCharacterIsMissing]: true };

            returnedResult = PasswordValidator.hasSpecialCharacter(formControl);

            expect(returnedResult).toEqual(error);
        })
    })
})