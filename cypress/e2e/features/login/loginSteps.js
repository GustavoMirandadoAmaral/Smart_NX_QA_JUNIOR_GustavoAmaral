import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const dadosLogin = require("../../../fixtures/login.json");

Given('que o usuário está na tela de login', () => {
  cy.visit('/auth/login');
});

When('o usuário insere username válido', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type(dadosLogin.loginValido.username);
});

When('insere a senha válida', () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type(dadosLogin.loginValido.senha);
});

When('o usuário insere username inválido', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type(dadosLogin.loginInvalido.username);
});

When('insere a senha inválida', () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type(dadosLogin.loginInvalido.senha);
});

When('clica no botão login', () => {
    cy.get('.oxd-button').should('be.visible')
      .and('be.enabled')
      .click();
});

When('clica no botão login sem preencher os campos', () => {
    cy.get('.oxd-button').should('be.visible')
      .and('be.enabled')
      .click();
});

Then('deve visualizar a página de dashboard', () => {
    cy.contains('Dashboard').should('be.visible');
});

Then('deve visualizar a mensagem de erro {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible');
});
