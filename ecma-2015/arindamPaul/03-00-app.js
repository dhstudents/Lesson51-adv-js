// implicit closure
var data = "My Data!";
setTimeout( function() {
    console.log(data);
},3000)

// explicit closure
function makeAdder(n) {
    var inc = n;
    var sum = 0;
    return function add() {
        sum = sum + inc;
        return sum;
    };
}

var addr3 = makeAdder(3);