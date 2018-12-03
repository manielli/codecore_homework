const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input = ""
function toDoMenu (input){
    if (input == "v" ) {

        printList(".toDoList.csv");  

    }   else if (input == "n") {

        rl.question("\nWhat is the item you'd like to add?\n>", addItem);
    }   else if (input == "cX") {

        markCompleted(completedItem);
    }   else if (input == "dX") {

        rl.close();
    }   else if (input == "q") {
        console.log("");
        rl.close();
    }   else {
        console.log("\nOption not specified.\n");
        rl.question("\nTry Again!\n>", toDoMenu);
    }   

}

rl.question(`\n\n
Welcome to the To Do CLI:\n
-------------------------\n
(v) View    • (n) New   • (cX) Complete • (dX) Delete   • (q) quit\n\n>`, toDoMenu);

function printList (pathToList) {
    fs.readFile(pathToList, "utf8", (error, data) => {
        if (error) return console.error(error);
        
        const regex = /,/gi;
        console.log(`\n${data.replace(regex," ")}`);
        rl.question(`\n\nWelcome to the To Do CLI:\n-------------------------\n(v) View    • (n) New   • (cX) Complete • (dX) Delete   • (q) quit\n\n>`, toDoMenu);
    });

}

function addItem (itemToAdd) {

    fs.readFile(".toDoList.csv", "utf8", (error, data) => {
        if (error) return console.error(error);
        // console.log(data);
        const splitData = data
            .split("\n");
        // console.log(splitData);

        splitData.push(`${splitData.length},[ ],${itemToAdd}`);
        const newList = splitData.join("\n");
        fs.writeFile(oldList, newList, error => {
        });

        rl.question(`\n\nWelcome to the To Do CLI:\n-------------------------\n(v) View    • (n) New   • (cX) Complete • (dX) Delete   • (q) quit\n\n>`, toDoMenu);
    });

}

function markCompleted (completedItem) {
    fs.readFile(".toDoList.csv", "utf8",(error, data) => {
        if (error) return console.error(error);

        

    });
}

