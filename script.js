var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
} 

function listLength(){
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); // Create a new li element
    li.appendChild(document.createTextNode(input.value)); // Set its text content to the input value
    ul.appendChild(li); // Append it to the ul

    // Reset text input field
    input.value = "";

    function crossOut() {
        li.classList.toggle("done"); // Toggle the 'done' class on click
    }

    li.addEventListener("click", crossOut);

    // START ADD DELETE BUTTON
    var dBtn = document.createElement("button"); // Create a delete button
    dBtn.appendChild(document.createTextNode("X")); // Set its text content to 'X'
    li.appendChild(dBtn); // Append it to the li

    dBtn.addEventListener("click", deleteListItem); // Add event listener to the delete button
    // END ADD DELETE BUTTON

    function deleteListItem() {
        li.classList.add("delete"); // Add 'delete' class to the li
    }
}

function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement(); // Create a new list element if input is not empty
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement(); // Create a new list element on 'Enter' key press
    } 
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
