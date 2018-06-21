// First-class functions
// may participate as a normal data
// 1. be created literally at runtime
// 2. be passed as an argument
// 3. be returned as a value from another function

// create a function expression
// dynamically at runtime and
// bind it to "foo" identifier

var foo = function () {
  console.log("foo");
};

// pass it to another function,
// which in turn is also created
// at runtime and called immediately
// right after the creation; result
// of this function is again bound
// to the "foo" identifier

foo = (function (funArg) {

  // activate the "foo" function
  funArg(); // "foo"

  // and return it back as a value
  return funArg;

})(foo);