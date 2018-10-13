var mysql = require("mysql");
var inquirer = require('inquirer')
var dataB = []
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    listOptions();
});

function listOptions() {
    var choicesArray = ["View Products for Sale",
        "View Low Inventory",
        "Add to Inventory",
        "Add New Product"]
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select option',
            choices: choicesArray,
            name: "userChoices"
        }
    ]).then(function (answers) {
        console.log(answers)
        if (answers.userChoices === "View Products for Sale") {
            displayItems();
        } else if (answers.userChoices === "View Low Inventory") {
            lowInventoryCheck();
        } else if (answers.userChoices === "Add to Inventory"){
            addToInventory();
        }

    })
}

function displayItems() {
    connection.query("SELECT * FROM products", function (err, res) {

        if (err) throw err;
        console.log("\n-----------MY SHOP-----------");
        console.log("PROD. ID# | PROD. NAME | DEPARTMENT | $$$ | AVAILABLE UNTIS \n");

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity)
        }
        process.exit();
    });
}

function lowInventoryCheck() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 500", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity)
        }
        process.exit();

    })
}

function addToInventory(){
    
}