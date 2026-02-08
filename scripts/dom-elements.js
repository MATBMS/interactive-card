// dom-elements.js - Single source of truth for all DOM elements
export const formElements = {
  // Form inputs
  cardName: document.getElementById('card-name'),
  cardNumber: document.getElementById('card-number'),
  cardExpMonth: document.getElementById('card-exp-month'),
  cardExpYear: document.getElementById('card-exp-year'),
  cardCvc: document.getElementById('card-cvc'),

  // Error messages
  cardNameError: document.getElementById('card-name-error'),
  cardNumberError: document.getElementById('card-number-error'),
  cardExpMonthError: document.getElementById('card-exp-month-error'),
  cardExpYearError: document.getElementById('card-exp-year-error'),
  cardCvcError: document.getElementById('card-cvc-error'),

  // Card preview elements
  interactiveCardName: document.getElementById('interactive-card-name'),
  interactiveCardNumber: document.getElementById('interactive-card-number'),
  interactiveCardDate: document.getElementById('interactive-card-date'),
  interactiveCardCvc: document.getElementById('interactive-card-cvc'),

  // Form itself
  cardForm: document.getElementById('submit-card'),
};
