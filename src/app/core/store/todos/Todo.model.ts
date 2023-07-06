import { TodoList } from "src/app/shared/models/TodoList";

export interface TodoStateModel {
    items: TodoList[];
}

export interface TodoSelectedStateModel {
    selected: TodoList;
}
