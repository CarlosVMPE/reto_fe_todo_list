import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { TodoSelectedStateModel, TodoStateModel } from "./Todo.model";
import { TodoSelected, UpdateTodos } from "./todo.actions";
import { TodoList } from "src/app/shared/models/TodoList";

@State<TodoStateModel>({
    name: "todo",
    defaults: {
        items: [],
    },
})

@State<TodoSelectedStateModel>({
    name: "selected",
    defaults: {
      selected: new TodoList(''),
    },
})
@Injectable()
export class TodoState {

    @Action(UpdateTodos)
    updateTodos(ctx: StateContext<TodoStateModel>, action: UpdateTodos) {
        const state = ctx.getState();

        ctx.patchState({
            ...state,
            items: [...action.todos],
        });
    }

    @Action(TodoSelected)
    todoSelected(ctx: StateContext<TodoSelectedStateModel>, action: TodoSelected) {
        const state = ctx.getState();

        ctx.patchState({
            ...state,
            selected: action.todo
        });
    }
}
