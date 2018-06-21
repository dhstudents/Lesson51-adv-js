// Execution context stack (ECS): 
// execution context handle
var a = 10;
function functionA() {
    console.log("start function A");
    
    function functionB() {
        console.log("In function A");
    }

    functionB();
}

functionA();


console.log("Global Context");