
// function Person(firstname,lastname,rollno,sex,dob)
// {
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.rollno=rollno;
//     this.sex=sex;
//     this.dob=new Date(dob);  
// }
// const Person1=new Person('aakriti','yadav','3124','male','03-04-1999');
// const Person2=new Person('akshit','verma','1234','female','09-08-1998');

//    Person.prototype.getBirthYear=function()
//  {
//     return this.dob.getFullYear();
//  }
//   Person.prototype.getfullName=function()
//   {
//     return `${this.firstname} ${this.lastname}`;
//   }
//   console.log(Person1.getBirthYear()); 
//   console.log(Person2.getfullName());

// class student{
//     constructor(firstname,lastname,rollno,sex,dob)
//     {
//         this.firstname=firstname;
//       this.lastname=lastname;
//        this.rollno=rollno;
//       this.sex=sex;
//       this.dob=new Date(dob); 
//     }
//  getBirthYear()
//  {
//     return  this.dob.getFullYear();
//   }
//   getfullName()
//   {
//   return `${this.firstname} ${this.lastname}`; 
//   }
// }
// const student1=new student('aakriti','yadav','3124','male','03-04-1999');
// const student2=new student('akshit','verma','1234','female','09-08-1998');

// console.log(student1.getBirthYear());
//   console.log(student2.getfullName()); 
  
// class user
// {
//   static count=0;
//   constructor(username,email,password)
//   {
//     this.username=username;
//     this.email=email;
//     this.password=password;
//     user.count++;
//   }
//   printuserdefine()
//   {
//     console.log('print no of user'+ user.count);
//   }
//   register()
//   {
//     console.log(this.username+' is now register')
//   }
// }
// let bob = new user('bob','bob@gmail.com','12345');
// let bob1 = new user('bob1','bob@gmail.com','12345');
// let bob2 = new user('bob2','bob@gmail.com','12345');
// let bob3 = new user('bob3','bob@gmail.com','12345');
// let bob4= new user('bob4','bob@gmail.com','12345');
// let bob5= new user('bob5','bob@gmail.com','12345');
// bob.register();
// bob.printuserdefine();

// class member extends user{
//   constructor(username,email,password,memberpackage)
//   {
//     super(username,email,password)
//     this.memberpackage=memberpackage;
//   }
//   getpackage()
//   {
//     console.log(this.username+' is subscribed now')
//   }
// }
//   const mike=new member('mike','mike@gmail.com','12345');
//   mike.getpackage();
//  mike.register();


// function membershipactivetilldate(date)
// {
//   this.date=new Date(date);
// }
// let mydate = new Date(1979,03,08,45,10,12);
// console.log(mydate);
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   static countUsers() {
//     console.log("There are 50 users");
//   }

//   register() {
//     console.log(this.username + " is now registered");
//   }
// }

// class Member extends User 
// {
//   constructor(username, email, password, memberpackage) 
//   {
//     super(username, email, password);
//     this.package = memberpackage;
//     let todaysDate = new Date();
//     const membershipactivetillYear = todaysDate.getFullYear();
//     const membershipactivetillMonth = todaysDate.getMonth();
//     const membershipactivetillDay = todaysDate.getDay();
//     this.membershipactivetilldate = new Date(
//       membershipactivetillYear,
//       membershipactivetillMonth,
//       membershipactivetillDay
//     );
//   }

//   renewMembership() {
//     const membershipactivetillYear = this.membershipactivetilldate.getFullYear();
//     const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
//     const membershipactivetillDay = this.membershipactivetilldate.getDay();

//     this.membershipactivetilldate = new Date(
//       membershipactivetillYear,
//       membershipactivetillMonth + 1, //just increase the month by 1
//       membershipactivetillDay
//     );
//   }

//   subscriptionActiveTill() {
//     console.log(
//       this.username +
//         " is scubscribed to " +
//         this.package +
//         "uptill" +
//         this.membershipactivetilldate
//     );
//   }

//   getPackage() {
//     console.log(this.username + " is scubscribed to " + this.package);
//   }
// }

// const mike = new Member("mike", "abc@gmail.com", "pass123", "Standard Packege");

// mike.getPackage();

// mike.renewMembership();
// mike.subscriptionActiveTill();
// console.log(document.querySelector('.container'));
// const li=document.querySelector('.items');
// li.firstElementChild.textContent='HELLO';
// li.firstElementChild.style.color='green';
// li.children[1].style.color='yellow';
// console.log(li);

// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e) => {
//   e.preventDefault()
//   document.querySelector('#my-form').style.background='pink';})

//   const btn1 = document.querySelector('.btn');

// btn.addEventListener('mouseover',(e) => {
//   e.preventDefault()
//   document.querySelector('#my-form').style.background='yellow';})

//   const btn2 = document.querySelector('.btn');

// btn.addEventListener('mouseout',(e) => {
//   e.preventDefault()
//   document.querySelector('#my-form').style.background='brown';})

const myform=document.querySelector('#my-form');
const namein=document.querySelector('#name');
const emailin=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userin=document.querySelector('#users');

 myform.addEventListener('submit', onsubmit);

 function onsubmit(e)
 {
  e.preventDefault();
  if(namein.value ===''||emailin.value ==='')
  {
   msg.innerHTML = 'please enter value' ;
  }
 else
 {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${namein.value} : ${emailin.value}`));
  userin.appendChild(li);
  namein.value();
  emailin.value();
}
}