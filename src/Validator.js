class Validator {
    constructor() {
        this.usernamePattern = /^(?!.*[\-_]{2,})(?!.*\d{4,})[a-zA-Z][\w\-]*[a-zA-Z]$/;
    }

    validateUsername(username) {
        return this.usernamePattern.test(username);
    }
}

module.exports = { Validator };
