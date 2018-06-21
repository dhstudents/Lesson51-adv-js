// Global environment (GE)
 
var x = 10;
 
function foo() {
 
  // "foo" environment (E1)
 
  var x = 20;
  var y = 30;
 
  console.log(x + y);
 
}
 
function bar() {
   
  // "bar" environment (E2)
 
  var z = 40;
 
  console.log(x + z);
}

// Thus in pseudo-code:
// // global
// GE = {
//   x: 10,
//   outer: null
// };
 
// // foo
// E1 = {
//   x: 20,
//   y: 30,
//   outer: GE
// };
 
// // bar
// E2 = {
//   z: 40,
//   outer: GE
// };