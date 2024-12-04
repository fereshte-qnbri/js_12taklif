//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring


// Using var
function testVar() {
    var x = 10;
    if (true) {
      var x = 20; 
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
  }
  
  // Using let and const
  function testLetConst() {
    const y = 10; 
    let z = 20; 
  
    if (true) {
      let z = 30; 
      console.log(z); // Output: 30
    }
    console.log(z); // Output: 20
  }