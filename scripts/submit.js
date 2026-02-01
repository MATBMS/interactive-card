// Define UI components
const cardForm = document.getElementById('submit-card');
const cardName = document.getElementById('card-name');
const cardNameError = document.getElementById('card-name-error');
const cardNumber = document.getElementById('card-number');
const cardNumberError = document.getElementById('card-number-error');
const cardExpMonth = document.getElementById('card-exp-month');
const cardExpMonthError = document.getElementById('card-exp-month-error');
const cardExpYear = document.getElementById('card-exp-year');
const cardExpYearError = document.getElementById('card-exp-year-error');
const cardCvc = document.getElementById('card-cvc');
const cardCvcError = document.getElementById('card-cvc-error');

// Define card info
const cardInfo = {
  name: 'Jane Appleseed',
  number: 123456789123,
  expMonth: 1,
  expYear: 1,
  Cvc: 123,
};

// Show error message
function showError(input, errorElement, message) {
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', 'true');

  errorElement.textContent = message;
  // errorElement.classList.add('active');
}

// Clear error message
function clearError(input, errorElement) {
  input.classList.remove('invalid');
  input.setAttribute('aria-invalid', 'false');

  errorElement.textContent = '';
  // errorElement.classList.remove('active');
}

// Validate Form
function validateForm() {
  // Validate Card Name
  let isNameValid = false;
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;

  if (cardName.value === '') {
    showError(cardName, cardNameError, `Can't be blank`);
  } else if (!nameRegex.test(cardName.value)) {
    showError(cardName, cardNameError, `Wrong format`);
  } else {
    clearError(cardName, cardNameError);
    isNameValid = true;
  }

  // Validate Card Number
  let isNumberValid = false;
  let cardNumberFormatted = `${cardNumber.value.slice(0, 4)} ${cardNumber.value.slice(4, 8)} ${cardNumber.value.slice(8, 12)} ${cardNumber.value.slice(12, 16)}`;
  const cardNumberRegex = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;

  if (cardNumber.value === '') {
    showError(cardNumber, cardNumberError, `Can't be blank`);
  } else if (cardNumber.value.length !== 16) {
    showError(cardNumber, cardNumberError, `Should be 16 numbers`);
  } else if (!cardNumberRegex.test(cardNumberFormatted)) {
    showError(cardNumber, cardNumberError, `Wrong format, numbers only`);
  } else {
    clearError(cardNumber, cardNumberError);
    isNumberValid = true;
  }

  // Validate Card Exp MM
  let isExpMonthValid = false;
  const cardExpMonthRegex = /^[0-9]{2}$/;
  const cardExpMonthNumber = Number(cardExpMonth.value);

  if (cardExpMonth.value === '') {
    showError(cardExpMonth, cardExpMonthError, `Can't be blank`);
  } else if (!cardExpMonthRegex.test(cardExpMonth.value)) {
    showError(cardExpMonth, cardExpMonthError, `Wrong format, numbers only`);
  } else if (cardExpMonthNumber <= 0 || cardExpMonthNumber > 12) {
    showError(
      cardExpMonth,
      cardExpMonthError,
      `Should be a number between 1 and 12`,
    );
  } else {
    clearError(cardExpMonth, cardExpMonthError);
    isExpMonthValid = true;
  }

  // Validate Card Exp YY
  let isExpYearValid = false;
  const cardExpYearRegex = /^[0-9]{2}$/;
  const cardExpYearNumber = Number(cardExpYear.value);

  if (cardExpYear.value === '') {
    showError(cardExpYear, cardExpYearError, `Can't be blank`);
  } else if (!cardExpYearRegex.test(cardExpYear.value)) {
    showError(cardExpYear, cardExpYearError, `Wrong format, numbers only`);
  } else if (cardExpYearNumber <= 0 || cardExpYearNumber > 99) {
    showError(
      cardExpYear,
      cardExpYearError,
      `Should be a number between 1 and 99`,
    );
  } else {
    clearError(cardExpYear, cardExpYearError);
    isExpYearValid = true;
  }

  // Validate Card Exp CVC
  let isCvcValid = false;
  const cardCvcRegex = /^[0-9]{3}$/;
  const cardCvcNumber = Number(cardCvc.value);

  if (cardCvc.value === '') {
    showError(cardCvc, cardCvcError, `Can't be blank`);
  } else if (!cardCvcRegex.test(cardCvc.value)) {
    showError(cardCvc, cardCvcError, `Wrong format`);
  } else if (cardCvcNumber <= 100 || cardCvcNumber > 999) {
    showError(cardCvc, cardCvcError, `Should be a number between 100 and 999`);
  } else {
    clearError(cardCvc, cardCvcError);
    isCvcValid = true;
  }

  // Go -No Go
  return (
    isNameValid &&
    isNumberValid &&
    isExpMonthValid &&
    isExpYearValid &&
    isCvcValid
  );
}

// Submit form
function submitForm(e) {
  // Prevent default behavior
  e.preventDefault();

  // Validate Form
  let isValid = validateForm();

  // Submit form if valid
  if (isValid) {
    cardInfo.name = cardName.value;
    cardInfo.number = cardNumber.value;
    cardInfo.expMonth = cardExpMonth.value;
    cardInfo.expYear = cardExpYear.value;
    cardInfo.Cvc = cardCvc.value;

    // Store card info in browser cache
    localStorage.setItem('cardInfo', JSON.stringify(cardInfo));

    // Redirect
    window.location.href = 'thank-you.html';
  }
}

cardForm.addEventListener('submit', submitForm);
