import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const cadastropim = require("../fixtures/cadastroUsuario.json");

Given('que o usuário está na tela de cadastro do PIM', () => {
  cy.login();
  cy.visit('/pim/viewEmployeeList');
  cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').and('be.enabled').click();
});

When('clica no botão Save sem preencher os campos obrigatórios', () => {
  cy.get('.oxd-button--secondary')
    .as('clickSave')
    .should('be.visible')
    .and('be.enabled')
    .click();
});

Then('o sistema deve exibir uma mensagem de campo obrigatório', () => {
  cy.get('.orangehrm-card-container')
    .should('not.be.disabled')
    .and('contain', 'Required');
});

When('preenche os campos de primeiro nome, último nome e ID', () => {
  cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
    .should('be.visible')
    .and('be.enabled')
    .type(cadastropim.cadastroValido.primeiroNome);

  cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
    .should('be.visible')
    .and('be.enabled')
    .type(cadastropim.cadastroValido.ultimoNome);

  cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
    .should('be.visible')
    .and('be.enabled')
    .clear()
    .type(cadastropim.cadastroValido.id);
});

When('clica no botão Save', () => {
  cy.get('.oxd-button--secondary')
    .as('clickSave')
    .should('be.visible')
    .and('be.enabled')
    .click();
});

Then('o sistema deve exibir uma mensagem de sucesso no cadastro', () => {
  cy.get('.oxd-toast')
    .should('not.be.disabled')
    .and('contain', 'Successfully');
});

Given('que o usuário está na tela PIM', () => {
  cy.login();
  cy.visit('/pim/viewEmployeeList');
});

When('pesquisa o usuário pelo nome', () => {
  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    .should('be.visible')
    .and('be.enabled')
    .type(cadastropim.search.primeiroNome);

  cy.get('.oxd-form-actions > .oxd-button--secondary')
    .as('Search')
    .should('be.visible')
    .and('be.enabled')
    .click();
});

Then('o sistema deve exibir os dados do usuário na listagem', () => {
  cy.get('.oxd-table-card > .oxd-table-row')
    .should('not.be.disabled')
    .and('contain', cadastropim.delete.id)
    .and('contain', cadastropim.delete.primeiroNome)
    .and('contain', cadastropim.delete.ultimoNome);
});

When('pesquisa o usuário pelo ID', () => {
  cy.get(':nth-child(2) > .oxd-input')
    .should('be.visible')
    .and('be.enabled')
    .type(cadastropim.search.id);

  cy.get('.oxd-form-actions > .oxd-button--secondary')
    .should('be.visible')
    .and('be.enabled')
    .click();

  cy.wait(1000);

  cy.get('.oxd-table-card > .oxd-table-row')
    .should('not.be.disabled')
    .and('contain', cadastropim.delete.id)
    .and('contain', cadastropim.delete.primeiroNome)
    .and('contain', cadastropim.delete.ultimoNome);
});

When('realiza a exclusão do usuário', () => {
  cy.wait(1000);
  cy.get('.oxd-table-cell-actions > :nth-child(2)')
    .should('be.visible')
    .and('be.enabled')
    .click();

  cy.get('.oxd-button--label-danger')
    .should('be.visible')
    .and('be.enabled')
    .click();
});

Then('o sistema deve exibir uma mensagem de sucesso na exclusão', () => {
  cy.get('.oxd-toast')
    .should('not.be.disabled')
    .and('contain', 'Successfully');
});
