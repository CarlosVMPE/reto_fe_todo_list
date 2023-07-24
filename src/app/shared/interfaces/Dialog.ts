import { ComponentType } from "@angular/cdk/portal";

export interface DialogData {
  description: string;
}

export interface ActionModal<T = any> {
  component: ComponentType<T>,
  action: Function
}
