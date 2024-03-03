# Data Validation Library

A lightweight JavaScript library for data validation in Node.js applications.

## Installation

You can install the Data Validation Library via npm:

```bash
npm install data-validation-library
```

## Usage

```javascript
// Require the data validation library
const dataValidation = require('data-validation-library');

// Validate string format
console.log(dataValidation.validateString("hello")); // true

// Validate email format
console.log(dataValidation.validateEmail("example@email.com")); // true

// Validate number format
console.log(dataValidation.validateNumber(42)); // true

// Validate if a value is within a specified range
console.log(dataValidation.validateRange(5, 1, 10)); // true
```

## Functions

- `validateString(value)`: Validates if the given value is a string.
- `validateEmail(value)`: Validates if the given value is a valid email address.
- `validateNumber(value)`: Validates if the given value is a number.
- `validateRange(value, min, max)`: Validates if the given value is within the specified range.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.