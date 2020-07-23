// DOM declarations

// take tasks from button
const input = document.querySelector("input");
const getTask = document.querySelector("form");

// testing functions //
function test(name, testFunction) {
   // EQUAL
   function equal(x, y, message = `Expected ${x} to equal ${y}`) {
      if (x === y) {
         console.info("Pass: " + message);
      } else {
         console.error("Fail: " + message);
      }
   }
   // NOT EQUAL
   function notEqual(x, y, message = `Expected ${x} not to equal ${y}`) {
      if (x !== y) {
         console.info("Pass: " + message);
      } else {
         console.error("Fail: " + message);
      }
   }
   const assertions = {
      equal,
      notEqual,
   };
   console.group(name);
   testFunction(assertions);
   console.groupEnd(name);
}

// trim white spaces
function trimSpaces(text) {
   return text.trim();
}

// submit and not "click"
getTask.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
   event.preventDefault(); // prevent page refresh by default bacuase we don't have a database
   // store new task
   const newTask = getTask.task.value;
   // clear form texbox value after submition
   input.value = "";
   //checking white spaces
   trimSpaces(newTask);
   // adding new task to ul element
   addTask(newTask);
}

// Create a new list item when clicking on the "Add" button
function addTask(task) {
   console.log("tal3a adding task");
   const ulTask = document.querySelector("ul");
   const TaskText = document.createElement("span");
   // TaskLi add event listener to this to tackle the strikethrough all element bug
   const TaskLi = document.createElement("li");
   TaskText.textContent = task;
   // add the delete icon image
   const DelIcon = document.createElement("i");
   DelIcon.setAttribute("class", "far fa-trash-alt");
   //<i class="far fa-trash-alt"></i>     // icon
   ulTask.appendChild(TaskLi);
   TaskLi.appendChild(TaskText);
   TaskLi.appendChild(DelIcon);
   // check task as finished with a strikethrough
   genStrikeTrough(TaskText);
   delTask(DelIcon);
}

// strickthrough funcionality //
// event listener on ul turns all inside elements clickable (with a bug that select all elements)

function genStrikeTrough(task) {
   console.log(typeof task);
   task.addEventListener("click", (e) => {
      console.log(e);
      // trike through span element by toggiling classlist with "strikThrough" class defined in css
      event.target.classList.toggle("strikeThrough");
   });
}

// delete task functionality
function delTask(icon) {
   console.log("delete fucntion works");
   icon.addEventListener("click", (e) => {
      console.log("delete event taken " + e);
      event.target.parentElement.remove(); // clicking on delete icon will remove the task (parent element "li")
   });
}
