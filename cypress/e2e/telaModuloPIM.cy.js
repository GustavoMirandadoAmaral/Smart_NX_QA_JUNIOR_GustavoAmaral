const cadastropim = require("../fixtures/cadastroUsuario.json");

describe('Cadastro de usuários na tela "PIM"', () => {

    beforeEach(() => {
    cy.login()
    cy.visit('/pim/viewEmployeeList')
  })

  it('Teste deve tentar cadastrar um usuário sem preencher os campos de nome', () => {
    cy.get('.orangehrm-header-container > .oxd-button').should('be.visible')
      .and('be.enabled')
      .click()
    cy.get('.oxd-button--secondary').as('clickSave').should('be.visible')
      .and('be.enabled')
      .click()

    cy.get('.orangehrm-card-container').should('not.be.disabled')
      .and('contain', 'Required')
  })

    it('Teste deve tentar cadastrar um usuário corretamente', () => {
    cy.get('.orangehrm-header-container > .oxd-button').should('be.visible')
      .and('be.enabled')
      .click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input', {timeout: 5000}).should('be.visible')
      .and('be.enabled')
      .type(cadastropim.cadastroValido.primeiroNome)
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input', {timeout: 5000}).should('be.visible')
      .and('be.enabled')
      .type(cadastropim.cadastroValido.ultimoNome)
      cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 5000}).should('be.visible')
      .and('be.enabled')
      .clear()
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 5000}).should('be.visible')
      .and('be.enabled')
      .type(cadastropim.cadastroValido.id)
    cy.get('.oxd-button--secondary').as('clickSave').should('be.visible')
      .and('be.enabled')
      .click()
    cy.wait(6000)
    cy.url().should('include', '/pim/viewPersonalDetails/empNumber/168')
  })
})
