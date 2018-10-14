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
        "Add New Product",
        "Exit program"]
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select option',
            choices: choicesArray,
            name: "userChoice"
        }
    ]).then(function (answers) {

        if (answers.userChoice === "View Products for Sale") {
            displayItems();
        } else if (answers.userChoice === "View Low Inventory") {
            lowInventoryCheck();
        } else if (answers.userChoice === "Add to Inventory") {
            addToInventory();
        } else if (answers.userChoice === "Add New Product") {
            //  addNewProduct();
        } else if (answers.userChoice === "Exit program") {
            process.exit();
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

function addToInventory() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please type the item ID of product you want to add",
            name: "itemID"
        },
        {
            type: "input",
            message: "How many units do you want to add",
            name: "quantity"
        }


    ]).then(function (answers) {
        connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", [answers.itemID], function (err, res) {

            var quantityAdd = parseInt(answers.quantity);
            var updatedInventory = parseInt(res[0].stock_quantity) + quantityAdd;
            console.log("\nItem ID of product you wish to add: " + answers.itemID)
            console.log("Current stock: " + res[0].stock_quantity)
            console.log("you want to add: " + quantityAdd)
            console.log("New updated stock: " + updatedInventory)
            if (err) {
                return console.log(err);
            } else {
                updateProduct(answers.itemID, updatedInventory)
            }
        })
    })
}
function updateProduct(location, pass) {
    console.log("Updating quantities...\n");
    connection.query(
        "UPDATE products SET stock_quantity = ? WHERE item_id = ?",
        [pass, location],
        function (err, res) { 
            if (err) console.log(err);
            console.log(res.affectedRows + " products updated!\n")
            process.exit();
        }
        );
       
}

function addNewProduct(){
    console.log("Adding a new product...\n")
    connection.query(




    )

}