const TodoController = require("../src/controller/todo.controller");
const TodoModel = require("../src/model/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../test/mock-data/new-todo");

TodoModel.create = jest.fn();

// Global scope (used in all test case)
let req, res, next;

beforeEach( () => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
})

describe("TodoController.createTodo", () => {
  
  beforeEach( () => {
    req.body = newTodo;
  })

  it("Should have a createTodoFunction", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("Should call TodoModel.create", () => {
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo)
  });

  it("Should return 201 response code", () => {
    TodoController.createTodo(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("Should return json body in response", () => {
    TodoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res, next);
    expect(res._getJSONwData()).toStrictEqual(newTodo)
  });

});


