import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PasswordValidator } from 'src/app/shared/validators/password.validator';
import { MIN_PASSWORD_LENGTH, SPECIAL_CHARACTERS_REGEX } from '../shared/base/form.constants';
import { minLength, numberIsMissing, specialCharacterIsMissing, uppercaseIsMissing } from '../shared/validators/validation-errors';

@Component({
    selector: 'app-input-password',
    templateUrl: './input-password.component.html'
})
export class InputPasswordComponent
{
    @Input() label = 'Password';
    public isPasswordShown: boolean = false;
    public loginForm: FormGroup<any>;
    public sPECIAL_CHARACTERS = `${SPECIAL_CHARACTERS_REGEX}`.replace('/[', '').replace(']/', '');

    get password ()
    {
        return this.loginForm.get('password');
    }
    get hasPasswordErrors ()
    {
        return this.password?.invalid && (this.password.dirty || this.password.touched);
    }
    get minLengthIsInvalid ()
    {
        return this.password?.errors?.['required'] || this.password?.errors?.[minLength];
    }
    get uppercaseIsInvalid ()
    {
        return this.password?.errors?.['required'] || this.password?.errors?.[uppercaseIsMissing];
    }
    get numberIsInvalid ()
    {
        return this.password?.errors?.['required'] || this.password?.errors?.[numberIsMissing];
    }
    get specialCharacterIsInvalid ()
    {
        return this.password?.errors?.['required'] || this.password?.errors?.[specialCharacterIsMissing]
    }

    constructor ()
    {
        this.loginForm = new FormGroup({
            password: new FormControl<string>('', [
                Validators.required,
                Validators.minLength(MIN_PASSWORD_LENGTH),
                PasswordValidator.hasUpper,
                PasswordValidator.hasNumber,
                PasswordValidator.hasSpecialCharacter
            ]),
        });
    }

    showPassword ()
    {
        this.isPasswordShown = !this.isPasswordShown
    }
}
