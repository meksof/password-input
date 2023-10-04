import { FormControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';

describe('PasswordValidator', () =>
{
    let expectedResult;
    let returnedResult;

    beforeEach(function ()
    {
        expectedResult = undefined;
        returnedResult = undefined;
    });

    describe('METHOD: hasUpper', () =>
    {
        it('Should validate if an input include an uppercase character', () =>
        {
            const formControl = new FormControl({});
            formControl.setValue('i am lowercased');
            expectedResult = { hasUpper: true };

            returnedResult = PasswordValidator.hasUpper(formControl);

            expect(returnedResult).toEqual(expectedResult);
        })
    })

    describe('METHOD: hasNumber', () =>
    {
        it('Should validate if an input include a Number', () =>
        {
            const formControl = new FormControl({});
            formControl.setValue('i dont include any number !');
            expectedResult = { hasNumber: true };

            returnedResult = PasswordValidator.hasNumber(formControl);

            expect(returnedResult).toEqual(expectedResult);
        })
    })
})