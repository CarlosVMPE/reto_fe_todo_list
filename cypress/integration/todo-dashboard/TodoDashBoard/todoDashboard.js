/// <reference types="cypress" />

import { Given } from 'cypress-cucumber-preprocessor/steps';
import todoDashBoard from '../../PageObjects/todoDashBoardPage';

const dashboard = new todoDashBoard();

Given('Visito todo dashboard', () => {
  dashboard.getVisitTodoDashboard();
});

Then('Se muestra el navbar con el titulo {string}', (title) => {
  dashboard.getNavbarAndTitle(title);
});

Then('Se muestra el formulario de Agregar Todo', () => {
  dashboard.isShowindById('dashboard__todo--form');
});

Then('El input de agregar todo deberia estar vacío', () => {
  dashboard.someIdentifyHaveValue('nameTodo', '');
});

Then('El input boton del formulario Agregar Todo debería estar inhabilitado', () => {
  dashboard.isButtonDisabled('button--addition-todo');
});

Then('Existe el Todo con nombre {string}', (nameTodo) => {
  dashboard.existsTodoInList(nameTodo);
});

Then('Se muestra el detalle del todo {string}', (nameTodo) => {
  dashboard.showDetailTodo(nameTodo);
});

Then('Se muestra sección de Todo Completado', () => {
  dashboard.isShowindById('block-todo-complete')
});

Then('El primer elemento debería tener el texto {string}', (nameItem) => {
  dashboard.verifyUpdateFirstItem(nameItem)
});

Then('Se debería tener en lista {string} cantidad de items', (cantItems) => {
  dashboard.verifyCountItems(cantItems)
});


When('Ingreso el nombre del todo {string}', (nameTodo) => {
  dashboard.typeTextToInput('nameTodo', nameTodo);
});

When('Ingreso el nombre del item {string}', (nameTodo) => {
  dashboard.typeTextToInput('nameItem', nameTodo);
});


When('Se hace click en el botón de Agregar Todo', () => {
  dashboard.isClickingById('button--addition-todo');
});

When('Se hace click en el botón de Agregar Item', () => {
  dashboard.isClickingById('button--addition-item');
});

When('Se marca como completado los dos primeros items', () => {
  dashboard.markCompleteItems();
});

When('Se hace click en editar el primer item', () => {
  dashboard.isClickEditFirstItem();
});

When('Se hace click en eliminar el primer item', () => {
  dashboard.isClickDeleteFirstItem();
});

When('Actualizo el nombre del item a editar {string}', (newName) => {
  cy.get('input[name="description-edit"]').clear({force: true})
  dashboard.typeTextToInput('description-edit', newName);
});

When('Se hace click en el boton de Actualizar Item', () => {
  dashboard.isClickingById('buton-update-item');
});

When('Se hace click en el boton de Eliminar Item', () => {
  dashboard.isClickingById('buton-delete-item');
});
