import { FormControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class PasswordValidator
{
    public static hasUpper (control: FormControl): ValidationResult | null
    {
        const hasUpper = /[A-Z]/.test(control.value);
        if (!hasUpper)
        {
            return { hasUpper: true };
        }
        return null;
    }

    public static hasNumber (control: FormControl): ValidationResult | null
    {
        const hasNumber = /\d/.test(control.value);
        if (!hasNumber)
        {
            return { hasNumber: true };
        }
        return null;
    }
}
