import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { hasSpecialCharacterValidator, hasNumberValidator, hasUpperValidator, minLengthValidator } from 'src/app/shared/validators/password.validator';
import { MIN_PASSWORD_LENGTH, SPECIAL_CHARACTERS } from '../shared/base/form.constants';
import { minLength, numberIsMissing, specialCharacterIsMissing, uppercaseIsMissing } from '../shared/validators/validation-errors';

@Component({
    selector: 'app-input-password',
    templateUrl: './input-password.component.html'
})
export class InputPasswordComponent
{
    @Input() label = 'Password';
    public isPasswordShown: boolean = false;
    public loginForm: FormGroup<{
        password: FormControl<string|null>
    }>;

    get password ()
    {
        return this.loginForm.get('password');
    }
    get hasPasswordErrors ()
    {
        return this.password?.invalid && (this.password.dirty || this.password.touched);
    }
    get minLength ()
    {
        return {
            unsatisfied: this.password?.errors?.['required'] || this.password?.errors?.[minLength],
            label: `At least ${MIN_PASSWORD_LENGTH} characters`
        }
    }
    get uppercase ()
    {
        return {
            unsatisfied: this.password?.errors?.['required'] || this.password?.errors?.[uppercaseIsMissing],
            label: `At least one uppercase character`
        }
    }
    get number ()
    {
        return {
            unsatisfied: this.password?.errors?.['required'] || this.password?.errors?.[numberIsMissing],
            label: `At least one number`
        }
    }
    get specialCharacter ()
    {
        return {
            unsatisfied: this.password?.errors?.['required'] || this.password?.errors?.[specialCharacterIsMissing],
            label: `At least one special character of ${SPECIAL_CHARACTERS}`
        }
    }

    constructor ()
    {
        this.loginForm = new FormGroup({
            password: new FormControl<string|null>(null, {
                validators: [
                    Validators.required,
                    minLengthValidator,
                    hasUpperValidator,
                    hasNumberValidator,
                    hasSpecialCharacterValidator
                ]
            }),
        });
    }

    showPassword ()
    {
        this.isPasswordShown = !this.isPasswordShown
    }
}
