const crypto = require('crypto')

exports.aesEncrypt = (password, source) => {
    if(!source) {
        return ''
    }
    let clearEncoding = 'utf-8'
    let cipherEncoding = 'hex'
    let cipherChunks = []
    let cipher = crypto.createCipher(method, password)
    cipher.setAutoPadding(true)
    cipherChunks.push(cipher.update(source, clearEncoding, cipherEncoding))
    cipherChunks.push(cipher.final(cipherEncoding))
    return cipherChunks.join('')
}

exports.aesDecrypt = (password, source) => {
    if (!source) {
        return ''
    }
    let clearEncoding = 'utf8';
    let cipherEncoding = 'hex';
    let cipherChunks = [];
    let decipher = crypto.createDecipher('aes-256-ecb', password);
    decipher.setAutoPadding(true);
    cipherChunks.push(decipher.update(source, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));
    return cipherChunks.join('');
}


