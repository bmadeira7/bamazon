# Homework Assignment -  bAmazon

 **CUSTOMER VIEW**

This is my bAmazon homework assignment. I created a database in mySQL and populated it with over ten different items. When you type node bamazonCustomer.js 
into the command line. It will display those items along with their ID number, Item name, department, price per unit, and the remaining quantity.

![bAmazon](images/bamazonSS1.png)

When you select an Item ID and quantity, you make a purchase, then this app will adjust the inventory and also display the total cost of the purchase. The next time the program is run the inventory will reflect the previous purchase.

![bAmazon](images/bamazonSS2.png)

If the user tries to buy more than what is in available stock, the user will get a message telling them that the inventory levels are insufficient to complete the purchase, and the inventory remains the same.

![bAmazon](images/bamazonSS3.png)

**Manager View**

When you run node bamazonManager.js in the terminal, the store manager has 4 options to choose from 
1. View Products for sale
2. View low inventory (below 500 units)
3. Add to the inventory
4. Add a new product

![bAmazon](images/bamazonSS4.png)

1. If the user selects View Products for sale, the user will get a current snapshot of all items and their quantities.

![bAmazon](images/bamazonSS5.png)

2. If the user selects View Low Inventory, the user will get a list of those products with a stock level below 500 units.

![bAmazon](images/bamazonSS6.png)

3. If the user selects Add to the Inventory, the user will be prompted to input the item ID and the quantity they wish to add. Then the new stock quantity will be displayed and also updated in the database.

![bAmazon](images/bamazonSS7.png)
![bAmazon](images/bamazonSS8.png)

4. 
