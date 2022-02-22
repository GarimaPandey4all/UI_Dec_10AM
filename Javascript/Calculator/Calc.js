window.addEventListener('load', initEvents);

var firstNumber;
var secondNumber;
var result = 0;

function initEvents()
{
    firstNumber = document.getElementById("f_num");
    secondNumber = document.getElementById("s_num");

    let buttons =  document.getElementsByTagName("button");
    // loop: repeatition
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click', calc);
    }

    // document.getElementById("add").addEventListener('click', calc);
    // document.getElementById("sub").addEventListener('click', calc);
    // document.getElementById("div").addEventListener('click', calc);
    // document.getElementById("mul").addEventListener('click', calc);

    // document.getElementById("add").addEventListener('click', add);
    // document.getElementById("sub").addEventListener('click', sub);
    // document.getElementById("div").addEventListener('click', div);
    // document.getElementById("mul").addEventListener('click', mul);
}

function calc(evt)
{
    let opr = evt.srcElement.innerHTML; // +, -. /, *
    //console.log(opr);
    var expression = firstNumber.value + opr + secondNumber.value;
    result = eval(expression);
    document.getElementById("result").innerHTML = result;
}

// function add()
// {
//     // parsing: casting: Type conversion
//     result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
//     document.getElementById("result").innerHTML = result;
// }

// function sub()
// {
//     // parsing: casting: Type conversion
//     result = parseInt(firstNumber.value) - parseInt(secondNumber.value);
//     document.getElementById("result").innerHTML = result;
// }

// function div()
// {
//     // parsing: casting: Type conversion
//     result = parseInt(firstNumber.value) / parseInt(secondNumber.value);
//     document.getElementById("result").innerHTML = result;
// }

// function mul()
// {
//     // parsing: casting: Type conversion
//     result = parseInt(firstNumber.value) * parseInt(secondNumber.value);
//     document.getElementById("result").innerHTML = result;
// }