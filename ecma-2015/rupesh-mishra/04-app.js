// Scope Chain:
a = 1;

var b = 2;

cFunc = function(e) {
  var c = 10;
  var d = 15;
  
  console.log(c);
  console.log(a); 
  
  function dFunc() {
    var f = 5;
    console.log(f)
    console.log(c);
    console.log(a); 
  }
  
  dFunc();
//   Scope chain of dFunc = [
//                            dFunc variable object, 
//                            cFunc variable object,
//                            Global execution context variable object
//                          ]
} 

cFunc(10);
// Scope chain of cFunc = [ 
//                           cFunc variable object, 
//                           Global Execution Context variable object
//                        ]
