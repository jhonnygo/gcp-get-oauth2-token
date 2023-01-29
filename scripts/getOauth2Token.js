
/* CONFIG DATA */
const { privateKey } = require('../config/config');

/* HELPER FUNCTIONS */
const helpers = require('../helpers/helpers');

/* HEADER */
const { header } = require('../config/header');

/* CLAIM SET */
const { claimSet } = require('../config/claimset');

/* ------------------------------------------------------------------ */

// Encode Header JSON to Base64
const encodedHeader = helpers.toBase64url(header);

// Encode Claim Set JSON to Base64
const encodedClaimSet = helpers.toBase64url(claimSet);

// Encode Signature to Base64
const encodedSignature = helpers.encodeSignature(encodedHeader, encodedClaimSet, privateKey);

// Concatenate all in jwt variable
const jwt = `${encodedHeader}.${encodedClaimSet}.${encodedSignature}`;

// Display token
helpers.displayToken(jwt);
