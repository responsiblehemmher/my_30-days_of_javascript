/* document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('list-container');

    function addTask() {
        const inputBox = document.getElementById('input-box');
        const taskText = inputBox.value.trim();
        if (taskText === '') {
            return "Please write a todo list";
        }

        const li = document.createElement('li');
        
        // Add the Unicode checked box before the task text
        const checkbox = document.createElement('span');
        checkbox.innerHTML = '&#9744;'; // Unicode for an empty checkbox
        checkbox.style.marginRight = '10px';

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        
        // Add click event to toggle checked state
        li.addEventListener('click', function() {
            this.classList.toggle('checked');
            if (this.classList.contains('checked')) {
                checkbox.innerHTML = '&#9745;'; // Unicode for a checked checkbox
            } else {
                checkbox.innerHTML = '&#9744;'; // Unicode for an empty checkbox
            }
        });

        // Add delete button (optional)
        const span = document.createElement('span');
        span.textContent = '\u00D7'; // Unicode for multiplication sign (x)
        span.onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        };
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = '';
    }

    document.querySelector('button').addEventListener('click', addTask);

    // Optional: If you want to add tasks on Enter key press
    document.getElementById('input-box').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
 */



const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if(inputBox.value === '') {
        alert("You must write something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add a cross icon in a span tag
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData(); // we called the saveData function whenever we have a new data
}

// add feature that will check and uncheck when click on any item. Also make the cross icon delete any item
listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData() // same here too
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        saveData() // also here
    }
}, false);

//store the task in browser so that it wont dissapear anytime we refresh

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

//display data whenever we open the browser again
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();  