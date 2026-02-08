// Import DOM elements
import { formElements } from './dom-elements.js';

const {
  cardName,
  cardNumber,
  cardExpMonth,
  cardExpYear,
  cardCvc,
  interactiveCardName,
  interactiveCardNumber,
  interactiveCardDate,
  interactiveCardCvc,
} = formElements;

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
  interactiveCardNumber.textContent = cardNumberArr.join(' ');
}

cardNumber.addEventListener('input', updateCardNumber);

// Update card name
function updateCardName() {
  interactiveCardName.textContent = cardName.value;
}

cardName.addEventListener('input', updateCardName);

// Update card date
function updateCardDate() {
  interactiveCardDate.textContent = `${cardExpMonth.value.slice(0, 2) || '00'}/${cardExpYear.value.slice(0, 2) || '00'}`;
}

cardExpMonth.addEventListener('input', updateCardDate);
cardExpYear.addEventListener('input', updateCardDate);

// Update card CVC
function updateCardCvc() {
  interactiveCardCvc.textContent = cardCvc.value.slice(0, 3);
}

cardCvc.addEventListener('input', updateCardCvc);
