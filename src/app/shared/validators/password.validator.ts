import { FormControl } from '@angular/forms';

import { SPECIAL_CHARACTERS_REGEX } from '../base/form.constants';
import {
    ValidationResult,
    numberIsMissing,
    specialCharacterIsMissing,
    uppercaseIsMissing
} from './validation-errors';

export class PasswordValidator
{
    public static hasUpper (control: FormControl): ValidationResult | null
    {
        const hasUpper = /[A-Z]/.test(control.value);

        if (!hasUpper)
        {
            return { [uppercaseIsMissing]: true };
        }

        return null;
    }

    public static hasNumber (control: FormControl): ValidationResult | null
    {
        const hasNumber = /\d/.test(control.value);

        if (!hasNumber)
        {
            return { [numberIsMissing]: true };
        }

        return null;
    }

    public static hasSpecialCharacter (control: FormControl): ValidationResult | null
    {
        const hasSpecialCharacter = SPECIAL_CHARACTERS_REGEX.test(control.value);

        if (!hasSpecialCharacter)
        {
            return { [specialCharacterIsMissing]: true }
        }

        return null;
    }
}
