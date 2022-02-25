window.addEventListener('load', initEvents);

var username;
var usermail;
var pwd;
var span;

function initEvents()
{
    username = document.querySelector("#username");
    usermail = document.querySelector("#usermail");
    pwd = document.querySelector("#pwd");
    span = document.querySelectorAll("span");

    username.addEventListener('blur', validateUsername);
    usermail.addEventListener('blur', validateUsermail);
}

function validateUsername()
{
    let text = username.value;
    text = text.trim();
    blankCheck(text, 0);
}

function validateUsermail()
{
    let text = usermail.value;

    // "        garima         ";
    // "     ";

    text = text.trim();
    blankCheck(text, 1);

    // let pattern = /([a-z][0-9]\w+[@]\w+[.]\w+)/;
    let pattern = /([a-z][0-9]\w+[@]\w+[.]+[a-z]{2,3}$)/;
    let result = pattern.test(text);

    console.log(result);

    if(result)
    {
        span[1].innerHTML = 'Valid Email';
    }
    else {
        span[1].innerHTML = "Not Valid Email";
    }

}

function blankCheck(text, id)
{
    if(text == "" || text.length == 0)
    {
        span[id].innerHTML = "Please fill out this field" ;
    }
    else {
        span[id].innerHTML = "";
    }
}