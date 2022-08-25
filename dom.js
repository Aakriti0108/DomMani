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

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor ='yellow';
// for(let i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor="#ff0000";
// }
// let header=document.querySelector('#header-title');
// header.style.borderBottom='solid 2px #ccc'
// let input=document.querySelector('input');
// input.style.color='red'
// input.value='push me'

// let submit=document.querySelector('input[type="submit"]')
// submit.value='End all these'

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem =document.querySelector('.list-group-item:last-child')
// lastitem.style.color='blue';

// var seconditem=document.querySelector('.list-group-item:nth-child(2)')
// seconditem.style.color='yellow';

// var third=document.querySelector('.list-group-item:nth-child(3)')
// third.style.color='green';

var seconditem=document.querySelector('.list-group-item:nth-child(2)')
seconditem.style.backgroundColor='green';

 var third=document.querySelector('.list-group-item:nth-child(3)')
 third.style.color='rgba(0,0,0,0)';

 let seconditem2 =document.querySelectorAll('li:nth-child(2)');
 let even =document.querySelectorAll('li:nth-child(even)')
 let odd=document.querySelectorAll('li:nth-child(odd)')
 for(let i=0;i<even.length;i++)
 {
    even[i].style.background='green';
   
    odd[i].style.backgroundColor='yellow';
    seconditem2[i].style.backgroundColor='red';
 }

 
