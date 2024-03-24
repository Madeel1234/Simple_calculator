#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
{ message:"Enter your firstNumber",type:"number", name: "firstNumber"},
{ message:"Enter your secondNumber",type:"number",name:"secondNumber"},    
{
message:"Select one of operator to perform action",
type: "list",
name: "operator",
choices: ["ADDITION","SUBSTRACTION","MULTIPLICATION","DIVISION"],
},
])



// conditional statement
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "SUBSTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "MULTIPLICATION"){
        console.log(answer.firstNumber * answer.secondNumber);
    } else if (answer.operator === "DIVISION"){
        console.log(answer.firstNumber / answer.secondNumber);
}
else ("Please select correct operator")

console.log("THE END")