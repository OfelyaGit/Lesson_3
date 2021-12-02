
// //Primitive Types

// let name = "John";
// let admin =name;
// alert (admin);

// let planetName = "Earth"
// let CurrentVisitor = "Ann"



// // What will be output of i and n?

// let i =10;
// let n = i++ % 5; //0

// //Swap two variables 

// let a = 10,
// b = 3;
// [a,b]=[b,a];

// console.log(a,b);// 3, 10

// //OR 

// let num = a;
// a = b;
// b = num;
// console.log(a,b);// 3, 10


// //Swap two variables without using the third one
// let a = 10,
// b = 3;
// [a,b]=[b,a];

// console.log(a,b);// 3, 10

// //README.md

// //Data Types // What is the output of the script?

// let name = "Ann";
// alert (`hello ${1}`); //hello 1
// alert (`hello ${"name"}`); //hello name
// alert (`hello ${name}`); //hello Ann

// //Data Types // What will be the result for these expressions?

// 5 > 4; //true
// "apple" > "pineapple";//false
// "2" > "12" //true քանի որ "2"<"1"
// undefined == null //true
// undefined === null //false (Type-ն էլ է ստուգում)
// null == "\n0\n" //false, null-ը տիպը undedined է
// null === + "\n0\n" //false տարբեր type-եր են


// //Logic operators 
// //What's the result of OR?

// alert (null || 2 || undefined) //2, միակ true-ն է

// alert ( alert(1) || 2 || alert(3))// 2,միակ true-ն է, alert is undefined

// //What is the result of AND?

// alert (1 && null && 2) // null, առաջին և այս դեպքում միակ falsy-ն է

// alert ( alert(1)  &&  alert(2) );/*1, undefined, քանի որ alert ֆունկցիան undefined տիպի է, այսինքն false է, 
//                                  alert(1)-ը առաջին falsy-ն է, որը արտածում է 1 արժեքը*/

// //The result of OR AND OR    

// alert( null || 2 && 3 || 4);/*  3, alert( false || true || true), կամի դեպքում վերցնում է առաջին true-ն,
//                              իսկ &&-ից վերցնում է վերջին truen, որը 3-ն է*/


// //Check the range between

// //Write an if condition to check that age is between 14 and 90 inclusively.

// let age1 = 21;
// if (age1 >= 14 && age1 <= 90){
// alert("age is 21")
// }else alert(false);


// //Check the range outside

// /*Write an if condition to check that age is NOT between 14 and 90 inclusively. 
// Create two variants: the first one using NOT !, the second one – without it.*/

// //without !
// let age2 = 25;
//  if (age2 <= 14 || age2 >=90 ){
//      alert ("false");
//  }else{
//      alert("age is 25");
//  }


//  //with !
//   let age3 = 22;
//   if(!(age3 > 14 && age3 < 90)){
//      alert ("false") ;
//   }else {
//       alert("age is 22");
//   }


//   // A question about "if"

//   /*Which of these alerts are going to execute?
//   What will the results of the expressions be inside if(...)?*/

// if (-1 || 0) alert( 'first' ); // will be execute; 1, -1||0 = -1(առաջին և միակ truthy-ն)
// if (-1 && 0) alert( 'second' ); // will not be done  -1 && 0 = 0(falsy)
// if (null || -1 && 1) alert( 'third' );//will be execute -1 && 1 = 1(վերջին ճիշտը), null || 1 =1(առաջին ճիշտը)


// // Check the login

// /*Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”*/

// let login = prompt("Who is there?", "Enter your login please");
// if ( login == 'Admin'){
//     let password = prompt("Enter your password", "Password ");
//     if( password == "TheMaster"){
//         alert ("Welcome!");
//     }else if ( password == null || password !="TheMaster"){
//         alert( 'Canceled');
//     }else {
//         alert( "Wrong password");
//     }
// }else if (login == null || login != "Admin"){
//     alert("I don't know you");
// }



// //Number

// //Sum numbers from the visitor
// //Create a script that prompts the visitor to enter two numbers and then shows their sum.

// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// alert( a + b );

// //According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
