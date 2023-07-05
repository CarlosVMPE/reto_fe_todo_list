import { TodoModel } from "./Todo.model";


export class AddTodo {
  static readonly type = "[Todo] Add todo";
  constructor(public title: string) {}
}

export class ChangeStatus {
  static readonly type = "[Todo] Change status";
  constructor(public readonly todoItem: TodoModel, public readonly status: boolean) {}
}