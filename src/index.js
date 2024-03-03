// validation.js

const validation = {
  // Validate email address
  validateEmail: function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate phone number
  validatePhoneNumber: function(phoneNumber) {
    const phoneRegex = /^\d{10}$/; // Assuming 10 digit phone numbers
    return phoneRegex.test(phoneNumber);
  },

  // Validate URL
  validateURL: function(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }
};

// Export the validation object
module.exports = validation;