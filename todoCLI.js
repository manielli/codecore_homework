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

        rl.question("\nWhat is the item you'd like to add", addItem);
    }   else if (input == "cX") {

        rl.close();
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
        console.log(data);
    });
    rl.close();
    // rl.question(`Welcome to the To Do CLI:\n\n--------------------------\n\n(v) View    • (n) New   • (cX) Complete • (dX) Delete   • (q) quit\n\n>`, toDoMenu);
}

function addItem (itemToAdd) {

    fs.readFile(".toDoList.csv", "utf8", (error, data) => {
        if (error) return console.error(error);
        newListWithAddedItem = data.push(`${data.length},[ ],${itemToAdd}`);
        
        // fs.writeFile()
    });

}

