class todoDashBoard {
  getVisitTodoDashboard() {
    cy.visit('http://localhost:4200/');
  }

  getNavbarAndTitle(title) {
    cy.get('mat-toolbar').find('span').contains(title);
    cy.get('mat-toolbar').find('mat-icon').contains('favorite');
    cy.get('mat-toolbar').find('mat-icon').contains('code');
  }

  isNotShowingById(identificador) {
    cy.get(`[data-test=${identificador}]`).should('not.exist');
  }

  isShowindById(identificador) {
    cy.get(`[data-test=${identificador}]`, { timeout: 30000 }).should('exist');
  }

  isClickingById(identificador) {
    cy.get(`[data-test=${identificador}]`).click();
  }

  someIdentifyHaveValue(identificador, value) {
    cy.get(`[data-test=${identificador}]`).should('have.value', value)
  }

  isButtonDisabled(identificador) {
    cy.get(`[data-test=${identificador}]`).should('be.disabled');
  }

  typeTextToInput(identificador, value) {
    cy.get(`[data-test=${identificador}]`).type(value)
  }

  existsTodoInList(nameTodo) {
    cy.get(`[data-test=${'block-todo-list'}]`).find('mat-panel-title').contains(nameTodo)
  }

  showDetailTodo(nameTodo) {
    cy.get(`[data-test=${'block-todo-list'}]`).find('mat-panel-title').contains(nameTodo).click();
  }

  markCompleteItems() {
    cy.get(`[data-test=${'item-description'}]`).first().click();
    cy.get(`[data-test=${'item-description'}]`).eq(1).click();
  }

  isClickEditFirstItem() {
    cy.get(`[data-test=${'item-edit'}]`).first().click();
  }

  isClickDeleteFirstItem() {
    cy.get(`[data-test=${'item-delete'}]`).first().click();
  }

  verifyUpdateFirstItem(nameItem){
    cy.get(`[data-test=${'item-description'}]`).first().contains(nameItem)
  }

  verifyCountItems(countItems){
    cy.get(`[data-test=${'item-description'}]`).should('have.length', countItems)
  }

}

export default todoDashBoard;
