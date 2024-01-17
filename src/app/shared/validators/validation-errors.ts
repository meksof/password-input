export interface ValidationResult {
    [key: string]: boolean
}

export const minLength = 'minLength';
export const numberIsMissing = 'numberIsMissing';
export const uppercaseIsMissing = 'uppercaseIsMissing';
export const specialCharacterIsMissing = 'specialCharacterIsMissing';