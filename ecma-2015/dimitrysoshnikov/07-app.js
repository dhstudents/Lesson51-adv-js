// global "x"
var x = 10;
 
// function "foo" is created relatively
// to the global environment
 
function foo(y) {
  var z = 30;
  console.log(x + y + z);
}

/*

// create "foo" function
 
foo = functionObject {
  code: "console.log(x + y + z);"
  environment: {x: 10, outer: null}
};

*/