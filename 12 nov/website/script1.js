
var btn = document.createElement("button");
btn.id= 'btn';
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

document.getElementById('btn');

function fnc(){
    btn.style.color="blue"
    btn.style.backgroundColor="pink"
    btn.style.width="150px"
    btn.style.height="150px"
}
document.addEventListener('click', fnc);
