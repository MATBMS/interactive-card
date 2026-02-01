// Define UI components
const interativeCardNumber = document.getElementById('interactive-card-number');
const interativeCardName = document.getElementById('interactive-card-name');
const interativeCardDate = document.getElementById('interactive-card-date');
const interativeCardCvc = document.getElementById('interactive-card-cvc');

// Update card number
function updateCardNumber() {
  let cardNumberArr = [];
  if (cardNumber.value.length > 0) {
    cardNumberArr.push(cardNumber.value.slice(0, 4));
  }
  if (cardNumber.value.length > 4) {
    cardNumberArr.push(cardNumber.value.slice(4, 8));
  }
  if (cardNumber.value.length > 8) {
    cardNumberArr.push(cardNumber.value.slice(8, 12));
  }
  if (cardNumber.value.length > 12) {
    cardNumberArr.push(cardNumber.value.slice(12, 16));
  }
  interativeCardNumber.textContent = cardNumberArr.join(' ');
}

cardNumber.addEventListener('input', updateCardNumber);

// Update card name
function updateCardName() {
  interativeCardName.textContent = cardName.value;
}

cardName.addEventListener('input', updateCardName);

// Update card date
function updateCardDate() {
  interativeCardDate.textContent = `${cardExpMonth.value.slice(0, 2) || '00'}/${cardExpYear.value.slice(0, 2) || '00'}`;
}

cardExpMonth.addEventListener('input', updateCardDate);
cardExpYear.addEventListener('input', updateCardDate);

// Update card CVC
function updateCardCvc() {
  interativeCardCvc.textContent = cardCvc.value.slice(0, 3);
}

cardCvc.addEventListener('input', updateCardCvc);
