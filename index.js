// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Mash & Lamb Shank"],
    Desserts: ["Tiramisu", "Cheesecake", "Brownies", "Apple Pie"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainerElement = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (let [category, items] of Object.entries(menu)) {
        // Create an element to represent the category
        const categoryElement = document.createElement("h3");
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        // Append the category element to the menu container
        menuContainerElement.appendChild(categoryElement);
        // Create an element to represent a list of items
        const listItemElement = document.createElement("ul");
        // Append a list of items element to the menu container
        menuContainerElement.append(listItemElement);
        // Loop through the items in the category and create list items
        items.forEach(item => {
            // Create a list item element
            const listItem = document.createElement("li");
            // Set the text content of the list item element to the item name
            listItem.textContent = item;
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", () => addToOrder(item));
            // Append the list item to the list of items
            listItemElement.appendChild(listItem);
        });
    }          
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemListElement = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    // Create a list item for the order
    let orderItemList = document.createElement("li"); 
    // Set the text content of the list item to the item name
    orderItemList.textContent = itemName;
    // Append the list item to the order items list
    orderItemListElement.appendChild(orderItemList);
    // Calculate and update the total price
    currentTotal = parseFloat(orderTotalElement.textContent);
    // Update the text content of the order total element with the new total
    let itemPrice = 60;
    let newTotal = currentTotal + itemPrice;
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

//A function to remove the menu items when clicked needs to be added

// Start the menu system by calling the init function
initMenuSystem(menu);
