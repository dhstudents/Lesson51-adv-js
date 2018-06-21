function varTest1() {
    if (true) {
      var x = 200;  // defined in a block but have function scope  
      console.log(x);  // inner
    }
    console.log(x);  // will print 200 (function scope)
}
function letTest1() {
    if (true) {
      let x = 200;   // defined in a block and have block scope   
      console.log(x);  // inner
    }
    console.log(x);  // error x is not defined
}


function varTest2() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest2() {
    let x = 1;
    if (true) {
      let x = 200;  // different variable
      console.log(x);  // inner
    }
    console.log(x);  // outer
}
// var has function scope
//varTest1();
// let has blocl scope
//letTest1();
// var definition in inner scope redefines definition in outer scope
//varTest2();
// let definition in inner scope shadows definition in outer scope
//letTest2();

