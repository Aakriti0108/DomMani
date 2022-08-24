// const name='Aakriti';
// let age1=21;
// let address1='2/28 rajender nagar';

// console.log(`personal details = My name is ${name}, age1 is ${age1}, address1 is ${address1}`)
// const hello=`My name is Yash Prasad, age is 25, address is Prestige Falcon City, Bangalore`
// console.log(hello.split(','))

// const fruits=['apples','oranges','grapes'];
// fruits.push('mangoes');
// fruits.unshift('strawberries');
// console.log(fruits);
// console.log(fruits[3]);

// const person={
//     firstName:'john',
//     lastName:'doe',
//     age:30,
//     Hobbies:['music','sports','movies'],
//     address:{
//         street:'50 mains street',
//         city:'boston',
//         state:'MA'
//     }
// }
// console.log(person.Hobbies[2]);
// console.log(person.address.city);

// const {
//     firstName,lastName,age,address:{state}}=person;

//     console.log(age);
//     console.log(state);
//     const todos=[
//         {
//         id:1 ,
//         text : 'trash out trash',
//         iscompleted:true,
//     },
//     {
//         id:2 ,
//         text:'Make a meet',
//         iscompleted:true,
//     },
//     {
//         id:3 ,
//         text : 'end it ',
//         iscompleted:false,
//     },
// ];
// console.log(todos);
// for(let todo of todos)
// {
//     console.log(todo.id);
// }
// function converttemp(temperature,conversionunit)
// {
//     if(conversionunit=='K'){
//     return temperature+273;}
//     else if(conversionunit=='C'){
//     return temperature-273;}
//     else{
//     return -1;}
// }
// console.log(converttemp(300,'K'))


// function convert(temp,conv)
// {
//     return conv=='K'?temp+273:temp-273;
// }
// console.log(convert(308,'C'));

// function Student(firstName,lastName,rollNo1,sex,dob,age3)
// {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.rollNo1=rollNo1;
//     this.sex=sex;
//     this.dob=dob;   
//     this.age3=age3;
// }
// Student.prototype.agelimit=function()
// {
//     if(this.age3>18)
//     {
//         console.log(this.firstName + 'eligible')
//     }
//     else{
//         console.log(this.firstName + 'not eligible')
//     }
// }
// const Student1=new Student('john','doe','21345','male','01-09-1999','20');
// const Student2=new Student('john1','doe1','213451','male','01-09-1996','28');

// Student1.agelimit();
// Student2.agelimit();

fruits=[a,b,c,d,e];
console.log(Collections.sort(fruits));