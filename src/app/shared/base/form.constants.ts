export const MIN_PASSWORD_LENGTH = 3;
export const SPECIAL_CHARACTERS_REGEX: RegExp = /[#!.\-_$£*+=&]/
export const SPECIAL_CHARACTERS = SPECIAL_CHARACTERS_REGEX.source.replace('[', '').replace(']', '');