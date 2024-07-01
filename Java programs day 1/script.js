/* 
1. Write a function to print your name, hobbies

2. Write a function to enter your you favorite avengers and concat with string 
    Input: entered {avenger-name} from keyboard
    Output: My favorite avenger is {avenger-name}. I am dying heart fan of {avenger-name}

3. Write a program to calculate sum of 5 subject entered using keyboard
4. Enter 10 numbers from keyboard and Write a program to calculate average of those 10 numbers
5. Write a function to find a number(Entered through keyboard) is EVEN || ODD
6. Write a function to calculate simple interest.
*/

// 1. Write a function to print your name, hobbies

function NameandHobbies ({Mname, hobbies}){
console.log(` hey My name is ${Mname}, and my hobbies are ${hobbies}`);
}

NameandHobbies({Mname:"", hobbies:"hokey, ballyball"});

/*  2. Write a function to enter your you favorite avengers and concat with string 
    Input: entered {avenger-name} from keyboard
    Output: My favorite avenger is {avenger-name}. I am dying heart fan of {avenger-name}
*/

// function Avengername (){

// //       const An = prompt("Please enter your fav avenger name");

//        if(An != null && isNaN(An)){
//         console.log(`My favorite avenger is ${An}, I am dying heart fan of ${An}`)
//        }else{
//         console.log("Please enter valid name");
//        }

// }
// Avengername();


// 3. Write a program to calculate sum of 5 subject entered using keyboard

    // let StudentName =prompt("Enter Your name ");
    // console.log(`Hello my name is ${StudentName}.`);

    // let english = prompt("Enter your marks in english");
    // let Hindi = prompt("Enter your marks in Hindi");
    // let punjabi = prompt("Enter your marks in punjabi");
    // let science = prompt("Enter your marks in science");
    // let math = prompt("Enter your marks in math");

    // const MarksofSubject = (stname, eng, hindi, pun, sci, math) =>{

    // const sum = Number(eng) + Number(hindi) + Number(pun) + Number(sci) + Number(math);

    // console.log(`My total marls are ${sum} / 500.<br>
    //     Your marks in English is ${english},
    //     Your marks in Hindi is ${Hindi},
    //     Your marks in punjabi is ${punjabi},
    //     Your marks in science is ${science},
    //     Your marks in math is ${math}`);
    // }

    // MarksofSubject(StudentName, english, Hindi, punjabi, science, math);

    // 4. Enter 10 numbers from keyboard and Write a program to calculate average of those 10 numbers
//     let num1 = prompt("Enter Your First Number");
//     let num2 = prompt("Enter Your second Number");
//     let num3 = prompt("Enter Your third Number");
//     let num4 = prompt("Enter Your fourth Number");
//     let num5 = prompt("Enter Your fifth Number");
//     let num6 = prompt("Enter Your sixth Number");
//     let num7 = prompt("Enter Your seventh Number");
//     let num8 = prompt("Enter Your eighth Number");
//     let num9 = prompt("Enter Your nineth Number");
//     let num10 = prompt("Enter Your tenth Number");

//     const AvergareMarks = (n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) =>{
// let sumOfnumbers = Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5) + 
//      Number(n6) + Number(n7) + Number(n8) + Number(n9) + Number(n10);

//      console.log(` Your Totat marks of these 10 numbers are ${sumOfnumbers}`);

//      average = sumOfnumbers/10;
//      console.log(`Yours average marks of those numbers are ${average}`);
//     }

//     AvergareMarks(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);

    //5. Write a function to find a number(Entered through keyboard) is EVEN || ODD

    function EorOdd (num){
let Enumber = prompt("Enter Your number");
console.log("This is your entered number" ,Number(Enumber));
if(Enumber%2 == 0){
console.log(`Your entered number is ${Enumber} and this is even`);
}else{
    console.log(`Your entered number is ${Enumber} and this is odd`);

}
    }

    EorOdd();

    // 6. Write a function to calculate simple interest.