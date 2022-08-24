console.log(document.URL);
console.log(document.body);
var headerTitle=document.getElementById('header-title');
headerTitle.textContent='Hello';
headerTitle.innerText='tata';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
var header=document.getElementsByClassName('main-header');
headerTitle.style.borderBottom='solid 30px yellow';
console.log(headerTitle.style.borderBottom);
var items=document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].style.fontWeight='bold';
items[1].style.color='pink';

for(let i=0;i<items.length;i++)
{
    items[i].style.background="#f4f4f4";
}