// A project using dom and css to finish:). <style></style> lets us write CSS code.

String(25) // Convert it the the type of string
console.log('25' - 5); // Will calculate 25 - 5 by itself. JS will automatically convert the string into a number if the string only contains a number and we do -*/ (not in +).
console.log('25' + 5); // Can't calculate by itself, will console.log 255.

window.document;
window.console.log('window');
// window.alert('togo gay');
// All things are inside the window so we can type window first.

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value); // Number can let it convert to the type of number.

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText /*Inner text will just give the text inside 'Subscribe', not spaces.*/ === 'Subscribe' ) {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed'); // Adds a class 'is-subscribed' to the subscribe button.
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}