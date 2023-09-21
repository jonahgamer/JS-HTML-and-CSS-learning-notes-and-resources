 /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

      //Why objects? Objects let us group and use mutiple values together. Dot Notation or Bracket Notation? Use Dot Notation by default. For properties that don't work, use Bracket Notation.

      /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

      //opened a object 'product'
      const product = {
        //adding two new properties to 'product', 'togo' and 'price'
        name: 'togo', 
        price: 1
      };

      console.log(product); //printing out the whole product
      console.log(product.name); //printing out the 'name' inside 'product', the name is togo
      console.log(product.price); //printing out the 'price inside 'product', the price is 1

      product.name = 'stoobid togo'; //changes the 'name' in 'product' to 'stoobid togo'
      console.log(product);

      product.newProperty = true; //instantly adding 'newProperty' to 'product'
      console.log(product);

      delete product.newProperty; //deleting 'newProperty' in 'product'
      console.log(product);

      const product2 = {

        name: 'shirt',
       'delivery-time': '1 day',
        rating: {
          //Nested Object (an object inside a object)
          stars: 4.5,
          count: 87
        },
        fun: function function1() {
          //This saves a function inside a object
          console.log('function inside the object');
        }

      };

      console.log(product2);
      console.log(product2.name);
      console.log(product2['name']); //using Bracket Notation to print out 'name' in 'product2'

      //Bracket Notation lets us use properties that don't work with dot notation

      console.log(product2['delivery-time']); //Can't use Dot Notation here because "delevery'-'time" has a minus sign, using Bracket Notation will avoid this problem
      console.log(product2.rating.count); //This will get the 'count' inside the 'rating' in 'product2'
      product2.fun(); //Will fun the 'fun' function inside the object, which is 'function inside the object'

      //function inside object = Method. Examples: console.log, which console is just a object; log is a function that saved inside the console object, this is a method. 

      /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

      //Two built-in objects: JSON and localStorage.

      //JSON = JS Object Notation, a syntax, similar to JS object but has less features. Does not support functions. Why JSON? JSON syntax is more universal than JS syntax. We use JSON when we send data between computers and store data. JSON object helps us to convert a JS object to JSON.

      console.log(JSON.stringify(product2)); //'JSON.stringfly' will convert product2 (object) to JSON (string). Will display by JSON Syntax.

      const jsonString = JSON.stringify(product2)
      console.log(JSON.parse(jsonString)); //'JSON.parse' will turn the 'jsonString'(string) back into a JS (object).

      //localStorage is used to save values more permanently (similar to variables). Variables will be deleted or reseted when refreshing of closing the page (The stats of wins, losses and ties in rock paper scissors will be reseted to 0) while Local storage doesn't get deleted when we refresh the page. Local storage only supports strings.

      /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

      //How localStorage uses with JSON: Need to convert a object to a string by JSONstringify to store in localStorage. When need to use the string, convert it back to object by JSON.parse and then can print out. The above two lines are example.

      //localStorage.setItem('score', JSON.stringify(score)); changes object to string
      //let score = JSON.parse(localStorage.getItem('score')); changes string to object

      /*What is null and undefined? null is similar to undefined, both represent something doesn't have a value.
      null vs undefined
      null = intentionally want something to be empty*/  
      
      /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

      //What is Auto-Boxing? Auto-boxing wraps 'hello' (the 2 examples below) to a special object. This object has the property length and method to uppercase. Auto-Boxing is a property and method of strings since strings don't have them. Auto-Boxing also works with other types of values like numbers and booleans but not working with null and undefined.

      console.log('hello'.length); //the length of 'hello', output: 5.
      console.log('hello'.toUpperCase()); //will capitalize 'hello', output: HELLO.

      /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

      //shortcuts for objects

      const object1 = {
        message: 'Good job!',
        price: 799,
        tobo: 'haha'
      };

      // The two things above is the same.
      // const message = object1.message;
      const { message } = object1;

      const { tobo, price } = object1; // Can add more than one property in this shortcut.
      console.log(message);
      console.log(price);
      console.log(tobo);
      
      const object2 = {

        // Both does the same thing.
        // message: message | //will put 'Good job!' into object2.
        message, // Shorthand property, can use when the property and the variable name are the same.
            
        // These two codes does the same thing, function function1 can be removed.
        /*method: function function1() {
          console.log('method');
        }*/
        method() {
          console.log('method');
        }

      };
      
      console.log(object2);
      object2.method(); // This will run the code in the function and display 'method'.

      /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/