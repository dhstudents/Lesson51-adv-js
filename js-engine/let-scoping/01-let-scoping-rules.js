//https://stackoverflow.com/questions/21726948/declaring-a-javascript-variable-twice-in-same-scope-is-it-an-issue
// declaring twice in the same scope (function)
function varTest() {
  var x = 1;
  console.log(a);
  x = 1;
  if (true) {
    var x = 2;  // same variable! 
    var x = 2;  // same variable! no problem
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

// declaring twice in the same scope (block)
function letTest1() {
  let x = 1;  // function/local scope (outer block)
  if (true) {
    let x;// = 2;  // block scope creates different variable 
   // let x = 200;  // with let once again throw's an error
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

function letTest2() {
  let x = 1;  // function/local scope (outer block)
  if (true) {
    let x;// = 2;  // block scope creates different variable 
    x = 200;  // refers  inner let 
    console.log(x);  // 2
  }
  console.log(x);  // 1
}


function letTest2() {
  let x = 1;  // function/local scope (outer block)
  if (true) {
    x = 200;  // without inner let referes to function block scope
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

//letTest2();
letTest3();