let num1 = document.getElementById('num1') as HTMLInputElement;
let num2 = document.getElementById('num2') as HTMLInputElement;

let button = document.querySelector('button')!;


function add(num1:number,num2:number)
{
    return num1+num2;
}

button.addEventListener('click',()=>
{
    const vnum1 = num1.value;
    const vnum2 = num2.value;

    console.log(add(+vnum1,+vnum2));
})