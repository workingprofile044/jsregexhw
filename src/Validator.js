class Validator {
    validateUsername(username) {
        const usernameRegex = /^(?!.*[-_]{2,})(?!.*\d{4,})[a-zA-Z][a-zA-Z0-9_-]{1,14}[a-zA-Z0-9]$/;
        return usernameRegex.test(username);
    }
}

module.exports = { Validator };
