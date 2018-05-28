let numberone = 36325;
let numbertwo = 9824;
let numberthree = 777;

function add() {
    return numbertwo + numberthree;
}

function myFunction(){
    document.getElementById("sumar").innerHTML = add();
}

function multiply () {
    return add * numberone;
}
function myFunctiontwo() {
    document.getElementById("multiplicar").innerHTML = multiply(); 

}