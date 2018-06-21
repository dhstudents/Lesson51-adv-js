// Execution context stack (ECS): 
// how javascript engine creates the execution context

// 1. Creation phase
//    a. create the activation object or the variable object
//       all vars
//       all function arguments
//       all inner function declaration information
//    b. Creates the scope chain:
//    c. Determines the value of this:
// 2. Execution phase
//-------------------------------------------------
function funcA(a,b) {
    var c = 3;
    var d = 2;
    d = function() {
        return a - b;
    }
}
funcA(3,2);

// for funcA 
// Creation phase
//---------------
// executeContextObj = {
//      variableObject: {} All the variable, arguments and inner function details of the funA
//      scopechain: []
//      this Value of this
//
//}
// after creation phase
//      variableObject = {
//          argumentObject: { 
//                 0: a,
//                 1: b,
//                 length: 2
//          },
//          a: 3,
//          b: 2,
//          c: undefined,
//          d: undefined in line 15 , after line 16 contains the pointer to the function definition in d
//      }
// determines the scope chain: scopechain: [local , global]

// Execution phase
//----------------
//  scan second time fill the values in the variable object (updates the values of vars)
//  execute the code
//      variableObject = {
//          argumentObject: { 
//                 0: a,
//                 1: b,
//                 length: 2
//          },
//          a: 3,
//          b: 2,
//          c: 3,
//          d: contains the pointer to the function definition in d
//      }
