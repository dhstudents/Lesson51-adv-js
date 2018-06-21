var x = 10;
 
(function foo(y) {
   
  // use of free-bound "x" variable
  console.log(x);
 
  // own-bound "y" variable
  console.log(y); // 20
   
  // and free-unbound variable "z"
  console.log(z); // ReferenceError: "z" is not defined
 
})(20);