const generateQRCode = require('./index');

generateQRCode('Hello, world!', 'qrcode.png', (err, message) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log(message);
    }
});
