// ✅ Array of Todo Items
const todos = [
  { title: "Do homework", done: false },
  { title: "Buy groceries", done: true },
  { title: "Clean the room", done: false },
  { title: "Pay the bills", done: true },
  { title: "Read a book", done: false },
  { title: "Walk the dog", done: true },
];

// ✅ Filter Todos into Completed and Ongoing
const completedTasks = todos.filter((todo) => todo.done);
const ongoingTasks = todos.filter((todo) => !todo.done);

// ✅ Display Completed Tasks
console.log("✅ Done:");
completedTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

// ✅ Display Ongoing Tasks
console.log("\n🕒 Ongoing:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});
