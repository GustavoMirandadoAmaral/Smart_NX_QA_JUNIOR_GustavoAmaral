const telaLogin = require("../fixtures/login.json");


describe('Testes na tela de login', () => {
    beforeEach(() => {
    cy.login()
    cy.visit('/dashboard/index')
  })
  it('Teste deve fazer login com sucesso', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type(telaLogin.loginValido.username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type(telaLogin.loginValido.senha)
    cy.get('.oxd-button').should('be.visible')
      .and('be.enabled')
      .click()
    cy.contains('Dashboard')
  })

    it('Teste deve tentar fazer login com os campos vazios', () => {
    cy.get('.oxd-button').should('be.visible')
      .and('be.enabled')
      .click()
    cy.contains('Required')
  })

    it('Teste deve tentar fazer login com credenciais inválidas', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type(telaLogin.loginInvalido.username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type(telaLogin.loginInvalido.senha)
    cy.get('.oxd-button').should('be.visible')
      .and('be.enabled')
      .click()
    cy.contains('Invalid credentials')
  })
})