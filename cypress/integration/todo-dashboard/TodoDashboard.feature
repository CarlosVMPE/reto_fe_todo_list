Feature: Todo Dashboard

  Scenario: Se muestra la pantalla inicial del Dashboard Todo
    Given Visito todo dashboard
    Then Se muestra el navbar con el titulo "Todo List App"
    And Se muestra el formulario de Agregar Todo
    And El input de agregar todo deberia estar vacío
    And El input boton del formulario Agregar Todo debería estar inhabilitado

  Scenario: Se agrega un nuevo todo a la lista y se deberia mostrar en la lista
    Given Visito todo dashboard
    When Ingreso el nombre del todo "Compras Semanales"
    And Se hace click en el botón de Agregar Todo
    Then El input de agregar todo deberia estar vacío
    And Existe el Todo con nombre "Compras Semanales"

  Scenario: Se agrega un nuevo todo a la lista, se agrega tareas al todo y se marca como completado el Todo
    Given Visito todo dashboard
    When Ingreso el nombre del todo "Compras Semanales"
    And Se hace click en el botón de Agregar Todo
    Then El input de agregar todo deberia estar vacío
    And Se muestra el detalle del todo "Compras Semanales"
    When Ingreso el nombre del item "Vegetales"
    And Se hace click en el botón de Agregar Item
    When Ingreso el nombre del item "Frutas"
    And Se hace click en el botón de Agregar Item
    And Se marca como completado los dos primeros items
    Then Se muestra sección de Todo Completado

  Scenario: Se edita correctamente un item del todo
    Given Visito todo dashboard
    When Ingreso el nombre del todo "Compras Semanales"
    And Se hace click en el botón de Agregar Todo
    Then El input de agregar todo deberia estar vacío
    And Se muestra el detalle del todo "Compras Semanales"
    When Ingreso el nombre del item "Vegetales"
    And Se hace click en el botón de Agregar Item
    When Ingreso el nombre del item "Frutas"
    And Se hace click en el botón de Agregar Item
    And Se hace click en editar el primer item
    When Actualizo el nombre del item a editar "Arroz"
    And Se hace click en el boton de Actualizar Item
    Then El primer elemento debería tener el texto "Arroz"

  Scenario: Se elimina correctamente un item del todo
    Given Visito todo dashboard
    When Ingreso el nombre del todo "Compras Semanales"
    And Se hace click en el botón de Agregar Todo
    Then El input de agregar todo deberia estar vacío
    And Se muestra el detalle del todo "Compras Semanales"
    When Ingreso el nombre del item "Vegetales"
    And Se hace click en el botón de Agregar Item
    When Ingreso el nombre del item "Frutas"
    And Se hace click en el botón de Agregar Item
    And Se hace click en eliminar el primer item
    And Se hace click en el boton de Eliminar Item
    Then Se debería tener en lista "1" cantidad de items
