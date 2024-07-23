const QRCode = require('qrcode');
const fs = require('fs');

function generateQRCode(text, outputPath, callback) {
    QRCode.toFile(outputPath, text, function (err) {
        if (err) return callback(err);
        console.log('QR Code saved to ' + outputPath);
        callback(null, 'QR Code saved to ' + outputPath);
    });
}

module.exports = generateQRCode;
