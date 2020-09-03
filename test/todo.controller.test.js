const TodoController = require("../src/controller/todo.controller");
const TodoModel = require("../src/model/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../test/mock-data/new-todo");

TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  
  it("Should have a createTodoFunction", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("Should call TodoModel.create", () => {
    let req, res, next;
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
    req.body = newTodo;
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo)
  });

});
