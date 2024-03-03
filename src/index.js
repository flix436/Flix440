// dataValidation.js

// Define the main validation object
const dataValidation = {};

// Validate string format
dataValidation.validateString = (value) => {
  return typeof value === 'string';
};

// Validate email format
dataValidation.validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

// Validate number format
dataValidation.validateNumber = (value) => {
  return typeof value === 'number' && !isNaN(value);
};

// Validate if a value is within a specified range
dataValidation.validateRange = (value, min, max) => {
  return value >= min && value <= max;
};

// Export the validation object
module.exports = dataValidation;

const dataValidation = require('./dataValidation');

// Example usage
console.log(dataValidation.validateString("hello")); // true
console.log(dataValidation.validateEmail("example@email.com")); // true
console.log(dataValidation.validateNumber(42)); // true
console.log(dataValidation.validateRange(5, 1, 10)); // true