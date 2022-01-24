describe('Main Test', () => {
  before(() => {
    cy.login();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  it('Click into main', () => {
    cy.visit('/#/popup/orders_colsetting/list');
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').click();
  });
});
