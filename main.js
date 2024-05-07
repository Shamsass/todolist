#! /usr/bin/env node 
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n \t welcome  to codewithshamsass=Todo-List Application \n");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task :"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task}Task added in Todo-List sucessfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addMore;
}
console.log("Your updated to do list:", todoList);
