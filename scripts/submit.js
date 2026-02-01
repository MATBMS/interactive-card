// Define UI components
const cardForm = document.getElementById('submit-card');
const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const cardExpMonth = document.getElementById('card-exp-month');
const cardExpYear = document.getElementById('card-exp-year');
const cardCvc = document.getElementById('card-cvc');

// Define card info
const cardInfo = {
  name: 'Jane Appleseed',
  number: 123456789123,
  expMonth: 1,
  expYear: 1,
  Cvc: 123,
};

// Submit form
function submitForm(e) {
  // Prevent default behavior
  e.preventDefault();

  // Submit value
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

cardForm.addEventListener('submit', submitForm);
