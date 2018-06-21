// Global environment (GE)
 
var x = 10;
 
function foo(y) {
 
  // environment of "foo" function (E1)
 
  var z = 30;
 
  function bar(q) {
    // environment of "bar" function (E2)
    return x + y + z + q;
  }
 
  // return "bar" to the outside
  return bar;
 
}
 
var bar = foo(20);
 
bar(40); // 100