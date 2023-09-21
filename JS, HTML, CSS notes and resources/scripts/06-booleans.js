console.log(3 > 5 - 5)
      console.log(5 === '5.00');

      //false: condition
      if (false) {
        console.log('hello');
      } else {
        console.log('else');
      }

      const age = 15;

      if (age >= 16) {
        console.log('You can drive');
        console.log('Congrats');
      } else if(age >= 14) {
        console.log('Almost there!');
      } else {
        console.log('You cannot drive');
      }

      if (0) {
        console.log('truthy');
      }

      const cartQuantity = 5;

      if (cartQuantity) {
        console.log('cart has products');
      }

      console.log(!0);

      console.log('text' / 5);

      let variable1;
      console.log(variable1);
      

      //3 shortcuts of 'if' statements
      
      //a shortcut of: let result; if(condition) {result = 'truthy'} else {result = 'falsy'}
      const result = false ? 'truthy' : 'falsy';
      console.log(result);

      //below two are shortcut of: let message; if(condition) {message = 'hello';}      
      false && console.log('hello');

      const message = 5 && 'hello';
      console.log(message);

      //a shortcut of: let currency; if(!condition) {currency = 'USD';}
      const currency = 'EUR' || 'USD';
      console.log(currency);