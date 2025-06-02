import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que o usuário está logado na plataforma', () => {
    cy.login()
    cy.visit('/dashboard/index');
});

When('pesquisa por {string} na barra de pesquisa', (modulo) => {
    cy.get('.oxd-input').should('be.visible')
      .and('be.enabled')
      .type(modulo);
});

When('clica no módulo PIM', () => {
    cy.get('.oxd-main-menu-item').should('contain', 'PIM')
      .click();
});

Then('deve ser redirecionado para a página do módulo PIM', () => {
    cy.location('pathname', { timeout: 20000 }).should('contain', '/pim/viewEmployeeList');
    cy.get('.oxd-topbar-header-title').should('contain', 'PIM');
});
