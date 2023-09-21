//Why functions? Functions can help us save a lot of typing time and helps our script look more pretty. Functions can be used more than one time. Similar or exactly same scripts can be put inside the function. Similar scripts can also use parameters to change the different places to let the script be useful in the situations.

function function1() {
  console.log('hello');
  console.log(2 + 2);
}

function1();

function calculateTax(cost, taxPercent = 0.1) {
  console.log(taxPercent);
  console.log(cost * taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000);