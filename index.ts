
let listas: Lista[] = [];

const newTodo = (title) => {
  console.log("Debería crear un nuevo todo");
  const nuevaLista = new Lista(title);
  listas.push(nuevaLista);
};

const addItemsTodo = (idTodo, description) => {
  console.log("Debería agregar un nuevo item al todo ", idTodo);
  listas.map((list) => {
    if (list.id === idTodo) {
      const nuevoItem = new ListaItem(description);
      list.items.push(nuevoItem);
    }
  });
};

const editarItemTodo = (idTodo, position, desc) => {
  console.log("Debería editar un item del todo por su id ", idTodo);
  listas.map((list) => {
    if (list.id === idTodo) {
      list.items[position].desc = desc;
    }
  });
};

const eliminarItemTodo = (idTodo, position) => {
  console.log("Debería eliminar un item del todo por su id ", idTodo);
  listas.map((list) => {
    if (list.id === idTodo) {
      list.items.splice(position, 1);
    }
  });
};

const completeItemTodo = (idTodo, position) => {
  console.log("Debería marcar completado un item del todo por su id ", idTodo);
  listas.map((list) => {
    if (list.id === idTodo) {
      list.items[position].completado = !list.items[position].completado;
    }
  });
};

const getItemsTodos = (idTodo) => {
  console.log("Debería traer la lista de items del todo");
  listas.map((list) => {
    if (list.id === idTodo) {
      console.log(list.items);
    }
  });
};

export class Lista {
  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn: Date;
  terminada: boolean;
  items: ListaItem[];

  constructor(titulo: string) {
    this.titulo = titulo;
    this.creadaEn = new Date();
    this.terminada = false;
    this.items = [];

    this.id = new Date().getTime();
  }
}

export class ListaItem {
  desc: string;
  completado: boolean;

  constructor(desc: string) {
    this.desc = desc;
    this.completado = false;
  }
}
