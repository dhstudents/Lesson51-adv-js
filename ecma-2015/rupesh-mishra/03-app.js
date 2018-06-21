// Complete Example
a = 1;  // do nothing 

var b = 2;  // create b in varaible object value undefined

cFunc = function(e) { // put function in the heap create cFunc var and pointer inside it
    var c = 10;
    var d = 15;
    
    a = 3;  //do nothing
    
    function dFunc() {
        var f = 5;
    }
    
    dFunc();
}

cFunc(10);
//  https://hackernoon.com/execution-context-in-javascript-319dd72e8e2c

// Global Execution Context object after the creation phase stage:
// globalExecutionContextObj = {
//     activationbj: {
//         argumentObj : {
//             length:0
//         },
//         b: undefined,
//         cFunc: Pointer to the function definition
//     },
//     scopeChain: [GLobal execution context variable object],
//     this: value of this
//   }

// Execution phase
// scan again update the variable value 
// execute the code

// globalExecutionContextObj = {
//     activationbj: {
//         argumentObj : {
//             length:0
//         },
//         b: 2,
//         cFunc: Pointer to the function definition,
//         a: 1
//     },
//     scopeChain: [GLobal execution context variable object],
//     this: value of this
//   }




a = 1;  // no a add it and initialize to 1

var b = 2;  // update b with 2

cFunc = function(e) { // 
    var c = 10;
    var d = 15;
    
    a = 3;  //
    
    function dFunc() { // move next
        var f = 5;
    }
    
    dFunc(); 
}

cFunc(10); // create execution context for dFunc

// cFuncExecutionContextObj = {
//     activationbj: {
//         argumentObj : {
//             0: e,
//             length:1
//         },
//         e: 10,
//         c: undefined,
//         d: undefined
//         dFunc: Pointer to the function definition,
//     },
//     scopeChain: [cFunc variable object, Global exection context variable object],
//     this: value of this
//   }

