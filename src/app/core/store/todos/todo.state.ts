import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { TodoModel, TodoStateModel } from "./Todo.model";
import { AddTodo } from "./todo.actions";

@State<TodoStateModel>({
    name: "todo",
    defaults: {
        items: [],
    },
})
@Injectable()
export class TodoState {
    @Action(AddTodo)
    addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
        const state = ctx.getState();

        const newItem: TodoModel = {
            id: Math.floor(Math.random() * 1000),
            title: action.title,
            isActive: true,
        };

        ctx.setState({
            ...state,
            items: [...state.items, newItem],
        });
    }
}