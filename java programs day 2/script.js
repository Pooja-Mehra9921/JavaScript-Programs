/**
Ramesh's basic salary is input through the keyboard. His dearness allownance is 40% of basic salary, and house rent allowance is 20% of basic salary.
 Write a program to calculate his gross salary

//  => Formula for Gross salary : Salary +  DA + RA
*/

// -2- /-----------------------------------------------------
/**
The distance between two cities (in km) entered through key board.
 write a program to calculate distance in meters, feets and centimeter
*/

// Formula to calculate feet from km === km * 3280.84
// formula to calculate inch from km == 1ft * 12inch * km
// formula to calculate km to mtr == km(1) * mtr(1000) * cm(100)

// -3- /-----------------------------------------------------
/*
Enter the mark of 5 subject of student, and find the aggregate and percentage of all.
 Mark should not be greater than 100. 
*/

// Formula aggregate = totalMarks / number of subjects
// Formula Percentage = obtained marks / Total marks * 100

// -4- /-----------------------------------------------------
/*
temperature of a city in fahrenheit degrees is input through the keyboard.
write a program to convert the temprature into centigrade and centrigrade to farhenheit
*/

// Celsius to Fahrenheit: (9/5 × °C) + 32
// Fahrenheit to Celsius: 5/9(°F - 32)
// Kelvin to Celsius: K - 273

// ---5..--------------------------------------------------
/*
Enter length breadth of rectangle and find the area, perimeter.
Enter the radius of Circle and find the circumstance and area of circle
*/

// Formula of Rectangle Area == length * width
// Formula of perimeter of Rectangle == 2(length + width)
// Formula of circle Area == pie * r * r
// Formula of circle perimeter == 2 * pie * radius

/**
Ramesh's basic salary is input through the keyboard. His dearness allownance is 40% of basic salary, and house rent allowance is 20% of basic salary.
 Write a program to calculate his gross salary

//  => Formula for Gross salary : Salary +  DA + RA
*/

// let Ename = prompt("Enter your name here");
// let basicSalary = Number(prompt("Enter Your basic salery.."));

// const GrossSalary = ()=>{
// if(Ename != null &&  isNaN(basicSalary)){
// return console.log("Please enter your valid name here");
// }
// else{

//     console.log(`Hi ${Ename}`);

// let DearnessA = (40/100)*Number(basicSalary);
// let houseR = (20/100)*Number(basicSalary);
// let GrossS = basicSalary + DearnessA + houseR;

// console.log(`Hi ${Ename}, 
//     Your basic salary is : ${basicSalary}, 
//     and your dearness allownance is : ${DearnessA},
//     house rent allowance is : ${houseR},
//     Your Gross salary is : ${GrossS}`);

// }
// }
// GrossSalary();

// -2- /-----------------------------------------------------
/**
The distance between two cities (in km) entered through key board.
 write a program to calculate distance in meters, feets and centimeter
*/

// Formula to calculate feet from km === km * 3280.84
// formula to calculate inch from km == 1ft * 12inch * km
// formula to calculate km to mtr == km(1) * mtr(1000) * cm(100)

let City1 = prompt("Enter Your First city");
let City2 = prompt("Enter Your Second city");


          const ConvertKm =()=>{
            if(!City1 || !City2){
                return console.log("please enter your valid city names");
            }else{
                console.log(`Hi,
                    Your First city is : ${City1},
                  your second city is : ${City2}`);

                  let ValueOfKm = prompt("Enter The distance between Two cities in KM");
                  console.log(`Your Distance from one city to another city is: ${ValueOfKm}`);

                  let KMToFeet = ValueOfKm*3280.84;
                  console.log(`Your Distance from one city to another city in Feets is : ${KMToFeet} `);
                  let inch = 39370.1;
                  let KMToinch = 1*KMToFeet*(Number(12)*inch)*ValueOfKm;
                  console.log(`Your Distance from one city to another city in inches is : ${KMToinch} `);


            }

          }

          ConvertKm();



