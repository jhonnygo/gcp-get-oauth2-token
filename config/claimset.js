
// Config data
const config = require("./config");

// Expiration
const now               = new Date().getTime() / 1000;
const expirationTime    = now + config.expiration;

const claimSet = {
    "iss": config.serviceAccount,
    "scope": config.scopes,
    "iat": now,
    "exp": expirationTime,
    "aud": "https://oauth2.googleapis.com/token",
}

// Exports
module.exports = { 
    claimSet
}
