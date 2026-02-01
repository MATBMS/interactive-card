// Define UI components
const interativeCardNumber = document.getElementById('interactive-card-number');
const interativeCardName = document.getElementById('interactive-card-name');
const interativeCardDate = document.getElementById('interactive-card-date');
const interativeCardCvc = document.getElementById('interactive-card-cvc');

// Get Card Info
const cardInfo = JSON.parse(localStorage.getItem('cardInfo')) || {};

// Init Card Info
function initCardInfo() {
  // Display Card Name
  interativeCardName.textContent = cardInfo.name;

  // Display Card Number
  interativeCardNumber.textContent = `${cardInfo.number.slice(0, 4)} ${cardInfo.number.slice(4, 8)} ${cardInfo.number.slice(8, 12)} ${cardInfo.number.slice(12, 16)}`;

  // Display Card Date
  interativeCardDate.textContent = `${cardInfo.expMonth.slice(0, 2)}/${cardInfo.expYear.slice(0, 2)}`;

  //Display Card CVC
  interativeCardCvc.textContent = cardInfo.Cvc.slice(0, 3);
}

initCardInfo();
