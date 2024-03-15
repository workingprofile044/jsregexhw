import { Validator } from './src/Validator'; 

describe('Username validation', () => {
    const validator = new Validator();

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
    
});
