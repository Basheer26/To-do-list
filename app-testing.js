// trimming extra space
test("can trim spaces on the sides", (t) => {
   t.equal(trimSpaces("  to do app     "), "to do app");
   t.notEqual(trimSpaces("  to do app     "), "to do app     ");
});

// task input
test("gets the task input from the user", (t) => {
   // new Task
   addTask("Task test");
   const testTask = document.querySelector("ul");
   const litest = document.querySelector("li");
   const spantest = document.querySelector("span");
   // Test if equal
   t.equal(spantest.textContent, "Task test");
   t.notEqual(spantest.textContent, "random Task");
   litest.remove();
});

// check if strikthrough works
test("can strikethrough tasks", (t) => {
   // new Task
   addTask("strikethrough task");
   const testTask = document.querySelector("ul");
   const litest = document.querySelector("li");
   const spantest = document.querySelector("span");
   //invokint click
   spantest.click();
   console.log("spantest.className " + spantest.className);
   t.equal(spantest.className, "strikeThrough");
   t.notEqual(spantest.className, "Not strikeThrough");
   // remove li test element
   litest.remove();
});

// check if the function delTask which deletes tasks works properly
test("check if task is deleted", (t) => {
   // new Task
   addTask("delete task");
   const testTask = document.querySelector("ul");
   const litest = document.querySelector("li");
   const spantest = document.querySelector("span");
   const DelIcon = document.querySelector("i");
   console.log(litest);
   DelIcon.click();
   delTask(DelIcon);
   console.log("after " + litest);
   // check qeury select or get element return value of null
   t.equal(litest, null);
});
// integration test - which is basically the "handleSubmit" function
