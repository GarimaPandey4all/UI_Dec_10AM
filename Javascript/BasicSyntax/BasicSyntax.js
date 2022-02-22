window.addEventListener('load', initEvents);

function initEvents()
{
    document.getElementById("btn").addEventListener('click', showName);
}

// event binding
// document.getElementById("btn").addEventListener('click', showName);

function showName()
{
    // var let
    let username = document.getElementById("box_1").value;
   // document.getElementById("result").innerHTML += username;
   document.getElementById("result").innerHTML = username;
}