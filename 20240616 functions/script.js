function addTwoNumbers(num1,num2){
const sum=num1+num2;
console.log("The sum of two numbers are", sum);
}
addTwoNumbers(232,655);
addTwoNumbers(2432,655);
addTwoNumbers(2327,655);
addTwoNumbers(232,6855);
addTwoNumbers(232,65665);
addTwoNumbers(232,6555);

/* Create a program to calculate marks of 5 subject of a student and average marks of the student */

let studentName = "Rohan";
let english=55;
let Hindi=95;
let Punjabi=25;
let Maths=88;
let Science=65;

function marksOfStudent (studentName, english, hindi, punjabi, maths, science){
console.log(`Hi ${studentName}`)
const sumOfSubjects=english+hindi+punjabi+maths+science;
console.log(`Hi Your marks in english:${english},
    hindi:${hindi},
    punjabi:${punjabi},
    maths:${maths},
    science:${science}`);

    const avergeMarks=sumOfSubjects/5;
    console.log(`your averge marks are ${avergeMarks}`);
}
marksOfStudent(studentName,english, Hindi,Punjabi,Maths,Science);

