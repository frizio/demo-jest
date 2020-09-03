const TodoController = require("../src/controller/todo.controller");
const TodoModel = require("../src/model/todo.model");

TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  
  it("Should have a createTodoFunction", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("Should call TodoModel.create", () => {
    TodoController.createTodo();
    expect(typeof TodoModel.create).toBeCalled();
  });

});
