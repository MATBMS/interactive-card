const cardBack = document.getElementById('card-back');

cardCvc.addEventListener('focus', function () {
  cardBack.classList.add('putAbove');
});

cardCvc.addEventListener('blur', function () {
  cardBack.classList.remove('putAbove');
});
