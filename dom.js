// console.log(document.URL);
// console.log(document.body);
// var headerTitle=document.getElementById('header-title');
// headerTitle.textContent='Hello';
// headerTitle.innerText='tata';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// var header=document.getElementsByClassName('main-header');
// headerTitle.style.borderBottom='solid 30px yellow';
// console.log(headerTitle.style.borderBottom);
// var items=document.getElementsByClassName('list-group-item');
// console.log(items[2]);
// items[2].style.background='green';

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
// }

var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor ='yellow';
for(let i=0;i<li.length;i++)
{
    li[i].style.backgroundColor="#f8f8f8";
}
