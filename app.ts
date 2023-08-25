let num1 = document.getElementById('num1') as HTMLInputElement;
let num2 = document.getElementById('num2') as HTMLInputElement;

let button = document.querySelector('button')!;

const numResult : number[] = [];
const stringResult :string [] = [];

type num1type = number | string;
interface num2type{
    val: number
}
function add(num1:num1type,num2:number | string)
{
    if(typeof num1==="number" && typeof num2 === "number")
    return num1+num2;
    else if(typeof num1==="string" && typeof num2 === "string")
    return num1+num2;
}
button.addEventListener('click',()=>
{
    const vnum1 = num1.value;
    const vnum2 = num2.value;

    const resultadd = add(+vnum1,+vnum2)
    numResult.push(resultadd as number);
    console.log(resultadd);
    const resultcombined = add(vnum1,vnum2)
    stringResult.push(resultcombined as string);
    console.log(resultcombined);

    console.log(numResult);
    console.log(stringResult);
})