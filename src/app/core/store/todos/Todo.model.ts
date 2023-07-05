export interface TodoModel {
    id: number;
    title: string;
    isActive: boolean;
}

export interface TodoStateModel {
    items: TodoModel[];
}