// environment frames
var bar = (function foo() {
    var x = 10;
    var y = 20;
    return function bar() {
      return x + y;
    };
  })();
   
  bar(); // 30