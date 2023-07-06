import { Selector } from "@ngxs/store";
import { TodoState } from "./todo.state";
import { TodoSelectedStateModel, TodoStateModel } from "./Todo.model";

export class TodoSelectors {
  @Selector([TodoState])
  static items(state: TodoStateModel) {
    return state.items;
  }

  @Selector([TodoState])
  static selected(state: TodoSelectedStateModel) {
    return state.selected;
  }
}
