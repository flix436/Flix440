# Validation Library

This is a simple JavaScript library for validating email addresses, phone numbers, and URLs.

## Installation

You can install this package via npm:

```bash
npm install validation-library
```

## Usage

```javascript
const validation = require('validation-library');

// Validate email address
const isValidEmail = validation.validateEmail('example@example.com');

// Validate phone number
const isValidPhoneNumber = validation.validatePhoneNumber('1234567890');

// Validate URL
const isValidURL = validation.validateURL('https://www.example.com');

console.log('Email is valid:', isValidEmail);
console.log('Phone number is valid:', isValidPhoneNumber);
console.log('URL is valid:', isValidURL);
```

## API

### `validateEmail(email: string): boolean`

Validates an email address.

- `email`: The email address to validate.

### `validatePhoneNumber(phoneNumber: string): boolean`

Validates a phone number.

- `phoneNumber`: The phone number to validate.

### `validateURL(url: string): boolean`

Validates a URL.

- `url`: The URL to validate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.