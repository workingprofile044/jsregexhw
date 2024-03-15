export class Validator {
    validateUsername(username) {
        const regex = /^(?![0-9])(?!.*[_\-]$)(?!.*[0-9]{4,})[a-zA-Z0-9_\-]+(?<![_\-])$/;
        return regex.test(username);
    }
}
