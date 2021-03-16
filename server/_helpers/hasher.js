const crypto = require('crypto');

module.exports = doHash;

function doHash(password, salt) {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    return hash.digest('hex');
};