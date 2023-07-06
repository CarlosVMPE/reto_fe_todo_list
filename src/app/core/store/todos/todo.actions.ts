import { TodoList } from "src/app/shared/models/TodoList";

export class UpdateTodos {
  static readonly type = "[Todos] Update todos";
  constructor(public todos: TodoList[]) {}
}

export class TodoSelected {
  static readonly type = "[Todo] Todo Selected";
  constructor(public todo: TodoList) {}
}
