console.log('Do it with var')
for (var i = 0 ; i < 5 ; i++) {
    setTimeout( ()=> {console.log(i)} , 0);
}

console.log('Now do it with let')
for (let i = 0 ; i < 5 ; i++) {
    setTimeout( ()=> {console.log(i)} , 0);
}
console.log('callbacks will start here');


