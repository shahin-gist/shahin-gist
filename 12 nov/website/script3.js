let head1 = document.getElementById('head1');

head1.classList.add('header1');
head1.innerHTML="Adding Two Numbers".toUpperCase();

const input1 = document.createElement('input');
input1.id= 'input1';
input1.classList.add('input1');
document.body.append(input1);

const input2 = document.createElement('input');
input2.id= 'input2';
document.body.append(input2);

const button1 = document.createElement('button');
button1.innerText = "Add two numbers".toUpperCase();
document.body.append(button1);


let inputFields = document.getElementsByTagName('input');
for(let item in inputFields){
    console.log
}

document.getElementById('input1');
document.getElementById('input2');



button1.addEventListener('click', function click(){
    let inputValue1 = document.getElementById('input1').value;
    let inputValue2 = document.getElementById('input2').value;
    let addResult= parseInt(inputValue1)+ parseInt(inputValue2);
    let str = 'Summation is: '+ addResult;
    let resultShow = document.createElement('h2');
    resultShow.innerText = str;
    document.body.append(resultShow);
})

