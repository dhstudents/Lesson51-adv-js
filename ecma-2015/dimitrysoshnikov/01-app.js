1
2
3
4
5
6
7
//http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/
var x = 10;
var y = 20;
 
function foo() {
  console.log(x, y);
}
 
foo(); // 10, 20
 
function bar() {
  var y = 30;
  console.log(x, y); // 10, 30
  foo(); // 10, 20
}
 
bar();