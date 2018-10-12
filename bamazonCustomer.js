var mysql = require("mysql");
var inquirer = require('inquirer')
var dataB =[]
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
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        dataB=res
        if (err) throw err;
        console.log("\n-----------MY SHOP-----------");
        console.log("PROD. ID# | PROD. NAME | DEPARTMENT | $$$ | AVAILABLE UNTIS \n");

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity)
        }

        askUser();
    });
}

function askUser() {

    inquirer.prompt([
        {
            type: "input",
            name: "productID",
            message: "What is the product ID# of the item you would like to buy?"
        },
        {
            type: "number",
            name: "quantity",
            message: "How many units of this product would you like to purchase?"
        },


    ]).then(function (answers) {
        
            var saleProdID = answers.productID
           // console.log(res)
            console.log(answers.quantity)
            console.log(answers.quantity , dataB[answers.productID-1].stock_quantity)
            //console.log(res[0].stock_quantity)
            if (answers.quantity > dataB[answers.productID-1].stock_quantity) {

                console.log("Sorry...insufficient quantity")
                
             } else {
                var ans = dataB[answers.productID-1].stock_quantity - answers.quantity
                updateProduct(answers.productID, ans);
            }

        })



    
}

function updateProduct(location, pass) {
    console.log("Updating quantities...\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: pass
        },
            {
                item_id: location
        }
        ],
        function (err, res) {
            //console.log(res.affectedRows + " inventory updated!\n");
            // Call deleteProduct AFTER the UPDATE completes

        }
    );

    // logs the actual query being run
    console.log(query.sql);
}



//run a select query to get current quantity //select * from products
    //*INSIDE THE .then * run update query 