var listContainer = document.querySelector('section');

//create the list and append it to its container
var todoList = document.createElement('ul');
todoList.className = "list";
listContainer.appendChild(todoList);

/*array to save all the entered tasks, to 
handle the case if the same task entered twice*/
var tasks = [];

var addTask = function () {

    //Get the text inside the input box
    var inputText = document.querySelector('input').value;

    //check if user enter a task or not
    if (inputText.length !== 0) {

        //check if the task has been entered before
        if (!tasks.includes(inputText)) {
            //Add the new input to the tasks array
            tasks.push(inputText);
            //create and append the todo task
            var singleTask = "<li class=\"item\"><input type=\"checkbox\" class=\"itemChecked\"><span class=\"task\">" + inputText + "</span><i class=\"fa fa-times remove\" aria-hidden=\"true\"><span class=\"remove-popup\">Remove task</span></i></li>";
            todoList.insertAdjacentHTML('beforeend', singleTask);
            //reset the input text box
            document.querySelector('input').value = "";

        } else {
            alert("Task is already in the Todo List");
        }
    }
}

//select button element
var addButton = document.querySelector('button');
//Event Listener for ADD button
addButton.addEventListener('click', addTask);


//Remove task from the list if the x sign is clicked 
function removeTask(event) {
    if (event.target.nodeName.toLowerCase() === 'i') {
        event.target.parentElement.remove();
    }
}
todoList.addEventListener('click', removeTask);

//Add the task to the todo list by pressing ENTER key
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

//Strike through the Task, marking that it is done
function strikeTask(event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
        let task = event.target.nextElementSibling;
        task.classList.toggle("strike");
    }
}
todoList.addEventListener('click', strikeTask);

/*
var clearItems = document.querySelector('.clearItems');
clearItems.addEventListener('click', function(){
    document.querySelectorAll(".item").forEach(e => e.remove());
});
*/