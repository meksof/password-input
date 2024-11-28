import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { MIN_PASSWORD_LENGTH, SPECIAL_CHARACTERS_REGEX } from '../base/form.constants';
import {
    minLength,
    numberIsMissing,
    specialCharacterIsMissing,
    uppercaseIsMissing
} from './validation-errors';

export const minLengthValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
{
    const length = control.value?.length;

    if (length && length < MIN_PASSWORD_LENGTH)
    {
        return { [minLength]: true };
    }

    return null;
}

export const hasUpperValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
{
    const hasUpper = /[A-Z]/.test(control.value);

    if (!hasUpper)
    {
        return { [uppercaseIsMissing]: true };
    }

    return null;
}

export const hasNumberValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
{
    const hasNumber = /\d/.test(control.value);

    if (!hasNumber)
    {
        return { [numberIsMissing]: true };
    }

    return null;
}

export const hasSpecialCharacterValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
{
    const hasSpecialCharacter = SPECIAL_CHARACTERS_REGEX.test(control.value);

    if (!hasSpecialCharacter)
    {
        return { [specialCharacterIsMissing]: true }
    }

    return null;
}
