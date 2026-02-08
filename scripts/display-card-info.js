// Import UI components
import { formElements } from './dom-elements.js';
const {
  interactiveCardName,
  interactiveCardNumber,
  interactiveCardDate,
  interactiveCardCvc,
} = formElements;

// Get Card Info
const cardInfo = JSON.parse(sessionStorage.getItem('cardInfo')) || {};

// Init Card Info
function initCardInfo() {
  // Display Card Name
  interactiveCardName.textContent = cardInfo.name;

  // Display Card Number
  interactiveCardNumber.textContent = `${cardInfo.number.slice(0, 4)} ${cardInfo.number.slice(4, 8)} ${cardInfo.number.slice(8, 12)} ${cardInfo.number.slice(12, 16)}`;

  // Display Card Date
  interactiveCardDate.textContent = `${cardInfo.expMonth.slice(0, 2)}/${cardInfo.expYear.slice(0, 2)}`;

  //Display Card CVC
  interactiveCardCvc.textContent = cardInfo.cvc.slice(0, 3);
}

initCardInfo();
