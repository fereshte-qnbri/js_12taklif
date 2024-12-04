// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function outerFunc(num1, num2) {
    function innerFunc(a, b) {
      return a * b;
    }
  
    return innerFunc(num1, num2);
  }
  
  const result = outerFunc(5, 3);
  console.log(result); 