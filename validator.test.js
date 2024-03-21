import { Validator } from './src/Validator';

describe('Username validation', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('should accept valid username', () => {
        expect(validator.validateUsername('John_Doe')).toBeTruthy();
    });

    test('should reject username starting with a digit', () => {
        expect(validator.validateUsername('1JohnDoe')).toBeFalsy();
    });

    test('should reject username with more than three consecutive digits', () => {
        expect(validator.validateUsername('John1234Doe')).toBeFalsy();
    });

    test('should reject username ending with underscore', () => {
        expect(validator.validateUsername('John_Doe_')).toBeFalsy();
    });

    test('should reject username ending with dash', () => {
        expect(validator.validateUsername('John_Doe-')).toBeFalsy();
    });

    test('should reject username with consecutive underscores', () => {
        expect(validator.validateUsername('John__Doe')).toBeFalsy();
    });

    test('should reject username with consecutive dashes', () => {
        expect(validator.validateUsername('John--Doe')).toBeFalsy();
    });

    test('should reject username with underscore followed by dash at the end', () => {
        expect(validator.validateUsername('John_Doe-_')).toBeFalsy();
    });

    test('should reject username with dash followed by underscore at the end', () => {
        expect(validator.validateUsername('John_Doe_-')).toBeFalsy();
    });

    test('should accept username with underscore and dash', () => {
        expect(validator.validateUsername('John_Doe-')).toBeFalsy();
    });
});
