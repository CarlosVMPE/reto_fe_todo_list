import { Selector } from "@ngxs/store";

import { TodoState } from "./todo.state";
import { TodoStateModel } from "./Todo.model";

export class TodoSelectors {
  @Selector([TodoState])
  static items(state: TodoStateModel) {
    return state.items;
  }

  @Selector([TodoState])
  static doneItems(state: TodoStateModel) {
    return state.items.filter((it) => !it.isActive);
  }

  @Selector([TodoState])
  static activeItems(state: TodoStateModel) {
    return state.items.filter((it) => it.isActive);
  }
}