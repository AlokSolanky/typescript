var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var button = document.querySelector('button');
var numResult = [];
var stringResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else if (typeof num1 === "string" && typeof num2 === "string")
        return num1 + num2;
}
button.addEventListener('click', function () {
    var vnum1 = num1.value;
    var vnum2 = num2.value;
    var resultadd = add(+vnum1, +vnum2);
    numResult.push(resultadd);
    console.log(resultadd);
    var resultcombined = add(vnum1, vnum2);
    stringResult.push(resultcombined);
    console.log(resultcombined);
    console.log(numResult);
    console.log(stringResult);
});
