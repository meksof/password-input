import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PasswordValidator } from 'src/app/shared/validators/password.validator';

@Component({
    selector: 'app-input-password',
    templateUrl: './input-password.component.html'
})
export class InputPasswordComponent
{
    @Input() label = 'Password';
    public isPasswordShown: boolean = false;
    public loginForm: FormGroup<{
        password: FormControl<string | null>;
    }>;

    constructor ()
    {
        this.loginForm = new FormGroup({
            password: new FormControl<string>('', [
                Validators.required,
                Validators.minLength(8),
                PasswordValidator.hasUpper,
                PasswordValidator.hasNumber
            ]),
        });
    }

    get password ()
    {
        return this.loginForm.get('password');
    }

    get hasPasswordErrors ()
    {
        return this.password?.invalid && (this.password.dirty || this.password.touched);
    }

    showPassword ()
    {
        this.isPasswordShown = !this.isPasswordShown
    }
}
