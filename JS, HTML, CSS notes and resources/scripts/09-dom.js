//What is DOM? Dom combines JS and HTML together, it gives JS full control of the webpage.

console.log(document.querySelector('button').innerHTML); // Will console.log the first button hello. querySelector can select whatever you want in the code.
document.querySelector('button')
  .innerHTML = 'Changed'; // Will change the button name to 'Changed'.

const buttonElement = document.querySelector('.js-button'); // Will save the button with class="js-button"'s label information into buttonElement instead of the first button.
console.log(buttonElement);

/*
console.log(document.title); // Will console.log the <title>, which title is Document Object Model(DOM) in this situation.
document.title = 'Changed'; // The title property is linked to the title of the tab (search engine's).

console.log(document.body); // Will console.log the <body> out.
console.log(typeof document.body);

console.log(document.body.innerHTML) // The innerHTML controls all of the HTML inside the <body>.
document.body.innerHTML = '<button>Changed</button>'; // Can change the <button> text to 'Changed'.
*/