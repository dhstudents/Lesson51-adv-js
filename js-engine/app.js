var counter = 0;
function Look() {
    console.log('Look');
    //throw new Error;
    console.log(myVar); // Error: variable not defined
    function AnotherLook() {
        console.log('Look SkyWalker')
    }
}
function Book(){
    var innercounter = 0;
    Look();
}
Book()