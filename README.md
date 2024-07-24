# QR Code Generator

## Description

QR Code Generator is a simple Node.js package for generating QR codes and saving them as image files. Ideal for adding QR code functionality to your Node.js applications effortlessly.


![Version](https://img.shields.io/npm/v/package-name.svg)

## <span style="color:blue;">Table of Contents</span>
- [QR Code Generator](#qr-code-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Import the package](#import-the-package)
    - [Generate and Save a QR Code](#generate-and-save-a-qr-code)
    - [Example Usage](#example-usage)
  - [Usage in Different Environments](#usage-in-different-environments)
    - [Node.js](#nodejs)
    - [Browser](#browser)
    - [Example Usage in a browser](#example-usage-in-a-browser)
  - [Dependencies](#dependencies)
  - [Credits](#credits)
  - [FAQ](#faq)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)


## Features

- **Generate QR Codes**: Easily generate QR codes from text.
- **Save as Image**: Save the generated QR codes directly to image files (PNG format).

## Installation

You can install this package using npm:

```bash
npm install @shreyaadhikari/qr-code-generator
```

## Usage

Here’s a quick guide on how to use the QR Code Generator in your Node.js project.

### Import the package

```javascript
const generateQRCode = require('@your-username/qr-code-generator');
```

### Generate and Save a QR Code

```javascript
const text = 'Hello World';
const outputPath = 'qrcode.png';

generateQRCode(text, outputPath, (err, message) => {
    if (err) {
        console.error('Error generating QR code:', err);
    } else {
        console.log(message); // Output: 'QR Code saved to qrcode.png'
    }
});
```

- **text:** The text you want to encode into a QR code.
- **outputPath:** The path where the QR code image will be saved.
- **callback:**  A function that handles the success or error response.

### Example Usage

Here is a complete example using a file named **test.js**:

```javascript
const generateQRCode = require('@your-username/qr-code-generator');

const text = 'Hello World';
const outputPath = 'qrcode.png';

generateQRCode(text, outputPath, (err, message) => {
    if (err) {
        console.error('Error generating QR code:', err);
    } else {
        console.log(message); // Output: 'QR Code saved to qrcode.png'
    }
});
```

## Usage in Different Environments

### Node.js

This package is designed for use with Node.js. See the [Usage](#usage) section for examples.

### Browser

To use this package in a browser, include the script tag as follows:

```html
<script src="https://cdn.jsdelivr.net/npm/@yourusername/qr-code-generator"></script>
```

### Example Usage in a browser

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
</head>
<body>
    <input type="text" id="textInput" placeholder="Enter text for QR Code">
    <button id="generateButton">Generate QR Code</button>
    <img id="qrCodeImage" alt="QR Code">

    <script src="https://cdn.jsdelivr.net/npm/@shreyaadhikari/qr-code-generator"></script>
    <script>
        document.getElementById('generateButton').addEventListener('click', () => {
            const text = document.getElementById('textInput').value;
            const outputPath = 'data:image/png;base64,'; // QR code will be displayed as a base64-encoded PNG

            generateQRCode(text, outputPath, (err, imageSrc) => {
                if (err) {
                    console.error('Error generating QR code:', err);
                } else {
                    document.getElementById('qrCodeImage').src = imageSrc;
                }
            });
        });
    </script>
</body>
</html>
```

## Dependencies

This package requires the following dependencies:

- [qrcode](https://www.npmjs.com/package/qrcode)

## Credits

- Special thanks to the [QRCode library](https://github.com/soldair/node-qrcode) for providing QR code generation functionality.

## FAQ

**Q: What if I encounter an error generating the QR code?**

A: Make sure the text input is a valid string and check the file path permissions.



## Contributing

 Contributions are welcome! If you want to improve this package, follow these steps:

- Fork the repository.
- Create a new branch (git checkout -feature-branch).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a pull request.

## License

This package is licensed under the ISC License. See the LICENSE file for details.

## Contact

For questions or suggestions, feel free to open an issue on the GitHub repository or contact me at `shreya.adh09@gmail.com`.
