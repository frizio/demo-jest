const TodoController = require("../src/controller/todo.controller");

describe("TodoController.createTodo", () => {
  
  it("Should have a createTodoFunction", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

});
