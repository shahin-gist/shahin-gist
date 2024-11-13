const head1 = document.getElementById('head1');
head1.classList.add('header1');
//alert(head1.getHTML());
//head1.style.color = 'blue';
//head1.style.backgroundColor = 'red';
//head1.style.fontSize = '50';

let header2 = document.createElement('h1');
header2.innerText = "Creating header dynamically";
document.body.appendChild(header2);