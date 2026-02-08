// Import UI components
import { formElements } from './dom-elements.js';
const {
  cardName,
  cardNumber,
  cardExpMonth,
  cardExpYear,
  cardCvc,
  cardNameError,
  cardNumberError,
  cardExpMonthError,
  cardExpYearError,
  cardCvcError,
  cardForm,
} = formElements;

// Define card info object with default values
const cardInfo = {
  name: 'Jane Appleseed',
  number: '123456789123',
  expMonth: '1',
  expYear: '1',
  cvc: '123',
};

// Show error message and mark input as invalid
function showError(input, errorElement, message) {
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', 'true');

  errorElement.textContent = message;
  // errorElement.classList.add('active');
}

// Clear error message and mark input as valid
function clearError(input, errorElement) {
  input.classList.remove('invalid');
  input.setAttribute('aria-invalid', 'false');

  errorElement.textContent = '';
  // errorElement.classList.remove('active');
}

// Validate individual field against provided rules
function validateField(input, errorElement, rules) {
  // Check if empty
  if (input.value.trim() === '') {
    showError(input, errorElement, `Can't be blank`);
    return false;
  }

  // Check format with regex
  if (rules.regex && !rules.regex.test(input.value)) {
    showError(input, errorElement, rules.formatError || 'Wrong format');
    return false;
  }

  // Check value range (for numbers)
  if (rules.min !== undefined || rules.max !== undefined) {
    const numValue = Number(input.value);
    if (numValue < rules.min || numValue > rules.max) {
      showError(input, errorElement, rules.rangeError);
      return false;
    }
  }

  // All checks passed
  clearError(input, errorElement);
  return true;
}

// Validate all form fields
function validateForm() {
  const isNameValid = validateField(cardName, cardNameError, {
    regex: /^[a-zA-Z\s'-]{2,50}$/,
    formatError: 'Wrong format',
  });

  const isNumberValid = validateField(cardNumber, cardNumberError, {
    regex: /^\d{16}$/,
    formatError: 'Should be 16 numbers',
  });

  const isExpMonthValid = validateField(cardExpMonth, cardExpMonthError, {
    regex: /^\d{1,2}$/,
    formatError: 'Wrong format, numbers only',
    min: 1,
    max: 12,
    rangeError: 'Should be between 1 and 12',
  });

  const isExpYearValid = validateField(cardExpYear, cardExpYearError, {
    regex: /^\d{2}$/,
    formatError: 'Wrong format, numbers only',
    min: 1,
    max: 99,
    rangeError: 'Should be between 1 and 99',
  });

  const isCvcValid = validateField(cardCvc, cardCvcError, {
    regex: /^\d{3}$/,
    formatError: 'Wrong format',
  });

  // Return true only if all fields are valid
  return (
    isNameValid &&
    isNumberValid &&
    isExpMonthValid &&
    isExpYearValid &&
    isCvcValid
  );
}

// Handle form submission
function submitForm(e) {
  // Prevent default behavior
  e.preventDefault();

  // Validate Form
  let isValid = validateForm();

  // Submit form if valid
  if (isValid) {
    // Update card info with form values
    cardInfo.name = cardName.value;
    cardInfo.number = cardNumber.value;
    cardInfo.expMonth = cardExpMonth.value;
    cardInfo.expYear = cardExpYear.value;
    cardInfo.cvc = cardCvc.value;

    // Store card info in browser cache
    sessionStorage.setItem('cardInfo', JSON.stringify(cardInfo));

    // Redirect to thank-you page
    window.location.href = 'thank-you.html';
  }
}

// Attach submit event listener to form
cardForm.addEventListener('submit', submitForm);
