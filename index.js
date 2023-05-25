"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaItem = exports.Lista = void 0;
var listas = [];
var newTodo = function (title) {
    console.log("Debería crear un nuevo todo");
    var nuevaLista = new Lista(title);
    listas.push(nuevaLista);
};
var addItemsTodo = function (idTodo, description) {
    console.log("Debería agregar un nuevo item al todo ", idTodo);
    listas.map(function (list) {
        if (list.id === idTodo) {
            var nuevoItem = new ListaItem(description);
            list.items.push(nuevoItem);
        }
    });
};
var editarItemTodo = function (idTodo, position, desc) {
    console.log("Debería editar un item del todo por su id ", idTodo);
    listas.map(function (list) {
        if (list.id === idTodo) {
            list.items[position].desc = desc;
        }
    });
};
var eliminarItemTodo = function (idTodo, position) {
    console.log("Debería eliminar un item del todo por su id ", idTodo);
    listas.map(function (list) {
        if (list.id === idTodo) {
            list.items.splice(position, 1);
        }
    });
};
var completeItemTodo = function (idTodo, position) {
    console.log("Debería marcar completado un item del todo por su id ", idTodo);
    listas.map(function (list) {
        if (list.id === idTodo) {
            list.items[position].completado = !list.items[position].completado;
        }
    });
};
var getItemsTodos = function (idTodo) {
    console.log("Debería traer la lista de items del todo");
    listas.map(function (list) {
        if (list.id === idTodo) {
            console.log(list.items);
        }
    });
};
var Lista = /** @class */ (function () {
    function Lista(titulo) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
    return Lista;
}());
exports.Lista = Lista;
var ListaItem = /** @class */ (function () {
    function ListaItem(desc) {
        this.desc = desc;
        this.completado = false;
    }
    return ListaItem;
}());
exports.ListaItem = ListaItem;
