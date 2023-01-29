
/* Crypto librarie */
const crypto = require('crypto');

// Function that encode and sign header and claimset with private key
function encodeSignature(encodeHeader, encodeClaimSet, privateKey) {

    // Instance signer with Crypto lib
    const signer = crypto.createSign('RSA-SHA256');
    
    // Sign only the header and claimset
    signer.write(`${encodeHeader}.${encodeClaimSet}`);
    signer.end();

    // Encode in base64 GCP private key available in JSON file of GCP
    const signature = signer.sign(privateKey, "base64");
    const encodeSignature = signature.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

    return encodeSignature
}

// Function to convert to Base64URL
function toBase64url(json) {
    const jsonStr   = JSON.stringify(json);
    const byteArray = Buffer.from(jsonStr);
    return byteArray.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

// Main function to get oauth2 token
const https = require("https");
function getOAuthToken(jwt) {
    return new Promise(
        (resolve, reject) => {
            // request option
            var option = {
                hostname: "oauth2.googleapis.com",
                path: `/token?grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
                method: 'POST',
                port: 443,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            var req = https.request(option, (res) => {
                var result = '';
                res.on('data', function (chunk) {
                    result += chunk;
                });
                res.on('end', () => {
                    resolve(result);
                });
            });

            req.on('error', function (err) {
                reject(err);
            });

            req.end();

        }
    );
}

// Async function that return the OAUTH2 Token
async function displayToken(jwt) {
    let result = await getOAuthToken(jwt).catch(err => {});
    let json = JSON.parse(result);
    console.log(json)
}

// Exports
module.exports = { 
    toBase64url,
    getOAuthToken,
    encodeSignature,
    displayToken
}
