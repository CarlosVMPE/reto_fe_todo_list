import { TodoItem } from './TodoItem';

export class TodoList {
  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn?: Date;
  terminada: boolean;
  items: TodoItem[];

  constructor(titulo: string) {
    this.titulo = titulo;
    this.creadaEn = new Date();
    this.terminada = false;
    this.items = [];

    this.id = new Date().getTime();
  }
}
