const todos = [
  { message: "11.00 clg" },
  { message: "12.00 lec" },
  { message: "01.00 lunch" },
  { message: "02.00 home" },
];

const allTodo = todos.map((todo) => todo);
console.log("All todos : ", allTodo);

const remainingTodo = todos.filter((todo) => todo.message !== "02.00 home");
console.log("Remaining todos : ", remainingTodo);

const deltedTodo = todos.filter((todo) => todo.message === "02.00 home");
console.log("Deleted tod : ", deltedTodo);
